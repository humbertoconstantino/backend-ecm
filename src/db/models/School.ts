import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface SchoolAttributes {
  id: number;
  name: string;
  street: string;
  neighborhood: string;
  city: string;
  number: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface SchoolInput extends Optional<SchoolAttributes, "id"> {}
export interface SchoolOutput extends Required<SchoolAttributes> {}

class School extends Model<SchoolAttributes, SchoolInput> implements SchoolAttributes {
  public id!: number;
  public name!: string;
  public street!: string;
  public neighborhood!: string;
  public city!: string;
  public number!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

School.init(
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
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default School;
