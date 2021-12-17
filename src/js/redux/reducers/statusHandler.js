export const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

export const setLoading = (state, action) => {
  state.status = "loading";
  state.error = null;
};
