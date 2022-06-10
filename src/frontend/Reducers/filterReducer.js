export const initialVideoState = { byTrending: null };

export const filterReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "TRENDING":
      return { ...state, byTrending: "TRENDING" };
    case "HOME":
      return initialVideoState;
    default:
      return { ...state };
  }
};
