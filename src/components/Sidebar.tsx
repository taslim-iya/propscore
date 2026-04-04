import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Building2, TrendingUp, Bell, BarChart3, Home } from 'lucide-react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/properties', label: 'Properties', icon: Building2 },
  { to: '/opportunities', label: 'Opportunities', icon: TrendingUp },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
]

export default function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-white/10 p-4 flex flex-col" style={{ background: '#080B15' }}>
      <Link to="/" className="flex items-center gap-2 text-[#10B981] font-bold text-xl mb-8 px-2">
        <Home size={22} /> PropScore
      </Link>
      <nav className="space-y-1 flex-1">
        {nav.map(n => (
          <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${pathname === n.to ? 'bg-[#10B981]/10 text-[#10B981]' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}>
            <n.icon size={18} /> {n.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
