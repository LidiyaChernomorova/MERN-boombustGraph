import TableData from "./table-data.interface";
import CompanyData from "./company-data.interface";

export default interface DataStore {
  tableData: TableData[];
  tableIsLoading: boolean;
  companyIsLoading: boolean;
  companyPicked: CompanyData | null;
  companyPickedName: string;
  companyPickedFrom: { value: string; index: number };
  companyPickedTo: { value: string; index: number };
}
