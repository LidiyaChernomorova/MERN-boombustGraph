import Store from "../../interfaces/store.interface";

export const selectTableData = (store: Store) => store.data.tableData;
export const selectTableDataIsLoading = (store: Store) => store.data.isLoading;
export const selectPikedCompanyName = (store: Store) =>
  store.data.CompanyPickedName;
export const selectPikedCompany = (store: Store) => store.data.CompanyPicked;
export const selectPikedCompanyFrom = (store: Store) => store.data.CompanyPickedFrom;
export const selectPikedCompanyTo = (store: Store) => store.data.CompanyPickedTo;
