import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import carFilled from '@iconify/icons-ant-design/car-filled';
import pushpinFilled from '@iconify/icons-ant-design/pushpin-filled';
import shopFilled from '@iconify/icons-ant-design/shop-filled';
import fileDoneOutlined from '@iconify/icons-ant-design/file-done-outlined';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack, Button, Divider } from '@mui/material';

// ----------------------------------------------------------------------

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2)
}));

const CardStyle = styled(Card)(({ theme }) => ({
  paddingBottom: theme.spacing(0)
}));

// ----------------------------------------------------------------------

RouteAbout.propTypes = {
  route: PropTypes.object
};

export default function RouteAbout({ route }) {
  return (
    <CardStyle>
      <CardHeader title="Route Information" />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row">
          <IconStyle icon={carFilled} />
          <Typography variant="body1">
            Vehicle: {route?.truck?.vehicleId}
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={shopFilled} />
          <Typography variant="body1">
            Customer: {route?.customer}
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={pushpinFilled} />
          <Typography variant="body1">
            Origin: {route?.origin}
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={pushpinFilled} />
          <Typography variant="body1">
            Destination: {route?.destination}
          </Typography>
        </Stack>
      </Stack>
    </CardStyle>
  );
}
