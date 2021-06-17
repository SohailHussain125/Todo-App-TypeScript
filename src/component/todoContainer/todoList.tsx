import React from 'react'
import { Table } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
interface Props {
    item: {
        name: string,
        id: number
    }[],
    removeTodo: (id: number) => void,
    editTodo: (todo: {
        name: string,
        id: number
    }) => void
}
export const TodoList: React.FC<Props> = ({ item, removeTodo, editTodo }) => {
    const dataSource = item.map((todo, i) => {
        return {
            key: todo.id,
            name: todo.name,
            action: <div style={{ display: "flex" }}>
                <div style={{ cursor: "pointer" }} onClick={() => removeTodo(todo.id)}><DeleteOutlined /></div>
                <div style={{ cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => editTodo(todo)}
                ><EditOutlined /></div>
            </div>
        }
    })
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',
        },

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ]
    return (
        <div style={{ width: "500px" }}>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    )
}