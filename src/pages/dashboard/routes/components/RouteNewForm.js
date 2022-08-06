import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik, getIn } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField, Typography, MenuItem } from '@mui/material';
// redux
import { useDispatch } from '../../../../redux/store';
import { createRoute } from '../../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';

// ----------------------------------------------------------------------

RouteNewForm.propTypes = {
  staff: PropTypes.array,
  vehicles: PropTypes.array
};

export default function RouteNewForm({ staff, vehicles }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const NewRouteSchema = Yup.object().shape({
    routeID: Yup.string().required('Route ID is required'),
    routeNumber: Yup.string().required('Route Number is required'),
    customer: Yup.string().required('Customer is required'),
    startDateTime: Yup.string().required('Start time is required'),
    endDateTime: Yup.string().required('End time is required'),
    origin: Yup.string().required('Origin address is required'),
    destination: Yup.string().required('Destinaton address is required'),
    distance: Yup.number().required('Distance is required'),
    stopAddresses: Yup.array().of(
      Yup.object().shape({
        address: Yup.string().required('Stop address is required'),
        arrivalDateTime: Yup.string().required('Arrival time is required')
      })
    ),
    driver: Yup.string().required('Driver is required'),
    truck: Yup.string().required('Truck is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      routeID: '',
      routeNumber: '',
      customer: '',
      startDateTime: '',
      endDateTime: '',
      origin: '',
      destination: '',
      distance: 0,
      stopAddresses: [
        {
          address: '',
          arrivalDateTime: ''
        }
      ],
      driver: '',
      truck: ''
    },
    validationSchema: NewRouteSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(true);
        await dispatch(createRoute(values));
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Create success', { variant: 'success' });
        navigate(PATH_DASHBOARD.dashboard.routes.directory);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ py: 4, px: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Route ID"
                    {...getFieldProps('routeID')}
                    error={Boolean(touched.routeID && errors.routeID)}
                    helperText={touched.routeID && errors.routeID}
                  />
                  <TextField
                    fullWidth
                    label="Route Number"
                    {...getFieldProps('routeNumber')}
                    error={Boolean(touched.routeNumber && errors.routeNumber)}
                    helperText={touched.routeNumber && errors.routeNumber}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Customer"
                    {...getFieldProps('customer')}
                    error={Boolean(touched.customer && errors.customer)}
                    helperText={touched.customer && errors.customer}
                  />
                  <TextField
                    fullWidth
                    label="Start Time"
                    {...getFieldProps('startDateTime')}
                    error={Boolean(touched.startDateTime && errors.startDateTime)}
                    helperText={touched.startDateTime && errors.startDateTime}
                  />
                  <TextField
                    fullWidth
                    label="End Time"
                    {...getFieldProps('endDateTime')}
                    error={Boolean(touched.endDateTime && errors.endDateTime)}
                    helperText={touched.endDateTime && errors.endDateTime}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Origin"
                    {...getFieldProps('origin')}
                    error={Boolean(touched.origin && errors.origin)}
                    helperText={touched.origin && errors.origin}
                  />
                  <TextField
                    fullWidth
                    label="Destination"
                    {...getFieldProps('destination')}
                    error={Boolean(touched.destination && errors.destination)}
                    helperText={touched.destination && errors.destination}
                  />
                  <TextField
                    fullWidth
                    label="Distance"
                    {...getFieldProps('distance')}
                    error={Boolean(touched.distance && errors.distance)}
                    helperText={touched.distance && errors.distance}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    select
                    fullWidth
                    label="Driver"
                    {...getFieldProps('driver')}
                    error={Boolean(touched.driver && errors.driver)}
                    helperText={touched.driver && errors.driver}
                  >
                    {staff.map((option) => (
                      <MenuItem key={option._id} value={option._id}>
                        {option.firstName} {option.lastName}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    label="Truck"
                    {...getFieldProps('truck')}
                    error={Boolean(touched.truck && errors.truck)}
                    helperText={touched.truck && errors.truck}
                  >
                    {vehicles.map((option) => (
                      <MenuItem key={option._id} value={option._id}>
                        {option.vehicleId}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography
              variant="subtitle1"
              sx={{
                mx: 'auto',
                display: 'block',
                textAlign: 'center',
                color: 'text.primary'
              }}
            >
              Please provide all intermediate stops
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Address"
                    {...getFieldProps(`stopAddresses.0.address`)}
                    error={Boolean(getIn(touched, `stopAddresses.0.address`) && getIn(errors, `stopAddresses.0.address`))}
                    helperText={getIn(touched, `stopAddresses.0.address`) && getIn(errors, `stopAddresses.0.address`)}
                  />
                  <TextField
                    fullWidth
                    label="Arrival Time"
                    {...getFieldProps(`stopAddresses.0.arrivalDateTime`)}
                    error={Boolean(getIn(touched, `stopAddresses.0.arrivalDateTime`) && getIn(errors, `stopAddresses.0.arrivalDateTime`))}
                    helperText={getIn(touched, `stopAddresses.0.arrivalDateTime`) && getIn(errors, `stopAddresses.0.arrivalDateTime`)}
                  />
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
              <Stack spacing={3}>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Create Route
                  </LoadingButton>
                </Box>
              </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
