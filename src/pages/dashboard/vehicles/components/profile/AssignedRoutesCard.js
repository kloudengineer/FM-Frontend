import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { sentenceCase } from 'change-case';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { useSelector } from 'react-redux';
// material
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Menu,
  Table,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer
} from '@mui/material';

//
import Label from '../../../../../components/Label';
import Scrollbar from '../../../../../components/Scrollbar';
import { MIconButton } from '../../../../../components/@material-extend';

// ----------------------------------------------------------------------

AssignedRoutesCard.propTypes = {
  vehicle: PropTypes.object
};

export default function AssignedRoutesCard({ assignedRoutes }) {
  const theme = useTheme();

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
    <>
      <Card>
        <CardHeader title="Assigned Routes" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 120 }}>Route ID</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Customer</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Driver</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Start</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>End</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {assignedRoutes.map((rt) => (
                  <TableRow key={rt.Id}>
                    <TableCell>{rt.routeID}</TableCell>
                    <TableCell sx={{ textTransform: 'capitalize' }}>{rt.customer}</TableCell>
                    <TableCell>{rt.driver}</TableCell>
                    <TableCell>{handleDateFormat(rt.startDateTime)}</TableCell>
                    <TableCell>{handleDateFormat(rt.endDateTime)}</TableCell>
                    <TableCell>{sentenceCase(rt.status)}</TableCell>
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
    </>
  );
}
