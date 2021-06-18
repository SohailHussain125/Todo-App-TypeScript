import { todoType } from "./../type";


interface TodoObj {
    id: number,
    name: string,

}
interface StateType {
    todoList: TodoObj[]
}
interface Action {
    type: string,
    payload?: TodoObj
}
interface ActionDelete {
    type: string,
    payload?: number
}
const initialState = {
    todoList: []
}
const todoReducers = (state: StateType = initialState, action: Action | ActionDelete) => {
    switch (action.type) {
        case todoType.ADD:
            console.log(">>>>>>>>>", action.payload)
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case todoType.DELETE:
            let newTodoList = state.todoList.filter(item => item.id !== action.payload)
            return {
                ...state,
                todoList: [...newTodoList]
            }
        default: {
            return state;
        }

    }
}
export default todoReducers;