import { useState, useEffect } from 'react';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { styled } from '@mui/material/styles';
import { Grid, Stack, Card, Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { useParams } from 'react-router';
import { getProfile } from '../../../redux/slices/vehicles';
import { findRoutes } from '../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { AboutCard, AssignedRoutesCard, DatesCard } from './components/profile';


// ----------------------------------------------------------------------

export default function VehicleProfile() {
  const { themeStretch } = useSettings();
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { vehicle } = useSelector((state) => state.vehicle );
  const { routeList } = useSelector((state) => state.route );

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(findRoutes({}));
  }, [dispatch]);

  return (
    <Page title="Route Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.dashboard.overview },
            { name: 'Vehicle Directory', href: PATH_DASHBOARD.dashboard.vehicles.directory },
            { name: `${vehicle?.vehicleId}` }
          ]}
        />
        {
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <AboutCard vehicle={vehicle} />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <DatesCard vehicle={vehicle} />
              </Grid>

              <Grid item xs={12} md={4} />
              <Grid item xs={12}>
                <AssignedRoutesCard assignedRoutes={routeList} />
              </Grid>
            </Grid>
        }
        
      </Container>
    </Page>
  );
}
