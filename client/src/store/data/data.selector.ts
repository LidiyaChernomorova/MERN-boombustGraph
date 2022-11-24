import Store from "../../interfaces/store.interface";

export const selectTableData = (store: Store) => store.data.tableData;
export const selectTableDataNotes = (store: Store) => store.data.tableDataNotes;
export const selectTableDataIsLoading = (store: Store) => store.data.tableIsLoading;
export const selectCompanyDataIsLoading = (store: Store) => store.data.companyIsLoading;
export const selectPikedCompanyName = (store: Store) =>
  store.data.companyPickedName;
export const selectPikedCompany = (store: Store) => store.data.companyPicked;
export const selectPikedCompanyFrom = (store: Store) => store.data.companyPickedFrom;
export const selectPikedCompanyTo = (store: Store) => store.data.companyPickedTo;
