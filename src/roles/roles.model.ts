import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { UserRoles } from "./user-roles.model";

interface IRoleCreationAttr {
  value: string,
  description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, IRoleCreationAttr>{

  @ApiProperty({example:'1', description:'Unique identification'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example:'ADMIN', description:'Unique user role'})
  @Column({type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({example:'Administrator', description:'Role description'})
  @Column({type: DataType.STRING, allowNull: false })
  description:string;

  @BelongsToMany( ()=> User, ()=>UserRoles)
  users: User[];
}