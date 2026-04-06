import { create } from 'zustand'
import { persist } from 'zustand/middleware'
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8) }

export type PropertyType = 'residential' | 'commercial' | 'industrial'
export type PropertyStatus = 'available' | 'under_offer' | 'sold'
export interface Property { id: string; address: string; city: string; type: PropertyType; price: number; sqft: number; score: number; status: PropertyStatus; listDate: string; bedrooms?: number; description: string }
export interface Alert { id: string; propertyId: string; type: string; message: string; read: boolean; date: string }

const DEMO: Property[] = [
  { id: '1', address: '42 Tech Park Drive', city: 'Austin, TX', type: 'commercial', price: 2800000, sqft: 15000, score: 92, status: 'available', listDate: '2026-03-28', description: 'Grade A office space in tech corridor' },
  { id: '2', address: '18 Maple Avenue', city: 'Portland, OR', type: 'residential', price: 650000, sqft: 2400, score: 87, status: 'available', listDate: '2026-04-01', bedrooms: 4, description: 'Renovated craftsman with ADU potential' },
  { id: '3', address: '1200 Industrial Blvd', city: 'Dallas, TX', type: 'industrial', price: 4200000, sqft: 45000, score: 78, status: 'under_offer', listDate: '2026-03-15', description: 'Distribution warehouse near I-35' },
  { id: '4', address: '5 Lakeview Terrace', city: 'Chicago, IL', type: 'residential', price: 890000, sqft: 3100, score: 94, status: 'available', listDate: '2026-04-03', bedrooms: 5, description: 'Waterfront property, recently listed' },
  { id: '5', address: '300 Commerce St', city: 'Denver, CO', type: 'commercial', price: 1500000, sqft: 8000, score: 71, status: 'sold', listDate: '2026-02-20', description: 'Retail space in historic district' },
]
const DEMO_ALERTS: Alert[] = [
  { id: '1', propertyId: '4', type: 'new_listing', message: 'High-score property listed: 5 Lakeview Terrace (94/100)', read: false, date: '2026-04-03' },
  { id: '2', propertyId: '1', type: 'price_drop', message: 'Price reduced on 42 Tech Park Drive by $200K', read: false, date: '2026-04-02' },
  { id: '3', propertyId: '3', type: 'status_change', message: '1200 Industrial Blvd is now under offer', read: true, date: '2026-04-01' },
]

interface AppState {
  properties: Property[]; alerts: Alert[]
  addProperty: (p: Omit<Property, 'id' | 'score'>) => void
  updateProperty: (id: string, updates: Partial<Property>) => void
  deleteProperty: (id: string) => void
  markAlertRead: (id: string) => void
}

export const useAppStore = create<AppState>()(persist((set) => ({
  properties: DEMO, alerts: DEMO_ALERTS,
  addProperty: (p) => set(s => ({ properties: [...s.properties, { ...p, id: uid(), score: 50 + Math.floor(Math.random() * 45) }] })),
  updateProperty: (id, u) => set(s => ({ properties: s.properties.map(p => p.id === id ? { ...p, ...u } : p) })),
  deleteProperty: (id) => set(s => ({ properties: s.properties.filter(p => p.id !== id) })),
  markAlertRead: (id) => set(s => ({ alerts: s.alerts.map(a => a.id === id ? { ...a, read: true } : a) })),
}), { name: 'propscore-store' }))
