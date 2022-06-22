import axios from "axios";

export const signupService = (navigate, signupData, e) => {
  e.preventDefault();
  (async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        ...signupData,
      });
      console.log(response);

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  })();
};
