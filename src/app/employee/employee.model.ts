import { Role } from "./role.model";


export interface Employee{
    employeeID: number;
    email: string ;
    password: string ;
    firstName: string ;
    lastName: string ;
    phone: string;
    userName: string;
    fullName: string;
    jobTitle: string;
    roles: Role[];
}