import School from "../models/School";
import { SchoolInput, SchoolOutput } from "../models/School";

export const create = async (payload: SchoolInput): Promise<SchoolOutput> => {
  const school = await School.create(payload);
  return school;
};

export const update = async (
  id: number,
  payload: Partial<SchoolInput>
): Promise<SchoolOutput> => {
  const school = await School.findByPk(id);
  if (!school) {
    throw new Error("not found");
  }
  const updatedSchool = await (school as School).update(payload);
  return updatedSchool;
};

export const getById = async (id: number): Promise<SchoolOutput> => {
  const school = await School.findByPk(id);
  if (!school) {
    throw new Error("not found");
  }
  return school;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedSchoolCount = await School.destroy({
    where: { id },
  });
  return !!deletedSchoolCount;
};

export const getAll = async (
): Promise<SchoolOutput[]> => {
  return School.findAll();
};
