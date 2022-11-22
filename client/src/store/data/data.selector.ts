import Store from "../../interfaces/store.interface";

export const selectTableData = (store: Store) => store.data.tableData;
export const selectPikedCompanyName = (store: Store) => store.data.pikedCompanyName;

export const selectTableDataIsLoading = (store: Store) =>
  store.data.isLoading && selectTableData;
