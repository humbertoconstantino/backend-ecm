import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import School from "./School";
import User from "./User";

interface StudentAttributes {
  id: number;
  name: string;
  lastName: string;
  gender?: string;
  SchoolId?: number;
  UserId?: number;
  zipCode?: string;
  street?: string;
  neighborhood?: string;
  complement?: string;
  city?: string;
  turn?: string;
  price?: number;
  paymentDate?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface StudentInput extends Optional<StudentAttributes, "id"> {}
export interface StudentOutput extends Required<StudentAttributes> {}

class Student
  extends Model<StudentAttributes, StudentInput>
  implements StudentAttributes
{
  public id!: number;
  public name!: string;
  public lastName!: string;
  public gender!: string;
  public SchoolId!: number;
  public zipCode!: string;
  public street!: string;
  public neighborhood!: string;
  public city!: string;
  public complement!: string;
  public turn!: string;
  public price!: number;
  public UserId!: number;
  public paymentDate!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SchoolId: {
      type: DataTypes.INTEGER,
      references: {
        model: School,
        key: "id",
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    turn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    paymentDate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

Student.belongsTo(School, {
  foreignKey: {
      allowNull: true
  }
});

Student.belongsTo(User, {
  foreignKey: {
      allowNull: true
  }
});

export default Student;
