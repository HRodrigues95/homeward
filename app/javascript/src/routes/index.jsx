import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../layout"
import Home from "../pages/Home"

const Village = React.lazy(() => import("../pages/Village"))

const ClientRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="villages" element={<Village />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default ClientRoutes
