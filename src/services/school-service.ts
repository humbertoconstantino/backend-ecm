import * as schoolDal from "../db/dal/school";
import { SchoolInput, SchoolOutput } from "../db/models/School";

export const create = (payload: SchoolInput): Promise<SchoolOutput> => {
  return schoolDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<SchoolInput>
): Promise<SchoolOutput> => {
  return schoolDal.update(id, payload);
};
export const getById = (id: number): Promise<SchoolOutput> => {
  return schoolDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return schoolDal.deleteById(id);
};
export const getAll = (): Promise<SchoolOutput[]> => {
  return schoolDal.getAll();
};
