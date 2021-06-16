import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd';

interface Props {
    getTodo: (todoName: string) => void
}
export const AddTodo: React.FC<Props> = ({ getTodo }) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [todoName, setTodoName] = useState("")

    const handleOk = (e: any) => {
        getTodo(todoName)
        setModalVisible(false)
    }
    const handleCancel = () => {

    }

    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} okText="Add" onCancel={() => setModalVisible(false)}>
                <label>Name:
                    <Input onChange={(e) => setTodoName(e.target.value)} />
                </label>
            </Modal>
            <Button onClick={(e: any) => setModalVisible(true)}>Add</Button>
        </div>
    );
}