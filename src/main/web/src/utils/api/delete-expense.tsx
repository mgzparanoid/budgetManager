import axios from "axios"

export const deleteExpense = async (id: number) => {
    try{
        const response = await axios('http://localhost:8082/fixedmontly/delete/' + id, {
            method: 'DELETE',
        })
        return { success: true, data: response.data}
    }
    catch{
        return 'Error deleting expense';
    }
}