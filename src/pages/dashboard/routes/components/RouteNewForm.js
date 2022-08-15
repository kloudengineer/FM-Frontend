import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FieldArray, FormikProvider, useFormik, getIn } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Box, Card, Grid, Stack, TextField, Typography, MenuItem } from '@mui/material';
// redux
import { useDispatch } from '../../../../redux/store';
import { createRoute, updateRoute } from '../../../../redux/slices/routes';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';

// ----------------------------------------------------------------------

RouteNewForm.propTypes = {
  isEdit: PropTypes.bool,
  route: PropTypes.object,
  staff: PropTypes.array,
  vehicles: PropTypes.array
};

export default function RouteNewForm({ isEdit, route, staff, vehicles }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const NewRouteSchema = Yup.object().shape({
    routeID: Yup.string(),
    routeNumber: Yup.string(),
    customer: Yup.string(),
    startDateTime: Yup.string(),
    endDateTime: Yup.string(),
    origin: Yup.string(),
    destination: Yup.string(),
    distance: Yup.number(),
    stopAddresses: Yup.array().of(
      Yup.object().shape({
        address: Yup.string(),
        arrivalDateTime: Yup.string()
      })
    ),
    driver: Yup.string().required('Driver is required'),
    truck: Yup.string().required('Truck is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      routeID: route?.routeID || '',
      routeNumber: route?.routeNumber || '',
      customer: route?.customer || '',
      startDateTime: route?.startDateTime || '',
      endDateTime: route?.endDateTime || '',
      origin: route?.origin || '',
      destination: route?.destination || '',
      distance: route?.distance || 0,
      stopAddresses: route?.stopAddresses || [
        {
          address: '',
          arrivalDateTime: ''
        }
      ],
      driver: route?.driver?.firstName || '',
      truck: route?.truck?.vehicleId || ''
    },
    validationSchema: NewRouteSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(true);
        await dispatch(isEdit ? updateRoute(route._id, values) : createRoute(values));
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

          <FieldArray
              name="stopAddresses"
              render={(stops) => (
                <>
                    {stops.form.values.stopAddresses.map((res, index) => (
                      <Grid key={index} item xs={12} md={12}>
                        <Card sx={{ p: 3 }}>
                          <Stack spacing={3}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Address"
                                {...getFieldProps(`stopAddresses.${index}.address`)}
                                error={Boolean(getIn(touched, `stopAddresses.${index}.address`) && getIn(errors, `stopAddresses.${index}.address`))}
                                helperText={getIn(touched, `stopAddresses.${index}.address`) && getIn(errors, `stopAddresses.${index}.address`)}
                              />
                              <TextField
                                fullWidth
                                label="Arrival Time"
                                {...getFieldProps(`stopAddresses.${index}.arrivalDateTime`)}
                                error={Boolean(getIn(touched, `stopAddresses.${index}.arrivalDateTime`) && getIn(errors, `stopAddresses.${index}.arrivalDateTime`))}
                                helperText={getIn(touched, `stopAddresses.${index}.arrivalDateTime`) && getIn(errors, `stopAddresses.${index}.arrivalDateTime`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              {
                                stops.form.values.stopAddresses.length !== 1 && (
                                  <IconButton onClick={() => stops.remove(index)}>
                                    <DeleteIcon />
                                  </IconButton>
                                )
                              }
                        
                              <Button
                                fullWidth
                                onClick={() => {
                                  stops.push({
                                    address: '',
                                    arrivalDateTime: ''
                                  })
                                }
                                 
                                }
                              >
                                Add stop
                              </Button>
                            </Stack>
                          </Stack>
                        </Card>
                      </Grid>     
                    ))}
                </>
              )}
            />

          <Grid item xs={12} md={12}>
              <Stack spacing={3}>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    { isEdit ? 'Update Route' : 'Create Route' }
                  </LoadingButton>
                </Box>
              </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
