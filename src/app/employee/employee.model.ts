import { Role } from "./role.model";


export interface Employee{
    employeeId: number;
    email: string ;
    password: string ;
    firstName: string ;
    lastName: string ;
    phone: string;
    userName: string;
    jobTitle: string;
    roles: Role[];
}