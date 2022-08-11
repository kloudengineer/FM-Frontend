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
import { createVehicle } from '../../../../redux/slices/vehicles';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';

// ----------------------------------------------------------------------

export default function VehicleNewForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const NewVehicleSchema = Yup.object().shape({
    vehicleId: Yup.string(),
    vehicleType: Yup.string(),
    vinNumber: Yup.string(),
    truckNumber: Yup.string(),
    plateNumber: Yup.string(),
    make: Yup.string(),
    model: Yup.string(),
    year: Yup.string(),
    latestInspectionDate: Yup.string(),
    latestMaintenanceDate: Yup.string(),
    latestAcquiryDate: Yup.string(),
    latestReturnDate: Yup.string(),
    buyOrRentalDate: Yup.string(),
    soldOrReturnDate: Yup.string()
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      vehicleId: '',
      vehicleType: '',
      vinNumber: '',
      truckNumber: '',
      plateNumber: '',
      make: '',
      model: '',
      year: '',
      latestInspectionDate: '',
      latestMaintenanceDate: '',
      latestAcquiryDate: '',
      latestReturnDate: '',
      buyOrRentalDate: '',
      soldOrReturnDate: ''
    },
    validationSchema: NewVehicleSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(true);
        await dispatch(createVehicle(values));
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Create success', { variant: 'success' });
        navigate(PATH_DASHBOARD.dashboard.vehicles.directory);
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
                    label="Vehicle ID"
                    {...getFieldProps('vehicleId')}
                    error={Boolean(touched.vehicleId && errors.vehicleId)}
                    helperText={touched.vehicleId && errors.vehicleId}
                  />
                  <TextField
                    fullWidth
                    label="Vehicle Type"
                    {...getFieldProps('vehicleType')}
                    error={Boolean(touched.vehicleType && errors.vehicleType)}
                    helperText={touched.vehicleType && errors.vehicleType}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Make"
                    {...getFieldProps('make')}
                    error={Boolean(touched.make && errors.make)}
                    helperText={touched.make && errors.make}
                  />
                  <TextField
                    fullWidth
                    label="Model"
                    {...getFieldProps('model')}
                    error={Boolean(touched.model && errors.model)}
                    helperText={touched.model && errors.model}
                  />
                  <TextField
                    fullWidth
                    label="Year"
                    {...getFieldProps('year')}
                    error={Boolean(touched.year && errors.year)}
                    helperText={touched.year && errors.year}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Truck Number"
                    {...getFieldProps('truckNumber')}
                    error={Boolean(touched.truckNumber && errors.truckNumber)}
                    helperText={touched.truckNumber && errors.truckNumber}
                  />
                  <TextField
                    fullWidth
                    label="Plate Number"
                    {...getFieldProps('plateNumber')}
                    error={Boolean(touched.plateNumber && errors.plateNumber)}
                    helperText={touched.plateNumber && errors.plateNumber}
                  />
                  <TextField
                    fullWidth
                    label="VIN Number"
                    {...getFieldProps('vinNumber')}
                    error={Boolean(touched.vinNumber && errors.vinNumber)}
                    helperText={touched.vinNumber && errors.vinNumber}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Latest Inspection Date"
                    {...getFieldProps('latestInspectionDate')}
                    error={Boolean(touched.latestInspectionDate && errors.latestInspectionDate)}
                    helperText={touched.latestInspectionDate && errors.latestInspectionDate}
                  />
                  <TextField
                    fullWidth
                    label="Latest Maintenance Date"
                    {...getFieldProps('latestMaintenanceDate')}
                    error={Boolean(touched.latestMaintenanceDate && errors.latestMaintenanceDate)}
                    helperText={touched.latestMaintenanceDate && errors.latestMaintenanceDate}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Latest Acquiry Date"
                    {...getFieldProps('latestAcquiryDate')}
                    error={Boolean(touched.latestAcquiryDate && errors.latestAcquiryDate)}
                    helperText={touched.latestAcquiryDate && errors.latestAcquiryDate}
                  />
                  <TextField
                    fullWidth
                    label="Latest Return Date"
                    {...getFieldProps('latestReturnDate')}
                    error={Boolean(touched.latestReturnDate && errors.latestReturnDate)}
                    helperText={touched.latestReturnDate && errors.latestReturnDate}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Buy or Rental Date"
                    {...getFieldProps('buyOrRentalDate')}
                    error={Boolean(touched.buyOrRentalDate && errors.buyOrRentalDate)}
                    helperText={touched.buyOrRentalDate && errors.buyOrRentalDate}
                  />
                  <TextField
                    fullWidth
                    label="Sold or Return Date"
                    {...getFieldProps('soldOrReturnDate')}
                    error={Boolean(touched.soldOrReturnDate && errors.soldOrReturnDate)}
                    helperText={touched.soldOrReturnDate && errors.soldOrReturnDate}
                  />
                </Stack>

              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
              <Stack spacing={3}>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Create Vehicle
                  </LoadingButton>
                </Box>
              </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
