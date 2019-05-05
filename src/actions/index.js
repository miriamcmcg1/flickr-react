export const updateSearch = (text, number) => ({
  type: "UPDATE_SEARCH",
  city: text,
  limit: number
});

export const updateResult = res => ({
  type: "UPDATE_RESULT",
  result: res
});
