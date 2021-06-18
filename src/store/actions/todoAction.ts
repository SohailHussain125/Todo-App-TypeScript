import { Dispatch } from "redux";
import { todoType } from "./../type";
interface Action {
    type: string,
    payload?: TodoObj
}

interface ActionDelete {
    type: string,
    payload?: number
}

interface TodoObj {
    id: number,
    name: string,

}
export const addtodoAction = (payload: TodoObj) => {
    return (dispatch: Dispatch<Action>) => dispatch({ type: todoType.ADD, payload })
}

export const deletetodoAction = (payload: number) => {
    return (dispatch: Dispatch<ActionDelete>) => dispatch({ type: todoType.DELETE, payload: payload })
}
