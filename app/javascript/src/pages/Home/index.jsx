import React from 'react'
import './style.scss'
import { Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
// Components
import LoginForm from './components/LoginForm'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Flex vertical align='center' justify='center' className='home'>
      <LoginForm />
    </Flex>
  )
}

export default Home
