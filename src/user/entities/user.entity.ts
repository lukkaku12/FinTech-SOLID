import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;

@Column()
creditScore:number;

@Column()
financialHistory: FinancialRecord[];//strings


}
