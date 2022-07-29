import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
// routes
import { PATH_PAGE } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'About Us',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },
  {
    title: 'Contact Us',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.contact
  },
  {
    title: 'Pricing',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    path: PATH_PAGE.pricing
  }
];

export default menuConfig;
