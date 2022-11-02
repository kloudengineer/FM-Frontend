import PropTypes from "prop-types";
// material
import { styled } from "@mui/material/styles";
import { Card, Typography, CardHeader, Stack } from "@mui/material";

// ----------------------------------------------------------------------

const CardStyle = styled(Card)(({ theme }) => ({
  paddingBottom: theme.spacing(0),
}));

// ----------------------------------------------------------------------

AboutCard.propTypes = {
  notificationList: PropTypes.object,
};
export default function AboutCard({ notification }) {
  return (
    <CardStyle>
      <CardHeader title="Notification Information" />
      <Stack spacing={3} sx={{ p: 4 }}>
        <Stack direction="row">
          <Typography variant="body1">
            Title : {notification[0]?.title}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Message : {notification[0]?.message}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Recived Notification : {notification[0]?.count}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Type : {notification[0]?.type}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="body1">
            Status : {notification[0]?.status}
          </Typography>
        </Stack>
      </Stack>
    </CardStyle>
  );
}
