import React from 'react'
import './style.scss'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log('Register Received values:', values)
    //
  }

  return (
    <Flex vertical align='center' justify='center' className='home'>
      <Typography.Title level={3}>Register</Typography.Title>

      <Form onFinish={handleSubmit}>
        <Form.Item
          label='First Name'
          name='first_name'
          rules={[{ required: true, message: 'Please input your First name!' }]}
        >
          <Input placeholder='John' />
        </Form.Item>

        <Form.Item
          label='Last Name'
          name='last_name'
          rules={[{ required: true, message: 'Please input your Last name!' }]}
        >
          <Input placeholder='Doe' />
        </Form.Item>

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
          <Button onClick={() => navigate('/')}>
            Cancel
          </Button>

          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Flex>
      </Form>
    </Flex>
  )
}

export default Register
