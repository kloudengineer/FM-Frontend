import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Typography, CardHeader, Grid, Stack, Button } from '@mui/material';

// ----------------------------------------------------------------------
const CardStyle = styled(Card)(({ theme }) => ({
  paddingBottom: theme.spacing(0)
}));
// ----------------------------------------------------------------------

MedicalCard.propTypes = {
  staff: PropTypes.object
};

export default function MedicalCard({ staff }) {
  const handleDateFormatOnly = (date) => {
    const dateValue = new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return dateValue;
  };

  return (
    <CardStyle>
      <CardHeader title="Medical Information" />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography component="span" variant="subtitle2" color="text.primary">
                Issued: {staff?.medicalCard?.issueDate
                  ? handleDateFormatOnly(staff?.medicalCard?.issueDate)
                  : '01/01/2037'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography component="span" variant="subtitle2" color="text.primary">
                Expires: {staff?.medicalCard?.expiryDate
                  ? handleDateFormatOnly(staff?.medicalCard?.expiryDate)
                  : '01/01/2037'}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </CardStyle>
  );
}
