// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Dashboard',
    items: [
      { title: 'Overview', path: PATH_DASHBOARD.dashboard.overview, icon: ICONS.user },
      { title: 'Staff', path: PATH_DASHBOARD.dashboard.staff.directory, icon: ICONS.user },
      { title: 'Routes', path: PATH_DASHBOARD.dashboard.routes.directory, icon: ICONS.user },
      { title: 'Vehicles', path: PATH_DASHBOARD.dashboard.vehicles.directory, icon: ICONS.user }
    ]
  },

  // Admin
  // ----------------------------------------------------------------------
  {
    subheader: 'admin',
    items: [
      { title: 'Carriers', path: PATH_DASHBOARD.admin.carriers, icon: ICONS.user }
    ]
  }
];

export default sidebarConfig;
