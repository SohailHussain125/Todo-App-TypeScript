import React, { useState } from 'react'
import { TodoList } from './todoList';
import { AddTodo } from './addTodo';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions } from './../../store'
interface TodoObj {
    name: string,
    id: number
}
const TodoContainer: React.FC = () => {
    const [state, setstate] = useState<TodoObj[]>([])
    const [edititem, setedititem] = useState<TodoObj>()

    const todoList = useSelector((state: any) => state.todo.todoList)
    const dispatch = useDispatch();
    const { addtodoAction, deletetodoAction } = bindActionCreators(actions, dispatch)

    const removeTodo = (id: number) => {
        deletetodoAction(id)
    }
    const editTodo = (item: {
        name: string,
        id: number
    }) => {
        setedititem(item)
    }
    const onEditTodo = (name: string) => {
        setstate(state.map((item) => {
            if (item?.id === edititem?.id) {
                setedititem({
                    name: "",
                    id: 0
                })
                return {
                    id: item.id,
                    name
                }
            }
            return item
        }))
        // setstate(state.map(item => item.id !== edititem.id))
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TodoList item={todoList} removeTodo={removeTodo} editTodo={editTodo} />
            <AddTodo
                item={edititem}
                getTodo={(e) => {
                    edititem?.name ?
                        onEditTodo(e)
                        :
                        addtodoAction({
                            name: e, id: (new Date()).getTime(),
                        })

                }}

            />
        </div>
    );
}

export default TodoContainer;