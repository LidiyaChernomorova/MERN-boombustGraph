import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// NOTES
export const insertNote = (payload: string) => api.post(`/note`, payload);
export const getAllNotes = () => api.get(`/notes`);
export const updateNoteById = (id: number, payload: string) =>
  api.put(`/note/${id}`, payload);
export const deleteNoteById = (id: number) => api.delete(`/note/${id}`);

// COMPANIES
export const getMetaData = () => api.get(`/meta-data`);
export const getCompanyData = (companyName: string) =>
  api.get(`/asset/${companyName}`);

const apis = {
  insertNote,
  getAllNotes,
  updateNoteById,
  deleteNoteById,
  getMetaData,
  getCompanyData,
};

export default apis;
