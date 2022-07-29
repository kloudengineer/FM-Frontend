import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getRouteList } from '../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import RouteNewForm from './components/RouteNewForm';

// ----------------------------------------------------------------------

export default function RouteCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRouteList());
  }, [dispatch]);

  return (
    <Page title="Route: Create a new route">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading='Create a new route'
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Route', href: PATH_DASHBOARD.dashboard.routes.directory },
            { name: 'New route' }
          ]}
        />

        <RouteNewForm />
      </Container>
    </Page>
  );
}
