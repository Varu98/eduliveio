import axios from "axios";

export const signupService = (navigate, signupData, e) => {
  e.preventDefault();
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        ...signupData,
      });
      console.log(data, status);

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  })();
};
