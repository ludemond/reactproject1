import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const accentColor = `hsl(${now.getSeconds() * 6}, 90%, 55%)`

  return (
    <main className="app-shell" style={{ '--accent-color': accentColor }}>
      <div className="clock-card">
        <div className="clock-header">
          <span className="clock-badge">Live</span>
          <h1>Color Clock</h1>
        </div>
        <p className="clock-date">{format(now, 'EEEE, MMMM do yyyy')}</p>
        <p className="clock-time">{format(now, 'hh:mm:ss a')}</p>
        <p className="clock-zone">{format(now, 'OOOO')}</p>
        <p className="clock-note">Built with React, Vite, and date-fns</p>
      </div>
    </main>
  )
}

export default App
