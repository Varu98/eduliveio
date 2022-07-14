export const authInitialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};
export const authReducer = (authState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...authState,
        isLoggedIn: true,
        token: payload.encodedToken,
        user: payload.foundUser,
      };
    case "LOGOUT":
      return { ...authInitialState };
    case "LOGIN_PERSISTENT":
      return {
        ...authState,
        isLoggedIn: true,
        token: payload.token,
        ...payload.user,
      };
    case "SIGNUP":
      return { ...authState };
    default:
      return { ...authState };
  }
};
