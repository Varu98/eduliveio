export const initialVideoState = { byTrending: null, byChipFilter: null };

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TRENDING":
      return { ...state, byTrending: "TRENDING" };
    case "HOME":
      return initialVideoState;
    case "CHIPS_FILTER":
      return { ...state, byChipFilter: payload };
    default:
      return { ...state };
  }
};
