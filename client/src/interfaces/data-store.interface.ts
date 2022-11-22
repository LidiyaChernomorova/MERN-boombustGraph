import TableData from "./table-data.interface";
import CompanyData from "./company-data.interface";

export default interface DataStore {
    tableData: TableData[];
    isLoading: boolean;
    pikedCompany: CompanyData | null;
    pikedCompanyName: string;
}
