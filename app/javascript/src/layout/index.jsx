import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import { Layout, Typography } from 'antd'
// Components
import SuspenseFallback from '../components/SuspenseFallback'
// Styles
import './style.scss'

const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header>
        <Typography.Title
          className='app-header__text'
          level={3}
        >
          Homeward
        </Typography.Title>
      </Layout.Header>

      <Layout.Content>
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      </Layout.Content>

      <Layout.Footer>
        <p>Footer</p>
      </Layout.Footer>
    </Layout>
  )
}

export default MainLayout
