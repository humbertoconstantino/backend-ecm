import * as service from "../services/login-service";

export const create = async (payload: any): Promise<any> => {
  return await service.create(payload);
};
export const update = async (id: number, payload: any): Promise<any> => {
  return await service.update(id, payload);
};
export const getById = async (id: number): Promise<any> => {
  return await service.getById(id);
};
export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async (): Promise<any[]> => {
  return await service.getAll();
};
export const loginUser = async (payload: any): Promise<any[]> => {
  return await service.loginUser(payload);
};
export const getByDocumentNumber = async (documentNumber: string): Promise<any> => {
  return await service.getByDocumentNumber(documentNumber);
};

