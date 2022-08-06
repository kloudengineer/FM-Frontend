import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { Card, Typography, CardHeader, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  paddingBottom: theme.spacing(0)
}));

// ----------------------------------------------------------------------

AboutCard.propTypes = {
  vehicle: PropTypes.object
};

export default function AboutCard({ vehicle }) {
  return (
    <CardStyle>
      <CardHeader title="Vehicle Information" />
      <Stack spacing={3} sx={{ p: 4 }}>
        <Stack direction="row">
          <Typography variant="body1">
            Vehicle ID: {vehicle?.vehicleId}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Type: {vehicle?.vehicleType} / {vehicle?.make} {vehicle?.model} / {vehicle?.year}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Plate Number: {vehicle?.plateNumber}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            VIN Number: {vehicle?.vinNumber}
          </Typography>
        </Stack>

      </Stack>
    </CardStyle>
  );
}
