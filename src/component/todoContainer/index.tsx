import React, { useState } from 'react'
import { TodoList } from './todoList';
import { AddTodo } from './addTodo';
import { stat } from 'fs';

interface TodoObj {
    name: string,
    id: number
}
const TodoContainer: React.FC = () => {
    const [state, setstate] = useState<TodoObj[]>([])
    const [edititem, setedititem] = useState<TodoObj>()
    const removeTodo = (id: number) => {
        setstate(state.filter(item => item.id !== id))
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
            <TodoList item={state} removeTodo={removeTodo} editTodo={editTodo} />
            <AddTodo
                item={edititem}
                getTodo={(e) => {
                    edititem?.name ?
                        onEditTodo(e)
                        :
                        setstate([...state, { id: state.length + 1, name: e }])
                }}

            />
        </div>
    );
}

export default TodoContainer;