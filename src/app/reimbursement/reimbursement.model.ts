export interface Reimbursement{
    reimbursementId: number,
    statusId: number,
    employeeId: number,
    employee: string,
    status: string,
    expenseType: string,
    merchant: String,
    amount: number,
    details: string,            // Info about reimbursement, 
    currentComment: string,     // most recent comment usually about a update or approval/denail
    dateOfTransaction: string,
    dateSubmitted: string      // date of most recent update, including if resolved

}