import TableData from "./table-data.interface";
import CompanyData from "./company-data.interface";

export default interface DataStore {
    tableData: TableData[];
    isLoading: boolean;
    CompanyPicked: CompanyData | null;
    CompanyPickedName: string;
    CompanyPickedFrom: {value: string; index: number} | null;
    CompanyPickedTo: {value: string; index: number} | null;
}
