import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getStaffList } from '../../../redux/slices/staff';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import StaffNewForm from './components/StaffNewForm';

// ----------------------------------------------------------------------

export default function StaffCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { staffList } = useSelector((state) => state.staff);
  const isEdit = pathname.includes('edit');
  const currentStaff = staffList.find((staff) => paramCase(staff.name) === name);

  useEffect(() => {
    dispatch(getStaffList());
  }, [dispatch]);

  return (
    <Page title="Staff: Create a new staff">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new staff' : 'Edit staff'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Staff', href: PATH_DASHBOARD.dashboard.staff.directory },
            { name: !isEdit ? 'New staff' : name }
          ]}
        />

        <StaffNewForm isEdit={isEdit} currentStaff={currentStaff} />
      </Container>
    </Page>
  );
}
