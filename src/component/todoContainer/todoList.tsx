import React, { useState } from 'react'

interface Props {
    item:string[]
}
export const TodoList: React.FC<Props> = ({ item }) => {
    return (
        <div>
            {
                item.map((todo) => <div>{todo}</div>)
            }
        </div>
    );
}