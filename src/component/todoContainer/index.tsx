import React, { useState } from 'react'
import { TodoList } from './todoList';
import { AddTodo } from './addTodo';

interface Props {

}
const TodoContainer: React.FC<Props> = () => {
    const [state, setstate] = useState([])
    return (
        <div>
            <TodoList item={["Hello", "asdasd",]} />
            <AddTodo />
        </div>
    );
}

export default TodoContainer;