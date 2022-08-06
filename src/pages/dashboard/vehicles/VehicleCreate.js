import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getVehicleList } from '../../../redux/slices/vehicles';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import VehicleNewForm from './components/VehicleNewForm';

// ----------------------------------------------------------------------

export default function VehicleCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { vehicleList } = useSelector((state) => state.vehicle);

  useEffect(() => {
    dispatch(getVehicleList());
  }, [dispatch]);

  return (
    <Page title="Route: Create a new vehicle">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading='Create a new vehicle'
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Vehicle', href: PATH_DASHBOARD.dashboard.vehicles.directory },
            { name: 'New vehicle' }
          ]}
        />

        <VehicleNewForm />
      </Container>
    </Page>
  );
}
