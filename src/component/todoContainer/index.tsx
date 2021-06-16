import React, { useState } from 'react'
import { TodoList } from './todoList';
import { AddTodo } from './addTodo';
import { stat } from 'fs';

interface Props {

}

interface Todo {
    state: string[]
}
const TodoContainer: React.FC<Props> = () => {
    const [state, setstate] = useState<string[]>([])
    return (
        <div>
            <TodoList item={state} />
            <AddTodo getTodo={(e) => {
                setstate([...state, e])
            }} />
        </div>
    );
}

export default TodoContainer;