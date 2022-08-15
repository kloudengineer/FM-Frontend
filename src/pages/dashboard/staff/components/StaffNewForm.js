import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FieldArray, FormikProvider, useFormik, getIn } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Card, CardHeader, Grid, Stack, TextField, Typography, FormLabel, FormHelperText } from '@mui/material';
// utils
import { fData } from '../../../../utils/formatNumber';
// redux
import { useDispatch } from '../../../../redux/store';
import { createStaff, updateStaff } from '../../../../redux/slices/staff';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
//
import { UploadAvatar } from '../../../../components/upload';

// ----------------------------------------------------------------------

StaffNewForm.propTypes = {
  isEdit: PropTypes.bool,
  staff: PropTypes.object
};

export default function StaffNewForm({ isEdit, staff }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const StaffSchema = Yup.object().shape({
    avatarUrl: Yup.object().shape({
      path: Yup.string(),
      preview: Yup.string()
    }),
    firstName: Yup.string().min(2).max(30),
    lastName: Yup.string().min(2).max(30),
    email: Yup.string().email().min(5).max(30),
    phoneNumber: Yup.string(),
    dateOfBirth: Yup.string(),
    ssn: Yup.string(),
    address: Yup.array().of(
      Yup.object().shape({
        streetAddress1: Yup.string(),
        streetAddress2: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        zipCode: Yup.string(),
        moveInDate: Yup.string(),
        moveOutDate: Yup.string()
      })
    ),
    license: Yup.object().shape({
      number: Yup.string(),
      state: Yup.string(),
      issueDate: Yup.string(),
      expiryDate: Yup.string(),
    }),
    medicalCard: Yup.object().shape({
      issueDate: Yup.string(),
      expiryDate: Yup.string(),
    }),
    workHistory: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string(),
        companyAddress: Yup.string(),
        position: Yup.string(),
        startDate: Yup.string(),
        endDate: Yup.string(),
        referenceName: Yup.string(),
        referencePhone: Yup.string(),
        referenceEmail: Yup.string()
      })
    )
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      avatarUrl: {
        path: staff?.avatarUrl?.path || '',
        preview: staff?.avatarUrl?.preview || ''
      },
      firstName: staff?.firstName || '',
      lastName: staff?.lastName || '',
      email: staff?.email || '',
      phoneNumber: staff?.phoneNumber || '',
      dateOfBirth: staff?.dateOfBirth || '',
      ssn: staff?.ssn || '',
      address: staff?.address || [
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
        number: staff?.license?.number || '',
        state: staff?.license?.state || '',
        issueDate: staff?.license?.issueDate || '',
        expiryDate: staff?.license?.expiryDate || ''
      },
      medicalCard: {
        issueDate: staff?.medicalCard?.issueDate || '',
        expiryDate: staff?.medicalCard?.expiryDate || ''
      },
      workHistory: staff?.workHistory || [
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
    validationSchema: StaffSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(true);
        await dispatch(isEdit ? updateStaff(staff._id, values) : createStaff(values));
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
              {/* <Box sx={{ mb: 5 }}>
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
              </Box> */}
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    {...getFieldProps('firstName')}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
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

          <FieldArray
              name="address"
              render={(addresses) => (
                <>
                    {addresses.form.values.address.map((res, index) => (
                      <Grid key={index} item xs={12} md={12}>
                        <Card sx={{ p: 3 }}>
                          <Stack spacing={3}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Street Address 1"
                                {...getFieldProps(`address.${index}.streetAddress1`)}
                                error={Boolean(getIn(touched, `address.${index}.streetAddress1`) && getIn(errors, `address.${index}.streetAddress1`))}
                                helperText={getIn(touched, `address.${index}.streetAddress1`) && getIn(errors, `address.${index}.streetAddress1`)}
                              />
                              <TextField
                                fullWidth
                                label="Street Address 2"
                                {...getFieldProps(`address.${index}.streetAddress2`)}
                                error={Boolean(getIn(touched, `address.${index}.streetAddress2`) && getIn(errors, `address.${index}.streetAddress2`))}
                                helperText={getIn(touched, `address.${index}.streetAddress2`) && getIn(errors, `address.${index}.streetAddress2`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="City"
                                {...getFieldProps(`address.${index}.city`)}
                                error={Boolean(getIn(touched, `address.${index}.city`) && getIn(errors, `address.${index}.city`))}
                                helperText={getIn(touched, `address.${index}.city`) && getIn(errors, `address.${index}.city`)}
                              />
                              <TextField
                                fullWidth
                                label="State"
                                {...getFieldProps(`address.${index}.state`)}
                                error={Boolean(getIn(touched, `address.${index}.state`) && getIn(errors, `address.${index}.state`))}
                                helperText={getIn(touched, `address.${index}.state`) && getIn(errors, `address.${index}.state`)}
                              />
                              <TextField
                                fullWidth
                                label="Zip Code"
                                {...getFieldProps(`address.${index}.zipCode`)}
                                error={Boolean(getIn(touched, `address.${index}.zipCode`) && getIn(errors, `address.${index}.zipCode`))}
                                helperText={getIn(touched, `address.${index}.zipCode`) && getIn(errors, `address.${index}.zipCode`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Move-in Date"
                                {...getFieldProps(`address.${index}.moveInDate`)}
                                error={Boolean(getIn(touched, `address.${index}.moveInDate`) && getIn(errors, `address.${index}.moveInDate`))}
                                helperText={getIn(touched, `address.${index}.moveInDate`) && getIn(errors, `address.${index}.moveInDate`)}
                              />
                              <TextField
                                fullWidth
                                label="Move-out Date"
                                {...getFieldProps(`address.${index}.moveOutDate`)}
                                error={Boolean(getIn(touched, `address.${index}.moveOutDate`) && getIn(errors, `address.${index}.moveOutDate`))}
                                helperText={getIn(touched, `address.${index}.moveOutDate`) && getIn(errors, `address.${index}.moveOutDate`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              {
                                addresses.form.values.address.length !== 1 && (
                                  <IconButton onClick={() => addresses.remove(index)}>
                                    <DeleteIcon />
                                  </IconButton>
                                )
                              }
                        
                              <Button
                                fullWidth
                                onClick={() =>
                                  addresses.push({
                                    streetAddress1: staff?.streetAddress1 || '',
                                    streetAddress2: staff?.streetAddress2 || '',
                                    city: staff?.city || '',
                                    state: staff?.state || '',
                                    zip: staff?.zip || ''
                                  })
                                }
                              >
                                Add another address
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

          <FieldArray
              name="workHistory"
              render={(work) => (
                <>
                    {work.form.values.workHistory.map((res, index) => (
                      <Grid key={index} item xs={12} md={12}>
                        <Card sx={{ p: 3 }}>
                          <Stack spacing={3}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Company"
                                {...getFieldProps(`workHistory.${index}.companyName`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.companyName`) && getIn(errors, `workHistory.${index}.companyName`))}
                                helperText={getIn(touched, `workHistory.${index}.companyName`) && getIn(errors, `workHistory.${index}.companyName`)}
                              />
                              <TextField
                                fullWidth
                                label="Address"
                                {...getFieldProps(`workHistory.${index}.companyAddress`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.companyAddress`) && getIn(errors, `workHistory.${index}.companyAddress`))}
                                helperText={getIn(touched, `workHistory.${index}.companyAddress`) && getIn(errors, `workHistory.${index}.companyAddress`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Position"
                                {...getFieldProps(`workHistory.${index}.position`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.position`) && getIn(errors, `workHistory.${index}.position`))}
                                helperText={getIn(touched, `workHistory.${index}.position`) && getIn(errors, `workHistory.${index}.position`)}
                              />
                              <TextField
                                fullWidth
                                label="Start Date"
                                {...getFieldProps(`workHistory.${index}.startDate`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.startDate`) && getIn(errors, `workHistory.${index}.startDate`))}
                                helperText={getIn(touched, `workHistory.${index}.startDate`) && getIn(errors, `workHistory.${index}.startDate`)}
                              />
                              <TextField
                                fullWidth
                                label="End Date"
                                {...getFieldProps(`workHistory.${index}.endDate`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.endDate`) && getIn(errors, `workHistory.${index}.endDate`))}
                                helperText={getIn(touched, `workHistory.${index}.endDate`) && getIn(errors, `workHistory.${index}.endDate`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              <TextField
                                fullWidth
                                label="Reference's Name"
                                {...getFieldProps(`workHistory.${index}.referenceName`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.referenceName`) && getIn(errors, `workHistory.${index}.referenceName`))}
                                helperText={getIn(touched, `workHistory.${index}.referenceName`) && getIn(errors, `workHistory.${index}.referenceName`)}
                              />
                              <TextField
                                fullWidth
                                label="Reference's Phone"
                                {...getFieldProps(`workHistory.${index}.referencePhone`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.referencePhone`) && getIn(errors, `workHistory.${index}.referencePhone`))}
                                helperText={getIn(touched, `workHistory.${index}.referencePhone`) && getIn(errors, `workHistory.${index}.referencePhone`)}
                              />
                              <TextField
                                fullWidth
                                label="Reference's Email"
                                {...getFieldProps(`workHistory.${index}.referenceEmail`)}
                                error={Boolean(getIn(touched, `workHistory.${index}.referenceEmail`) && getIn(errors, `workHistory.${index}.referenceEmail`))}
                                helperText={getIn(touched, `workHistory.${index}.referenceEmail`) && getIn(errors, `workHistory.${index}.referenceEmail`)}
                              />
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                              {
                                work.form.values.workHistory.length !== 1 && (
                                  <IconButton onClick={() => work.remove(index)}>
                                    <DeleteIcon />
                                  </IconButton>
                                )
                              }
                        
                              <Button
                                fullWidth
                                onClick={() => {
                                  work.push({
                                    companyName: staff?.companyName || '',
                                    companyAddress: staff?.companyAddress || '',
                                    position: staff?.position || '',
                                    startDate: staff?.startDate || '',
                                    endDate: staff?.endDate || '',
                                    referenceName: staff?.referenceName || '',
                                    referencePhone: staff?.referencePhone || '',
                                    referenceEmail: staff?.referenceEmail || ''
                                  })
                                }
                                 
                                }
                              >
                                Add previous work
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
                    { isEdit ? 'Update Staff' : 'Create Staff' }
                  </LoadingButton>
                </Box>
              </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
