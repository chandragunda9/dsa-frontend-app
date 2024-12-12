import { apiClient } from "./ApiClient";

export const retrieveContentApi = (path) => apiClient.get(`/fetch/content?path=${path}`)