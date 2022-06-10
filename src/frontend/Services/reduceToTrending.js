export const reduceToTrending = (state, videos) => {
  const { byTrending } = state;
  let videosCopy = [...videos];
  if (byTrending === "TRENDING") {
    return videosCopy.sort(
      (a, b) =>
        parseInt(
          b.views
            .split(" ")[0]
            .split("")
            .map((e) => e.replace("K", "000"))
            .map((e) => e.replace("M", "000000"))
            .map((e) => e.replace(".", ""))
            .join("")
        ) -
        parseInt(
          a.views
            .split(" ")[0]
            .split("")
            .map((e) => e.replace("K", "000"))
            .map((e) => e.replace("M", "000000"))
            .map((e) => e.replace(".", ""))
            .join("")
        )
    );
  } else {
    return [...videos];
  }
};
