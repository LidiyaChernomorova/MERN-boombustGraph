import TableData from "./table-data.interface";

export default interface Store {
  data: {
    tableData: TableData[];
    isLoading: boolean;
  };
}
