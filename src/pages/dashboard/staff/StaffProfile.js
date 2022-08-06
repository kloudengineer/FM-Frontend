import { useState, useEffect } from 'react';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { styled } from '@mui/material/styles';
import { Grid, Stack, Card, Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { useParams } from 'react-router';
import { getProfile } from '../../../redux/slices/staff';
import { findRoutes } from '../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { Cover, About, License, MedicalCard, AssignedRoutes } from './components/profile';

// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

export default function StaffProfile() {
  const { themeStretch } = useSettings();
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { staff } = useSelector((state) => state.staff );
  const { routeList } = useSelector((state) => state.route );

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(findRoutes({
      driver: id
    }));
  }, [dispatch]);

  return (
    <Page title="Staff Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.dashboard },
            { name: 'Staff Directory', href: PATH_DASHBOARD.dashboard.staff.directory },
            { name: `${staff.firstName} ${staff.lastName}` }
          ]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative'
          }}
        >
          <Cover staff={staff} />
        </Card>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <About staff={staff} />
          </Grid>

          <Grid item xs={12} md={4}>
            <License staff={staff} />
          </Grid>

          <Grid item xs={12} md={4}>
            <MedicalCard staff={staff} />
          </Grid>

          <Grid item xs={12} md={12}>
            <AssignedRoutes assignedRoutes={routeList} />
          </Grid>
          
        </Grid>
      </Container>
    </Page>
  );
}
