import React from "react";
import { useEffect } from "react";
// material
import { Grid, Container } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../../redux/store";
import { useParams } from "react-router";
import {
  getProfile,
  setIsUnReadFalse,
} from "../../../redux/slices/notifications";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import { NotificationCard } from "./components/profile";

// ----------------------------------------------------------------------

const NotificationProfile = () => {
  const { themeStretch } = useSettings();
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { notificationList } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(setIsUnReadFalse(id));
  }, [dispatch, id]);

  return (
    <Page title="Route Profile">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.dashboard.overview },
            {
              name: "Notifications Directory",
              href: PATH_DASHBOARD.dashboard.notifications.directory,
            },
            { name: `${notificationList[0]?.type}` },
          ]}
        />
        {
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <NotificationCard notification={notificationList} />
            </Grid>
          </Grid>
        }
      </Container>
    </Page>
  );
};

export default NotificationProfile;
