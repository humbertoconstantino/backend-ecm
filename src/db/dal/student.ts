import School from "../models/School";
import Student from "../models/Student";
import { StudentInput, StudentOutput } from "../models/Student";
import User from "../models/User";

export const create = async (payload: StudentInput): Promise<StudentOutput> => {
  const student = await Student.create(payload);
  return student;
};

export const update = async (
  id: number,
  payload: Partial<StudentInput>
): Promise<StudentOutput> => {
  const student = await Student.findByPk(id);
  if (!student) {
    throw new Error("not found");
  }
  const updatedStudent = await (student as Student).update(payload);
  return updatedStudent;
};

export const getById = async (id: number): Promise<StudentOutput> => {
  const student = await Student.findByPk(id);
  if (!student) {
    throw new Error("not found");
  }
  return student;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedStudentCount = await Student.destroy({
    where: { id },
  });
  return !!deletedStudentCount;
};

export const getAll = async (user?: number): Promise<StudentOutput[]> => {
  if (user) {
    return Student.findAll({
      where: { UserId: user },
      include: [
        {
          model: School,
          required: false,
        },
        {
          model: User,
          required: false,
        },
      ],
    });
  } else {
    return await Student.findAll({
      include: [
        {
          model: School,
          required: false,
        },
        {
          model: User,
          required: false,
        },
      ],
    });
  }
};
