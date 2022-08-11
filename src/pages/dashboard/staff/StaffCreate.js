import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getProfile } from '../../../redux/slices/staff';
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
  const Params = useParams();
  const { pathname } = useLocation();
  const { staff } = useSelector((state) => state.staff );
  const { id } = Params;
  const isEdit = pathname.includes('edit');

  useEffect(() => {
    if(isEdit) {
      dispatch(getProfile(id));
    }
  }, [dispatch]);

  return (
    <Page title={isEdit ? `Staff: Edit staff` : `Staff: Create staff`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={isEdit ? `Edit staff` : `Create a new staff`}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Staff', href: PATH_DASHBOARD.dashboard.staff.directory },
            { name: isEdit ? `Edit staff` : `Create staff` }
          ]}
        />

        <StaffNewForm isEdit={isEdit} staff={isEdit ? staff : null} />
      </Container>
    </Page>
  );
}
