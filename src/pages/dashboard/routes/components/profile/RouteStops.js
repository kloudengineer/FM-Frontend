import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';

// material
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer
} from '@mui/material';

import Label from '../../../../../components/Label';
import Scrollbar from '../../../../../components/Scrollbar';

// ----------------------------------------------------------------------

RouteStops.propTypes = {
  route: PropTypes.object
};

export default function RouteStops({ route }) {
  const handleDateFormat = (date) => {
    const dateValue = new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    return dateValue;
  };

  return (
    <Card sx={{ marginTop: '-2%' }}>
      <CardHeader title="Stops" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>Address</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Arrival Time</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              <TableRow key={route?.origin}>
                <TableCell> {route?.origin} </TableCell>
                <TableCell>{handleDateFormat(route?.startDateTime)}</TableCell>
                <TableCell><Label> {route?.status} </Label></TableCell>
              </TableRow>

              { route.stopAddresses?.map((stop) => {
                  return (
                    <TableRow key={stop.address}>
                      <TableCell> {stop.address}  </TableCell>
                      <TableCell>{handleDateFormat(stop.arrivalDateTime)}</TableCell>
                      <TableCell><Label> {route?.status} </Label></TableCell>
                    </TableRow>
                  )
                })
              }

              {(
                <TableRow>
                  <TableCell> {route?.destination} </TableCell>
                  <TableCell>{handleDateFormat(route?.endDateTime)}</TableCell>
                  <TableCell><Label> {route?.status} </Label></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}
