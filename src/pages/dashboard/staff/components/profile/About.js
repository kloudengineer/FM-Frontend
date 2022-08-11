import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import pinFill from '@iconify/icons-eva/pin-fill';
import calendarFilled from '@iconify/icons-ant-design/calendar-filled';
import emailFill from '@iconify/icons-eva/email-fill';
import phoneFilled from '@iconify/icons-ant-design/phone-filled';
// material
import { styled } from '@mui/material/styles';
import { Link, Card, Typography, CardHeader, Stack, Divider } from '@mui/material';

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

About.propTypes = {
  staff: PropTypes.object
};

export default function About({ staff }) {
  return (
    <CardStyle>
      <CardHeader title="Personal Information" />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <IconStyle icon={phoneFilled} />
          <Typography variant="body1" color="text.primary">
            <Link component="span" variant="subtitle3" color="text.primary">
              { staff?.phoneNumber || 'Phone Number' }
            </Link>
          </Typography>
        </Stack>
        <Stack direction="row">
          <IconStyle icon={emailFill} />
          <Typography variant="body1">
            <Link component="span" variant="subtitle3" color="text.primary">
            { staff?.email || 'Email' }
            </Link>
          </Typography>
        </Stack>
        {/* <Stack direction="row">
          <IconStyle icon={emailFill} />
          <Typography variant="body1">
            <Link component="span" variant="subtitle3" color="text.primary">
            { `${staff?.address[0].streetAddress1}, ${staff?.address[0].streetAddress2} ${staff?.address[0].city}, ${staff?.address[0].state} ${staff?.address[0].zipCode}` || 'Address' }
            </Link>
          </Typography>
        </Stack> */}
      </Stack>
    </CardStyle>
  );
}
