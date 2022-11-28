import Store from "../../interfaces/store.interface";

export const selectTableData = (store: Store) => store.data.tableData;
export const selectCompanies = (store: Store) =>
  store.data.tableData.map((data) => data.asset);
export const selectTableDataNotes = (store: Store) => store.data.tableDataNotes;
export const selectTableDataIsLoading = (store: Store) =>
  store.data.tableIsLoading;
export const selectCompanyDataIsLoading = (store: Store) =>
  store.data.companyIsLoading;
export const selectPikedCompanyName = (store: Store) =>
  store.data.companyName;
export const selectPikedCompany = (store: Store) => store.data.company;
export const selectFrom = (store: Store) =>
  store.data.from;
export const selectTo = (store: Store) =>
  store.data.to;
export const selectCompanyCompare = (store: Store) =>
  store.data.companyCompare;
