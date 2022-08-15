import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack, Button } from '@mui/material';

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(0)
}));

const handleDateFormat = (date) => {
  const dateValue = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return dateValue;
};

// ----------------------------------------------------------------------

DatesCard.propTypes = {
  vehicle: PropTypes.object
};

export default function DatesCard({ vehicle }) {
  return (
    <CardStyle>
      <CardHeader title="Important Dates" />

      <Stack spacing={3} sx={{ p: 4 }}>
        <Stack direction="row">
          <Typography variant="body1">
            Latest Inspection: {handleDateFormat(vehicle?.latestInspectionDate)}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Latest Maintenance: {handleDateFormat(vehicle?.latestMaintenanceDate)}
          </Typography>
        </Stack>

        {/* <Stack direction="row">
          <Typography variant="body1">
            Acquired: {handleDateFormat(vehicle?.latestAcquiryDate)}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Returned: {handleDateFormat(vehicle?.latestReturnDate)}
          </Typography>
        </Stack> */}

        <Stack direction="row">
          <Typography variant="body1">
            Bought/Rented: {handleDateFormat(vehicle?.buyOrRentalDate)}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Sold/Returned: {handleDateFormat(vehicle?.soldOrReturnDate)}
          </Typography>
        </Stack>
      </Stack>
    </CardStyle>
  );
}
