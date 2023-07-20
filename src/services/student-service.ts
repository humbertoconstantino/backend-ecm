import * as studentDal from "../db/dal/student";
import { StudentInput, StudentOutput } from "../db/models/Student";

export const create = (payload: StudentInput): Promise<StudentOutput> => {
  return studentDal.create(payload);
};
export const update = (
  id: number,
  payload: Partial<StudentInput>
): Promise<StudentOutput> => {
  return studentDal.update(id, payload);
};
export const getById = (id: number): Promise<StudentOutput> => {
  return studentDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return studentDal.deleteById(id);
};
export const getAll = (user?: number): Promise<StudentOutput[]> => {
  return studentDal.getAll(user);
};
