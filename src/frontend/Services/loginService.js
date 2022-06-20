import axios from "axios";

export const loginService = (e, loginData, navigate, authDispatch) => {
  e.preventDefault();

  console.log(loginData);
  (async () => {
    try {
      // Posting the login credentials to the server to cross check and receiving the token after a successful response
      const { data, status } = await axios.post("/api/auth/login", {
        ...loginData,
      });

      if (status === 200) {
        // Sets The token in localStorage after fulfilling of the axios request
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: data.foundUser }));

        navigate("/");
      }
      authDispatch({ type: "LOGIN", payload: data });
      // Testing
      console.log(data, status);
    } catch (error) {
      console.log(error);
    }
  })();
};
