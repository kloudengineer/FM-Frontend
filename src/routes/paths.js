// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
  components: "",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  dashboard: {
    overview: path(ROOTS_DASHBOARD, "/overview"),

    // Staff
    staff: {
      directory: path(ROOTS_DASHBOARD, "/staff"),
      profile: path(ROOTS_DASHBOARD, "/staff/:id"),
      new: path(ROOTS_DASHBOARD, "/staff/new"),
      edit: path(ROOTS_DASHBOARD, "/staff/:id/edit"),
    },

    // Routes
    routes: {
      directory: path(ROOTS_DASHBOARD, "/routes"),
      profile: path(ROOTS_DASHBOARD, "/routes/:id"),
      new: path(ROOTS_DASHBOARD, "/routes/new"),
      edit: path(ROOTS_DASHBOARD, "/routes/:id/edit"),
    },

    // Vehicles
    vehicles: {
      directory: path(ROOTS_DASHBOARD, "/vehicles"),
      profile: path(ROOTS_DASHBOARD, "/vehicles/:id"),
      new: path(ROOTS_DASHBOARD, "/vehicles/new"),
      edit: path(ROOTS_DASHBOARD, "/vehicles/:id/edit"),
    },

    // Notifications
    notifications: {
      directory: path(ROOTS_DASHBOARD, "/notifications"),
      profile: path(ROOTS_DASHBOARD, "/notifications/:id"),
    },
  },
  admin: {
    carriers: path(ROOTS_DASHBOARD, "/carriers"),
  },
};

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";
