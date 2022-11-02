import React from "react";
import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import { useState, useEffect } from "react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import { useTheme } from "@mui/material/styles";
import {
  Card,
  Link,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../../redux/store";
import { getNotifList } from "../../../redux/slices/notifications";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
// import useAuth from "../../../hooks/useAuth";
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import Label from "../../../components/Label";
import Scrollbar from "../../../components/Scrollbar";
import SearchNotFound from "../../../components/SearchNotFound";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import {
  NotificationListHead,
  NotificationListToolbar,
  NotificationMoreMenu,
} from "./components";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "title", label: "Title", alignRight: false },
  { id: "message", label: "Message", alignRight: false },
  { id: "count", label: "Recived Notification", alignRight: false },
  { id: "type", label: "Type", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_notif) =>
        _notif.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _notif.message.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _notif.count.query !== -1 ||
        _notif.type.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _notif.status.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

const NotificationDirectory = () => {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { notificationList, isLoading } = useSelector(
    (state) => state.notifications
  );
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("type");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getNotifList());
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = notificationList.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleDeleteNotification = (notifId) => {
    // dispatch(deleteRoute(NotifId));
    dispatch(getNotifList());
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - notificationList.length)
      : 0;

  const filteredNotifications = applySortFilter(
    notificationList,
    getComparator(order, orderBy),
    filterName
  );

  const isNotificationNotFound = filteredNotifications.length === 0;

  return (
    <Page title="Notification Directory">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Notifications Directory"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            {
              name: "Notifications",
              href: PATH_DASHBOARD.dashboard.notifications.directory,
            },
            { name: "Directory" },
          ]}
        />

        <Card>
          <NotificationListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <NotificationListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={notificationList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredNotifications
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { _id, title, message, count, type, status } = row;
                      const isItemSelected = selected.indexOf(_id) !== -1;

                      return (
                        <TableRow
                          hover
                          key={_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, _id)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography variant="subtitle2" noWrap>
                                <Link
                                  to={`${PATH_DASHBOARD.dashboard.notifications.directory}/${_id}`}
                                  color="inherit"
                                  underline="none"
                                  variant="subtitle2"
                                  component={RouterLink}
                                >
                                  {title}
                                </Link>
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">
                            {message.substring(0, 42) + "..."}
                          </TableCell>
                          <TableCell align="left">{count}</TableCell>
                          <TableCell align="left">{type}</TableCell>
                          <TableCell align="left">
                            <Label
                              variant={
                                theme.palette.mode === "light"
                                  ? "ghost"
                                  : "filled"
                              }
                              color={
                                (status === "banned" && "error") || "success"
                              }
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <NotificationMoreMenu
                              onDelete={() => handleDeleteNotification(_id)}
                              _id={_id}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isNotificationNotFound && !isLoading && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={notificationList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
};

export default NotificationDirectory;
