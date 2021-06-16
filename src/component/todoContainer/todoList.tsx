import React, { useState } from 'react'

interface Props {
    item:string[]
}
export const TodoList: React.FC<Props> = ({ item }) => {
    console.log(item, ">>>>>");

    const [Todo, setTodo] = useState([])
    return (
        <div>
            {
                item.map((todo) => <div>{todo}</div>)
            }
        </div>
    );
}