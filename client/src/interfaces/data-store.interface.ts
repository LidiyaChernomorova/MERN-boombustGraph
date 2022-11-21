import TableData from "./table-data.interface";

export default interface DataStore {
    tableData: TableData[];
    isLoading: boolean;
    selectedCompany: any
}
