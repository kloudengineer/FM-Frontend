import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import fileDoneOutlined from '@iconify/icons-ant-design/file-done-outlined';

import pushpinFilled from '@iconify/icons-ant-design/pushpin-filled';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack, Button } from '@mui/material';

// ----------------------------------------------------------------------

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2)
}));

const CardStyle = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

// ----------------------------------------------------------------------

RouteInfo.propTypes = {
  route: PropTypes.object
};

export default function RouteInfo({ route }) {
  return (
    <CardStyle>
      <CardHeader title="Route Addresses" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <IconStyle icon={pushpinFilled} />
          <Typography variant="body2">
            Start &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {route.origin}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon={pushpinFilled} />
          <Typography variant="body2">
            Destination &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {route.destination}
            </Link>
          </Typography>
        </Stack>
        {route.stopsAddress.map((res, index) => (
          <Stack direction="row" key={index}>
            <IconStyle icon={fileDoneOutlined} />
            <Typography variant="subtitle2" color="text.primary">
              {res.name}
            </Typography>
            <Button variant="text"> Attach Pod + </Button>
          </Stack>
        ))}
      </Stack>
    </CardStyle>
  );
}
