import TableData from "./table-data.interface";
import CompanyData from "./company-data.interface";
import NoteData from "./notes-data.interface";

export default interface DataStore {
  tableData: TableData[];
  tableDataNotes: NoteData[];
  tableIsLoading: boolean;
  notesIsLoading: boolean;
  companyIsLoading: boolean;
  company: CompanyData | null;
  companyName: string;
  companyCompareName: string;
  companyCompare: CompanyData | null;
  from: { value: string; index: number };
  to: { value: string; index: number };
}
