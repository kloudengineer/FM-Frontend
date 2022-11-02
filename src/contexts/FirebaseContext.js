import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "../utils/axios";
import { firebaseConfig } from "../config";

// ----------------------------------------------------------------------

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIALISE") {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: "firebase",
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;

          const docRef = firebase.firestore().collection("users").doc(user.uid);
          docRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                setProfile(doc.data());
              }
            })
            .catch((error) => {
              console.error(error);
            });

          user
            .getIdToken()
            .then(
              (token) =>
                (axios.defaults.headers.common["Authorization"] =
                  "Bearer " + token)
            );

          dispatch({
            type: "INITIALISE",
            payload: { isAuthenticated: true, user },
          });
        } else {
          dispatch({
            type: "INITIALISE",
            payload: { isAuthenticated: false, user: null },
          });
        }
      }),
    [dispatch]
  );

  const login = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        });
      });

  const register = async (
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    companyName,
    address,
    ein,
    dot
  ) =>
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const { user } = res;
        const token = await user.getIdToken();
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            uid: res.user.uid,
            email,
            displayName: `${firstName} ${lastName}`,
            companyName: companyName,
          });
        axios.post("/auth/register", {
          uid: res.user.uid,
          email,
          firstName,
          lastName,
          phoneNumber,
          companyName,
          address,
          ein,
          dot,
        });
      });

  const logout = async () => {
    await firebase.auth().signOut();
  };

  const resetPassword = async (email) => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

  const auth = { ...state.user };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          carrierUID: auth.uid,
          email: auth.email,
          photoURL: auth.photoURL || profile?.photoURL,
          displayName: auth.displayName || profile?.displayName,
          companyName: auth.companyName || profile?.companyName,
          role: "admin",
        },
        login,
        register,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
