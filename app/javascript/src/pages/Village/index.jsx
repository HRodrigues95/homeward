import React from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
// Components
import PageHeader from "../../components/PageHeader";

const Village = () => {
  const navigate = useNavigate()

  return (
    <Flex vertical justify='center'>
      <PageHeader title='Villages' onBack={() => navigate('/')} />

      <Flex>
        <Typography.Text>Content</Typography.Text>
      </Flex>
    </Flex>
  )
}

export default Village
