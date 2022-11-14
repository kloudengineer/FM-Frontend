import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// material
import { Container } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../../redux/store";
import { getProfile } from "../../../redux/slices/routes";
import { getVehicleList } from "../../../redux/slices/vehicles";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
import RouteNewForm from "./components/RouteNewForm";

// ----------------------------------------------------------------------

export default function RouteCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const Params = useParams();
  const { pathname } = useLocation();
  const { route } = useSelector((state) => state.route);
  const { staffList } = useSelector((state) => state.staff);
  const { vehicleList } = useSelector((state) => state.vehicle);

  const { id } = Params;
  const isEdit = pathname.includes("edit");

  useEffect(() => {
    if (isEdit) {
      dispatch(getProfile(id));
    }
    dispatch(getVehicleList());
  }, [dispatch, id, isEdit]);
  // dispatch(getStaffList());

  return (
    <Page title={isEdit ? `Route: Edit route` : `Route: Create route`}>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading={isEdit ? `Edit route` : `Create a new route`}
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "Route", href: PATH_DASHBOARD.dashboard.routes.directory },
            { name: isEdit ? route?.routeID : `Create route` },
          ]}
        />

        <RouteNewForm
          isEdit={isEdit}
          route={route}
          staff={staffList}
          vehicles={vehicleList}
        />
      </Container>
    </Page>
  );
}
