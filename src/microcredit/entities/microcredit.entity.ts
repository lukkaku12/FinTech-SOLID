import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Microcredit {
@PrimaryGeneratedColumn()
id:number;

@Column()
userId:string;

@Column()
amount:number;

@Column()
interestRate: number;

@Column()
status: string;

}
