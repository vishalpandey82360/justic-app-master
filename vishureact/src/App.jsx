import './App.css'
import Navbar from './components/Navbar'

const stats = [
  { label: 'Revenue', value: '$24,500', tone: 'primary' },
  { label: 'Orders', value: '1,284', tone: 'secondary' },
  { label: 'Visitors', value: '8,940', tone: 'accent' },
]

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">VishuDash</div>
        <nav className="sidebar-nav">
          <a href="#">Overview</a>
          <a href="#">Analytics</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <Navbar />

        <section className="dashboard-content">
          <div className="stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className={`stat-card ${stat.tone}`}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>

          <div className="content-panel">
            <h2>Performance Summary</h2>
            <p>
              This dashboard area is now larger and designed to hold charts,
              summaries, and activity lists.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

