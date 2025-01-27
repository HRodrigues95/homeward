import { Button, Flex } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";

//styles
import './style.scss'

const PageHeader = ({ title, onBack=null }) => {
  return (
    <Flex rootClassName='page-header'>
      {!!onBack
        ? <Button onClick={onBack}>Back</Button>
        : <Flex />
      }

      <Typography.Title level={3}>{title}</Typography.Title>

      <div />
    </Flex>
  )
}

export default PageHeader
