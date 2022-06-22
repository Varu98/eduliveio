export const initialVideoState = {
  byTrending: null,
  byChipFilter: null,
  history: [],
};

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TRENDING":
      return { ...state, byTrending: "TRENDING" };
    case "HOME":
      return initialVideoState;
    case "CHIPS_FILTER":
      return { ...state, byChipFilter: payload };
    case "ADD_TO_HISTORY":
      return { ...state, history: [...state.history, payload] };
    default:
      return { ...state };
  }
};
