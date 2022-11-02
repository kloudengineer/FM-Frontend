import PropTypes from "prop-types";
import { noCase } from "change-case";
import { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import bellFill from "@iconify/icons-eva/bell-fill";
import clockFill from "@iconify/icons-eva/clock-fill";
import doneAllFill from "@iconify/icons-eva/done-all-fill";
// material
import { alpha } from "@mui/material/styles";
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
// utils
import { fToNow } from "../../../utils/formatTime";
// components
import Scrollbar from "../../../components/Scrollbar";
import MenuPopover from "../../../components/MenuPopover";
import { MIconButton } from "../../../components/@material-extend";
//routes
import { PATH_DASHBOARD } from "../../../routes/paths";

//redux slice import notifications.
import { useDispatch, useSelector } from "../../../redux/store";
import {
  getNotifList,
  markAllNotifAsRead,
} from "../../../redux/slices/notifications";
// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {noCase(notification.message)}
      </Typography>
    </Typography>
  );
  if (notification.type === "staff notification") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  // if (notification.type === "route notification") {
  //   return {
  //     avatar: (
  //       <img
  //         alt={notificationList.title}
  //         src="/static/icons/ic_notification_shipping.svg"
  //       />
  //     ),
  //     title,
  //   };
  // }
  // if (notification.type === "vehicle notification") {
  //   return {
  //     avatar: (
  //       <img
  //         alt={notificationList.title}
  //         src="/static/icons/ic_notification_mail.svg"
  //       />
  //     ),
  //     title,
  //   };
  // }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);
  const { _id } = notification;
  // call backend request to set this id isUnRead to false.
  return (
    <ListItemButton
      to={`${PATH_DASHBOARD.dashboard.notifications.directory}/${_id}`}
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Box
              component={Icon}
              icon={clockFill}
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { notificationList, isLoading } = useSelector(
    (state) => state.notifications
  );
  const totalUnRead = notificationList.filter(
    (list) => list.isUnRead === true
  ).length;

  useEffect(() => {
    dispatch(getNotifList());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllNotifAsRead());
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        size="large"
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Icon icon={bellFill} width={20} height={20} />
        </Badge>
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        {!isLoading ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1">Notifications</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  You have {totalUnRead} unread messages
                </Typography>
              </Box>

              {totalUnRead > 0 && (
                <Tooltip title=" Mark all as read">
                  <MIconButton color="primary" onClick={handleMarkAllAsRead}>
                    <Icon icon={doneAllFill} width={20} height={20} />
                  </MIconButton>
                </Tooltip>
              )}
            </Box>
            <Divider />
            <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
              <List
                disablePadding
                subheader={
                  <ListSubheader
                    disableSticky
                    sx={{ py: 1, px: 2.5, typography: "overline" }}
                  >
                    {totalUnRead > 0 ? "New" : ""}
                  </ListSubheader>
                }
              >
                {notificationList.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                  />
                ))}
              </List>
            </Scrollbar>
          </>
        ) : (
          "Loading..."
        )}

        <Divider />

        <Box sx={{ p: 1 }}>
          <Button
            fullWidth
            disableRipple
            component={RouterLink}
            to={PATH_DASHBOARD.dashboard.notifications.directory}
          >
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
