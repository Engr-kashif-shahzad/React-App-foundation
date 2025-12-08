import { Button, Form, Input, Typography } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
const { Title, Paragraph } = Typography
const { Item } = Form
const initialState = { name: "", email: "", Password: "", confirmPassword: "" }
const Register = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleRegister = () => {
    let { name, email, password, confirmPassword } = state
    name = name.trim()
    if (name.length < 3){return window.toastify("Please enter your full name", "error")}
    if (!window.isValidEmail(email)){return window.toastify("Please enter your valid email", "error")}
    if (password.length < 6){return window.toastify("password must be at least 6 chars", "error")}
    if (confirmPassword !== password){return window.toastify("password not match", "error")}
    // console.log('window.isValidEmail(email)', window.isValidEmail(email))
    const user = {uid:window.getRandomId(), name, email, password , status:'active', role:'customer'}
    // console.log('user', user)
    // setIsProcessing(true)

    const users = JSON.parse(localStorage.getItem('users')) || []

    let isUserFound = users.find(user => user.email===email)
    // console.log('isUserFound', isUserFound)
    // return
    if (isUserFound){
      setIsProcessing(false)
      return window.toastify("user already existed", 'error')
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    setTimeout(() => {
      setIsProcessing(false)
      window.toastify("A new user account has been successfully created", 'success')
    }, 500);
  }
  return (
    <main className="auth flex-center">
      <div className="container">
        <div className="card p-3 p-4 mx-auto">
          <Title level={1} className="text-center">Register</Title>
          <Paragraph className="text-center">Already have an account? <Link to='/auth/login'>Login</Link></Paragraph>
          <Form layout="vertical">
            <Item label='Full Name' required>
              <Input type='text' size="large" placeholder="Enter your full Name" name="name" onChange={handleChange} />
            </Item>
            <Item label='Email' required>
              <Input type='email' size="large" placeholder="Enter your email" name="email" onChange={handleChange} />
            </Item>
            <Item label='Password' required>
              <Input.Password size="large" placeholder="Enter your Password" name="password" onChange={handleChange} />
            </Item>
            <Item label='Confirm Password' required>
              <Input.Password size="large" placeholder="Enter your Password again" name="confirmPassword" onChange={handleChange} />
            </Item>
            <Button type="primary" size="large" block htmlType="submit" loading={isProcessing} onClick={handleRegister}>Create Account</Button>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Register