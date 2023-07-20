import School from "./models/School";
import Student from "./models/Student";
import User from "./models/User";
import dotenv from 'dotenv';
dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
  await User.sync({ alter: isDev });
  await School.sync({ alter: isDev });
  await Student.sync({ alter: isDev });
};

export default dbInit;
