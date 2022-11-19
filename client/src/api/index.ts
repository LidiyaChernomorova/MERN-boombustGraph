import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});


// NOTES
export const insertNote = (payload: string) => api.post(`/note`, payload);
export const getAllNotes = () => api.get(`/notes`);
export const updateNoteById = (id: number, payload: string) => api.put(`/note/${id}`, payload);
export const deleteNoteById = (id: number) => api.delete(`/note/${id}`);

// COMPANIES
export const getCompaniesNames = () => api.get(`/companies-names`);

const apis = {
  insertNote,
  getAllNotes,
  updateNoteById,
  deleteNoteById,
  getCompaniesNames,
};

export default apis;
