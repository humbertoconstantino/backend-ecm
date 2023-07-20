import User from "../models/User";
import { UserInput, UserOutput } from "../models/User";
import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const user = await User.create(payload);
  return user;
};

export const update = async (
  id: number,
  payload: Partial<UserInput>
): Promise<UserOutput> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("not found");
  }
  const updatedUser = await (user as User).update(payload);
  return updatedUser;
};

export const getById = async (id: number): Promise<UserOutput> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("not found");
  }
  return user;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedUserCount = await User.destroy({
    where: { id },
  });
  return !!deletedUserCount;
};

export const getAll = async (
): Promise<UserOutput[]> => {
  return User.findAll();
};

export const loginUser = async (payload: any): Promise<any> => {
  const { login, password } = payload;
  if (!login || !password) {
    return { auth: false, message: "Login ou senha inválido." };
  } else {
    const user = await User.findOne({ where: { login } });
    if (user && login === user.login && password === user.password) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET || '232323', { expiresIn: 7200 });
      return { auth: true, token };
    } else {
      return { auth: false, message: "Login ou senha inválido." };
    }
  }
};

export const getByDocumentNumber = async (documentNumber: string): Promise<UserOutput> => {
  const user = await User.findOne({ where: { documentNumber } });
  if (!user) {
    throw new Error("not found");
  }
  return user;
};
