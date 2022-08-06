import { useState, useEffect } from 'react';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { styled } from '@mui/material/styles';
import { Grid, Stack, Card, Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { useParams } from 'react-router';
import { getProfile, getRouteList } from '../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { RouteAbout, SimilarRoutes, RouteStops } from './components/profile';


// ----------------------------------------------------------------------

export default function StaffProfile() {
  const { themeStretch } = useSettings();
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { route, routeList } = useSelector((state) => state.route );

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getRouteList());
  }, [dispatch]);

  const similarRoutes = routeList.filter(
    (rt) => rt.routeID !== route.routeID
    && rt.customer === route.customer
    && rt.driver === route.driver 
    && rt.origin === route.origin 
    && rt.destination === route.destination
  )

  return (
    <Page title="Route Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.dashboard },
            { name: 'Route Directory', href: PATH_DASHBOARD.dashboard.staff.directory },
            { name: `${route.routeID}` }
          ]}
        />
        {
          route && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <RouteAbout route={route} />
              </Grid>
              
              <Grid item xs={12} md={12} />
              <Grid item xs={12}>
                <RouteStops route={route} />
              </Grid>

              <Grid item xs={12} md={4} />
              <Grid item xs={12}>
                <SimilarRoutes route={route} similarRoutes={similarRoutes} />
              </Grid>
            </Grid>
          )
        }
        
      </Container>
    </Page>
  );
}
