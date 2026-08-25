import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Layout from './pages/Layout'
import SalesOverview from './pages/SalesOverview'
import SalesPipeline from './pages/SalesPipeline'
import Leads from './pages/Leads'
import AddLeader from './pages/AddLeader'
import Activities from './pages/Activities'
import Settings from './pages/Settings'

function App() {
  return (
     <>
    <Routes>
      <Route path='/login' element={<LoginLanding />} />

      <Route element={<Layout />}>
        <Route path='/salesoverview' element={<SalesOverview />} />
        <Route path='/addleader' element={< AddLeader/>} />
        <Route path='/salespipeline' element={<SalesPipeline />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
     </>
  )
}

export default App