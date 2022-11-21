import Store from "../../interfaces/store.interface";

export const selectMetaData = (store: Store) => store.user.metaData;

export const selectUserIsLoading = (store: Store) =>
  store.user.isLoading && selectMetaData;
