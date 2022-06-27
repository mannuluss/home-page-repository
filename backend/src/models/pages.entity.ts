import { Entity, Column, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity({ name: "pages", database: "config_repository" })
export class Pages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    pathImg: string;

    @Column()
    domainURI: string;

    @Column()
    enable: boolean;
}