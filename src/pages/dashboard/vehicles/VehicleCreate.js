import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getProfile } from '../../../redux/slices/vehicles';
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
  const Params = useParams();
  const { pathname } = useLocation();
  const { vehicle } = useSelector((state) => state.vehicle);

  const { id } = Params;
  const isEdit = pathname.includes('edit');

  useEffect(() => {
    if(isEdit){ 
      dispatch(getProfile(id));
    }
  }, [dispatch]);

  return (
    <Page title={isEdit ? `Vehicle: Edit vehicle` : `Vehicle: Create vehicle`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={isEdit ? `Edit vehicle` : `Create a new vehicle`}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Vehicle', href: PATH_DASHBOARD.dashboard.vehicles.directory },
            { name: isEdit ? vehicle?.vehicleId : `Create vehicle` }
          ]}
        />

        <VehicleNewForm isEdit={isEdit} vehicle={vehicle} />
      </Container>
    </Page>
  );
}
