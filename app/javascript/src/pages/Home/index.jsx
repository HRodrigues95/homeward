import React from 'react'
import './style.scss'
import { Button, Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Flex vertical align='center' justify='center' className='home'>
      <Typography.Title level={3}>Home</Typography.Title>

      <Flex align='center' gap={8}>
        <Button onClick={() => navigate('/villages')}>
          Check Villages
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
