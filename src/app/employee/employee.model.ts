import { Role } from "./role.model";


export interface Employee{
    employeeId: number;
    firstName: string ;
    lastName: string ;
    email: string ;
    password: string ;
    phone: string;
    userName: string;
    jobTitle: string;
    roles: Role[];
}