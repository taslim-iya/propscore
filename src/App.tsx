import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Properties from '@/pages/Properties'
import Opportunities from '@/pages/Opportunities'
import Alerts from '@/pages/Alerts'
import Analytics from '@/pages/Analytics'

export default function App() {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  return (
    <div className="min-h-screen" style={{ background: '#0C0F1A' }}>
      {isLanding ? <Routes><Route path="/" element={<Home />} /></Routes> : (
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-[240px] p-6 min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      )}
    </div>
  )
}
