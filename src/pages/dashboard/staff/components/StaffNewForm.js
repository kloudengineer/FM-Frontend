import * as Yup from 'yup';
import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik, getIn } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField, Typography, FormHelperText } from '@mui/material';
// utils
import { fData } from '../../../../utils/formatNumber';
// redux
import { useDispatch } from '../../../../redux/store';
import { createStaff } from '../../../../redux/slices/staff';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
//
import { UploadAvatar } from '../../../../components/upload';

// ----------------------------------------------------------------------

export default function StaffNewForm() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const NewStaffSchema = Yup.object().shape({
    avatarUrl: Yup.object().shape({
      path: Yup.string(),
      preview: Yup.string()
    }),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email(),
    phoneNumber: Yup.string().required('Phone number is required'),
    dateOfBirth: Yup.string().required('Date of Birth is required'),
    ssn: Yup.string().required('Social security number is required'),
    address: Yup.array().of(
      Yup.object().shape({
        streetAddress1: Yup.string().required('Street address is required'),
        streetAddress2: Yup.string(),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zipCode: Yup.string().required('ZIP code is required'),
        moveInDate: Yup.string().required("Move-in date is required"),
        moveOutDate: Yup.string().required("Move-out date is required")
      })
    ),
    license: Yup.object().shape({
      number: Yup.string().required('Driver\' license number is required'),
      state: Yup.string().required('State is required'),
      issueDate: Yup.string().required('Issue Date is required'),
      expiryDate: Yup.string().required('Date of expiration required'),
    }),
    medicalCard: Yup.object().shape({
      issueDate: Yup.string().required('Issue Date is required'),
      expiryDate: Yup.string().required('Date of expiration required'),
    }),
    workHistory: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required('Company name is required'),
        companyAddress: Yup.string().required('Address is required'),
        position: Yup.string().required('Position is required'),
        startDate: Yup.string().required('Start date is required'),
        endDate: Yup.string().required('End date is required'),
        referenceName: Yup.string().required('Reference name is required'),
        referencePhone: Yup.string().required('Reference phone is required'),
        referenceEmail: Yup.string().required('Reference email is required')
      })
    )
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      avatarUrl: {
        path: '',
        preview: ''
      },
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      ssn: '',
      address: [
        {
          streetAddress1: '',
          streetAddress2: '',
          city: '',
          state: '',
          zipCode: '',
          moveInDate: '',
          moveOutDate: ''
        }
      ],
      license: {
        number: '',
        state: '',
        issueDate: '',
        expiryDate: ''
      },
      medicalCard: {
        issueDate: '',
        expiryDate: ''
      },
      workHistory: [
        {
          companyName: '',
          companyAddress: '',
          position: '',
          startDate: '',
          endDate: '',
          referenceName: '',
          referencePhone: '',
          referenceEmail: ''
        }
      ]
    },
    validationSchema: NewStaffSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(true);
        await dispatch(createStaff(values));
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Create success', { variant: 'success' });
        navigate(PATH_DASHBOARD.dashboard.staff.directory);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('avatarUrl', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ py: 4, px: 3 }}>
              <Box sx={{ mb: 5 }}>
                <UploadAvatar
                  accept="image/*"
                  file={values.avatarUrl}
                  maxSize={3000000}
                  onDrop={handleDrop}
                  error={Boolean(touched.avatarUrl && errors.avatarUrl)}
                  caption={
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.secondary'
                      }}
                    >
                      Allowed *.jpeg, *.jpg, *.png
                      <br /> max size of {fData(3000000)}
                    </Typography>
                  }
                />
                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                  {touched.avatarUrl && errors.avatarUrl}
                </FormHelperText>
              </Box>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Firstname"
                    {...getFieldProps('firstName')}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    fullWidth
                    label="Lastname"
                    {...getFieldProps('lastName')}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    {...getFieldProps('phoneNumber')}
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    {...getFieldProps('dateOfBirth')}
                    error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                  />
                  <TextField
                    fullWidth
                    label="Social Security Number"
                    {...getFieldProps('ssn')}
                    error={Boolean(touched.ssn && errors.ssn)}
                    helperText={touched.ssn && errors.ssn}
                  />
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
              Please provide all addresses of residence in the last 3 years
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Street Address 1"
                    {...getFieldProps(`address.0.streetAddress1`)}
                    error={Boolean(getIn(touched, `address.0.streetAddress1`) && getIn(errors, `address.0.streetAddress1`))}
                    helperText={getIn(touched, `address.0.streetAddress1`) && getIn(errors, `address.0.streetAddress1`)}
                  />
                  <TextField
                    fullWidth
                    label="Street Address 2"
                    {...getFieldProps(`address.0.streetAddress2`)}
                    error={Boolean(getIn(touched, `address.0.streetAddress2`) && getIn(errors, `address.0.streetAddress2`))}
                    helperText={getIn(touched, `address.0.streetAddress2`) && getIn(errors, `address.0.streetAddress2`)}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="City"
                    {...getFieldProps(`address.0.city`)}
                    error={Boolean(getIn(touched, `address.0.city`) && getIn(errors, `address.0.city`))}
                    helperText={getIn(touched, `address.0.city`) && getIn(errors, `address.0.city`)}
                  />
                  <TextField
                    fullWidth
                    label="State"
                    {...getFieldProps(`address.0.state`)}
                    error={Boolean(getIn(touched, `address.0.state`) && getIn(errors, `address.0.state`))}
                    helperText={getIn(touched, `address.0.state`) && getIn(errors, `address.0.state`)}
                  />
                  <TextField
                    fullWidth
                    label="Zip Code"
                    {...getFieldProps(`address.0.zipCode`)}
                    error={Boolean(getIn(touched, `address.0.zipCode`) && getIn(errors, `address.0.zipCode`))}
                    helperText={getIn(touched, `address.0.zipCode`) && getIn(errors, `address.0.zipCode`)}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Move-in Date"
                    {...getFieldProps(`address.0.moveInDate`)}
                    error={Boolean(getIn(touched, `address.0.moveInDate`) && getIn(errors, `address.0.moveInDate`))}
                    helperText={getIn(touched, `address.0.moveInDate`) && getIn(errors, `address.0.moveInDate`)}
                  />
                  <TextField
                    fullWidth
                    label="Move-out Date"
                    {...getFieldProps(`address.0.moveOutDate`)}
                    error={Boolean(getIn(touched, `address.0.moveOutDate`) && getIn(errors, `address.0.moveOutDate`))}
                    helperText={getIn(touched, `address.0.moveOutDate`) && getIn(errors, `address.0.moveOutDate`)}
                  />
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
              Please provide driver's license information
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card sx={{ py: 4, px: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="License Number"
                    {...getFieldProps(`license.number`)}
                    error={Boolean(getIn(touched, `license.number`) && getIn(errors, `license.number`))}
                    helperText={getIn(touched, `license.number`) && getIn(errors, `license.number`)}
                  />
                  <TextField
                    fullWidth
                    label="State"
                    {...getFieldProps(`license.state`)}
                    error={Boolean(getIn(touched, `license.state`) && getIn(errors, `license.state`))}
                    helperText={getIn(touched, `license.state`) && getIn(errors, `license.state`)}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Issue Date"
                    {...getFieldProps(`license.issueDate`)}
                    error={Boolean(getIn(touched, `license.issueDate`) && getIn(errors, `license.issueDate`))}
                    helperText={getIn(touched, `license.issueDate`) && getIn(errors, `license.issueDate`)}
                  />
                  <TextField
                    fullWidth
                    label="Expiration Date"
                    {...getFieldProps(`license.expiryDate`)}
                    error={Boolean(getIn(touched, `license.expiryDate`) && getIn(errors, `license.expiryDate`))}
                    helperText={getIn(touched, `license.expiryDate`) && getIn(errors, `license.expiryDate`)}
                  />
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
              Please provide medical card information
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card sx={{ py: 4, px: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Issue Date"
                    {...getFieldProps(`medicalCard.issueDate`)}
                    error={Boolean(getIn(touched, `medicalCard.issueDate`) && getIn(errors, `medicalCard.issueDate`))}
                    helperText={getIn(touched, `medicalCard.issueDate`) && getIn(errors, `medicalCard.issueDate`)}
                  />
                  <TextField
                    fullWidth
                    label="Expiration Date"
                    {...getFieldProps(`medicalCard.expiryDate`)}
                    error={Boolean(getIn(touched, `medicalCard.expiryDate`) && getIn(errors, `medicalCard.expiryDate`))}
                    helperText={getIn(touched, `medicalCard.expiryDate`) && getIn(errors, `medicalCard.expiryDate`)}
                  />
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
              Please provide all work history in the last 3 years
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Company"
                    {...getFieldProps(`workHistory.0.companyName`)}
                    error={Boolean(getIn(touched, `workHistory.0.companyName`) && getIn(errors, `workHistory.0.companyName`))}
                    helperText={getIn(touched, `workHistory.0.companyName`) && getIn(errors, `workHistory.0.companyName`)}
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    {...getFieldProps(`workHistory.0.companyAddress`)}
                    error={Boolean(getIn(touched, `workHistory.0.companyAddress`) && getIn(errors, `workHistory.0.companyAddress`))}
                    helperText={getIn(touched, `workHistory.0.companyAddress`) && getIn(errors, `workHistory.0.companyAddress`)}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Position"
                    {...getFieldProps(`workHistory.0.position`)}
                    error={Boolean(getIn(touched, `workHistory.0.position`) && getIn(errors, `workHistory.0.position`))}
                    helperText={getIn(touched, `workHistory.0.position`) && getIn(errors, `workHistory.0.position`)}
                  />
                  <TextField
                    fullWidth
                    label="Start Date"
                    {...getFieldProps(`workHistory.0.startDate`)}
                    error={Boolean(getIn(touched, `workHistory.0.startDate`) && getIn(errors, `workHistory.0.startDate`))}
                    helperText={getIn(touched, `workHistory.0.startDate`) && getIn(errors, `workHistory.0.startDate`)}
                  />
                  <TextField
                    fullWidth
                    label="End Date"
                    {...getFieldProps(`workHistory.0.endDate`)}
                    error={Boolean(getIn(touched, `workHistory.0.endDate`) && getIn(errors, `workHistory.0.endDate`))}
                    helperText={getIn(touched, `workHistory.0.endDate`) && getIn(errors, `workHistory.0.endDate`)}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Reference's Name"
                    {...getFieldProps(`workHistory.0.referenceName`)}
                    error={Boolean(getIn(touched, `workHistory.0.referenceName`) && getIn(errors, `workHistory.0.referenceName`))}
                    helperText={getIn(touched, `workHistory.0.referenceName`) && getIn(errors, `workHistory.0.referenceName`)}
                  />
                  <TextField
                    fullWidth
                    label="Reference's Phone"
                    {...getFieldProps(`workHistory.0.referencePhone`)}
                    error={Boolean(getIn(touched, `workHistory.0.referencePhone`) && getIn(errors, `workHistory.0.referencePhone`))}
                    helperText={getIn(touched, `workHistory.0.referencePhone`) && getIn(errors, `workHistory.0.referencePhone`)}
                  />
                  <TextField
                    fullWidth
                    label="Reference's Email"
                    {...getFieldProps(`workHistory.0.referenceEmail`)}
                    error={Boolean(getIn(touched, `workHistory.0.referenceEmail`) && getIn(errors, `workHistory.0.referenceEmail`))}
                    helperText={getIn(touched, `workHistory.0.referenceEmail`) && getIn(errors, `workHistory.0.referenceEmail`)}
                  />
                </Stack>

              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
              <Stack spacing={3}>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Create Staff
                  </LoadingButton>
                </Box>
              </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
