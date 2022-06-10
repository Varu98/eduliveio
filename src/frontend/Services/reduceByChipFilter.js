export const reduceByChipFilter = (state, videos) => {
  const { byChipFilter } = state;
  let videoCopy = [...videos];
  if (byChipFilter !== null)
    return videoCopy.filter((video) => video.categoryName === byChipFilter);

  return [...videos];
};
