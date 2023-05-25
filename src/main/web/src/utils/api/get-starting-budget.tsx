import axios from "axios"
import { ResultSuccess } from "./get-all-monthly-expenses"

export interface GetStartingBudget{
    (): Promise<ResultSuccess<number>>
}

export const getStartingBudget: GetStartingBudget = async () => {
    // try{
        const response = await axios('http://localhost:8082/starting-budget', {
            method: 'GET',
        })
        return { success: true, data: response.data}
    // }
    // catch{
    //     return 'Error fetching data';
    // }
}