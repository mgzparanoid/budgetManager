import axios from "axios"
import { ResultSuccess } from "./get-all-monthly-expenses"

export interface GetExpenses{
    (month: string): Promise<ResultSuccess<String[]>>
}

export const getAllExpensesInAMonth: GetExpenses = async (month: string) => {
        const response = await axios('http://localhost:8082/expenses/' + month, {
            method: 'GET',
        })
        return { success: true, data: response.data}
}