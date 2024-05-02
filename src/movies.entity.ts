import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies_notflix')
export class Movies {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable: false})
    title: string;
   
    @Column()
    description: string;
    
    @Column({nullable: false})
    genre: string;
}