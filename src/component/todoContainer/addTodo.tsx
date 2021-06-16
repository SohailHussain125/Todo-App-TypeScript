import React, { useState } from 'react'
import { Button, Modal, Input } from 'antd';

interface Props {
}
export const AddTodo: React.FC<Props> = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const handleOk = (e: any) => {

    }
    const handleCancel = () => {

    }

    return (
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={() => setModalVisible(false)}>
                <Input />
            </Modal>
            <Button onClick={(e: any) => setModalVisible(true)}>Add</Button>
        </div>
    );
}