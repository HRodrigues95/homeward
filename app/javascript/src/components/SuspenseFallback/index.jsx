import { Flex, Spin } from "antd";
import React from "react";

const SuspenseFallback = () => {
  return (
    <Flex flex={1}>
      <Spin size="large" />
    </Flex>
  )
}

export default SuspenseFallback
