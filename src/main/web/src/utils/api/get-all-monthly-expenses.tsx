import axios from "axios";

export type ResultSuccess<T> = {
    success: boolean,
    data: T
}

export type MonthlySpendings = {
    value: number,
    description: String,
    isActive: boolean
}

export interface GetAllExpenses{
    // (): Promise<ResultSuccess<MonthlySpendings[]>|String>
    (): Promise<ResultSuccess<MonthlySpendings[]>>
}

export const getAllMonthlyExpenses: GetAllExpenses = async () => {
    // try{
        const response = await axios('http://localhost:8082/spending', {
            method: 'GET',
        })
        return { success: true, data: response.data}
    // }
    // catch{
    //     return 'Error fetching data';
    // }
}
export const getAllMonthlyEarnings: GetAllExpenses = async () => {
    // try{
        const response = await axios('http://localhost:8082/earnings', {
            method: 'GET',
        })
        return { success: true, data: response.data}
    // }
    // catch{
    //     return 'Error fetching data';
    // }
}