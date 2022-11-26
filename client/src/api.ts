import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api",
});

// NOTES
export const addNote = (note: string, asset: string) =>
  api.post(`/note`, { note, asset });
export const getAllNotes = () => api.get(`/notes`);
export const updateNoteById = (id: string, note: string) =>
  api.put(`/note/${id}`, { note });
export const deleteNoteById = (id: string) => api.delete(`/note/${id}`);

// COMPANIES
export const getMetaData = () => api.get(`/meta-data`);
export const getCompanyData = (companyName: string) =>
  api.get(`/asset/${companyName}`);

const apis = {
  addNote,
  getAllNotes,
  updateNoteById,
  deleteNoteById,
  getMetaData,
  getCompanyData,
};

export default apis;
