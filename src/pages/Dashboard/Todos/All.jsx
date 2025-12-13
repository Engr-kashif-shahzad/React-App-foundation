import { useEffect, useState } from 'react'
import { Button, Space, Table, Typography } from 'antd'
import {useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
const { Title } = Typography

const All = () => {
  const [todos,setTodos] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
// const todos =JSON.parse(localStorage.getItem("todos"))  || [] // or
// if(todos) {setTodos(todos)}
const todos =JSON.parse(localStorage.getItem("todos"))  || [] 
 setTodos(todos)
    },[])
    console.log('todos', todos)

    const columns = [
  {title: 'Title', dataIndex: 'title'},
  {title: 'Due Date', dataIndex: 'dueDate'},
  {title: 'Description', dataIndex: 'description'},
  {title: 'Priority', dataIndex: 'priority', render: text => <text className='text-capitalize'>{text}</text> },
  {title: 'Date Created', dataIndex: 'createdAt', render: text => <text className='text-capitalize'>{dayjs(text).format("dddd DD-MMM-YY, hh:mm:ss A")}</text> },
  
  {
    title: 'Action',
    render: (_, record) => (
      <Space>
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
  return (
    <main className='py-5' >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <Title level={2} className="mb-0">Todos</Title>
          <Button type="primary" onClick={() => { navigate("/dashboard/todos/add") }} >Add Todo</Button>
        </div>
        <Table columns={columns} dataSource={todos} />
      </div>
    </main>
  )
}

export default All