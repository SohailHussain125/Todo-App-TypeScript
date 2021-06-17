import React, { useState, useEffect } from 'react'
import { Button, Modal, Input, Form } from 'antd';
import { PlusOutlined } from "@ant-design/icons"
interface Props {
    getTodo: (todoName: string) => void,
    item?: {
        name: string,
        id: number
    }
}
export const AddTodo: React.FC<Props> = ({ getTodo, item }) => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [todoName, setTodoName] = useState("")

    useEffect(() => {
        item?.name && setTodoName(item.name)
        item?.name && setModalVisible(true)
    }, [item])

    const handleOk = (e: any) => {
        getTodo(todoName)
        setModalVisible(false)
        setTodoName("")
    }
    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} okText="Add" onCancel={() => { setModalVisible(false); setTodoName("") }}>
                <Form onFinish={handleOk}>
                    <label>Name:
                        <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                    </label>
                </Form>
            </Modal>
            <Button className="add-btn-style" onClick={() => setModalVisible(true)}><PlusOutlined /></Button>
        </div>
    );
}