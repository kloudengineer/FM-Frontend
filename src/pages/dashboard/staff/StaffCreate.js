// import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Icon } from "@iconify/react";
import closeFill from "@iconify/icons-eva/close-fill";
// material
import { Container } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../../redux/store";
import { createStaff } from "../../../redux/thunk/staffThunk";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import StaffNewForm from "./components/StaffNewForm";
import { MIconButton } from "../../../components/@material-extend";
// ----------------------------------------------------------------------

export default function StaffCreate() {
  const { themeStretch } = useSettings();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const Params = useParams();
  // const { id } = Params;
  const { pathname } = useLocation();

  // const { staff } = useSelector((state) => state.staff);
  const { staff } = useSelector((state) => ({ ...state }));
  const isEdit = pathname.includes("edit");
  // const currentUser = staff.data.find((user) => user.Id === id);
  // useEffect(() => {
  //   if (isEdit) {
  //     dispatch(getProfile(id));
  //   }
  // }, [dispatch, id, isEdit]);

  const handleUserCreate = async (v) => {
    const reqObject = {
      staff: v,
    };
    const reduxRes = await dispatch(createStaff(reqObject));
    console.log("reduxRes=", reduxRes);
    if (reduxRes.type === "staff/create/rejected") {
      enqueueSnackbar(`${reduxRes.error.message}`, {
        variant: "error",
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        ),
      });
    } else if (reduxRes.type === "staff/create/fulfilled" && !isEdit) {
      enqueueSnackbar(`User Created`, {
        variant: "success",
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        ),
      });
      navigate(`${PATH_DASHBOARD.dashboard.staff.directory}`);
    } else if (reduxRes.type === "staff/create/fulfilled" && isEdit) {
      enqueueSnackbar(`User Updated`, {
        variant: "success",
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Icon icon={closeFill} />
          </MIconButton>
        ),
      });
      navigate(`${PATH_DASHBOARD.dashboard.staff.directory}`);
    }
  };

  return (
    <Page title={isEdit ? `Staff: Edit staff` : `Staff: Create staff`}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading={isEdit ? `Edit staff` : `Create a new staff`}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Staff", href: PATH_DASHBOARD.dashboard.staff.directory },
            {
              name: isEdit
                ? `${staff?.firstName} ${staff?.lastName}`
                : `Create staff`,
            },
          ]}
        />

        <StaffNewForm
          isEdit={isEdit}
          staff={isEdit ? staff : null}
          handleUserCreate={handleUserCreate}
        />
      </Container>
    </Page>
  );
}
