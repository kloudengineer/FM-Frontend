import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { useTheme } from '@mui/material/styles';
import {
  Card,
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
  TablePagination
} from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getVehicleList, deleteVehicle } from '../../../redux/slices/vehicles';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import Label from '../../../components/Label';
import Scrollbar from '../../../components/Scrollbar';
import SearchNotFound from '../../../components/SearchNotFound';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { VehicleListHead, VehicleListToolbar, VehicleMoreMenu } from './components';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'vehicleId', label: 'ID', alignRight: false },
  { id: 'truckNumber', label: 'Truck Number', alignRight: false },
  { id: 'plateNumber', label: 'Plate Number', alignRight: false },
  { id: 'vinNumber', label: 'VIN Number', alignRight: false },
  { id: 'make', label: 'Make', alignRight: false },
  { id: 'model', label: 'Model', alignRight: false },
  { id: 'year', label: 'Year', alignRight: false },
  { id: '' }
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
  return order === 'desc'
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
    return filter(array, (_vehicle) =>
    _vehicle.vehicleId.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || _vehicle.truckNumber.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || _vehicle.plateNumber.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || _vehicle.vinNumber.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || _vehicle.make.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || _vehicle.model.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function VehicleList() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { vehicleList, isLoading } = useSelector((state) => state.vehicle);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('firstName');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getVehicleList());
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = vehicleList.map((n) => n.vehicleId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, vehicleId) => {
    const selectedIndex = selected.indexOf(vehicleId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, vehicleId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
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

  const handleDeleteVehicle = (vehicleId) => {
    dispatch(deleteVehicle(vehicleId));
    dispatch(getVehicleList());
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - vehicleList.length) : 0;

  const filteredVehicles = applySortFilter(vehicleList, getComparator(order, orderBy), filterName);

  const isVehicleNotFound = filteredVehicles.length === 0;

  return (
    <Page title="Vehicle Directory">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Vehicle Directory"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Vehicles', href: PATH_DASHBOARD.dashboard.vehicles.directory },
            { name: 'Directory' }
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.dashboard.vehicles.new}
              startIcon={<Icon icon={plusFill} />}
            >
              New Vehicle
            </Button>
          }
        />

        <Card>
          <VehicleListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <VehicleListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={vehicleList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredVehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { _id, vehicleId, truckNumber, plateNumber, vinNumber, make, model, year } = row;
                    const isItemSelected = selected.indexOf(vehicleId) !== -1;

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
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, vehicleId)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              <Button
                                to={`${PATH_DASHBOARD.dashboard.vehicles.directory}/${_id}`}
                                color="inherit"
                                component={RouterLink}
                              >
                                {vehicleId}
                              </Button>
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{truckNumber}</TableCell>
                        <TableCell align="left">{plateNumber}</TableCell>
                        <TableCell align="left">{vinNumber}</TableCell>
                        <TableCell align="left">{make}</TableCell>
                        <TableCell align="left">{model}</TableCell>
                        <TableCell align="left">{year}</TableCell>

                        <TableCell align="right">
                          <VehicleMoreMenu onDelete={() => handleDeleteVehicle(_id)} vehicleId={_id} />
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
                {isVehicleNotFound && !isLoading && (
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
            count={vehicleList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
