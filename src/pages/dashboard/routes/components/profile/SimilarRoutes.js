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

SimilarRoutes.propTypes = {
  route: PropTypes.object
};

export default function SimilarRoutes({ route, similarRoutes }) {
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
      <CardHeader title="Similar Routes" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>Route ID</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Route Number</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Start Time</TableCell>
                <TableCell sx={{ minWidth: 160 }}>End Time</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Vehicle</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {similarRoutes.map((rt) => (
                <TableRow key={rt.routeID}>
                  <TableCell>{rt.routeID}</TableCell>
                  <TableCell>{rt.routeNumber}</TableCell>
                  <TableCell>{handleDateFormat(rt.startDateTime)}</TableCell>
                  <TableCell>{handleDateFormat(rt.endDateTime)}</TableCell>
                  <TableCell>{rt.truck}</TableCell>
                  <TableCell><Label>{rt.status}</Label></TableCell>
                </TableRow>
              ))}
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
