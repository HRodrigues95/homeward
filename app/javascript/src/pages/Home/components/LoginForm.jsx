import React from 'react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'



const LoginForm = () => {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log('Login Received values:', values)
    //
  }

  return (
    <Flex vertical align='center' justify='center' className='home'>
      <Typography.Title level={2}>Login</Typography.Title>

      <Form onFinish={handleSubmit}>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder='email@some.com' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Flex align='center' justify='space-between' gap={10}>
          <Button onClick={() => navigate('/register')}>
            Register
          </Button>

          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Flex>
      </Form>
    </Flex>
  )
}

export default LoginForm
