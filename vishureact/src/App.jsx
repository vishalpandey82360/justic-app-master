import './App.css'
import Navbar from './components/Navbar'

const services = [
  { title: 'Reservation', icon: '📅', description: 'Book your salon time easily.', tone: 'reservation' },
  { title: 'Hair Style Images', icon: '💇‍♀️', description: 'Explore modern hairstyle ideas.', tone: 'styles' },
  { title: 'Retro Songs', icon: '🎵', description: 'Enjoy classic tunes while you relax.', tone: 'music' },
  { title: 'Salon Staffs', icon: '👩‍💼', description: 'Meet our professional team members.', tone: 'staff' },
  { title: 'Skin Care', icon: '🌿', description: 'Treat your skin with gentle care.', tone: 'skincare' },
  { title: 'Hair Care', icon: '✨', description: 'Restore shine and healthy hair.', tone: 'haircare' },
]

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">VishuSalon</div>
        <nav className="sidebar-nav">
          <a href="#">Home</a>
          <a href="#">Appointments</a>
          <a href="#">Gallery</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <Navbar />

        <section className="dashboard-content">
          <header className="welcome-header">
            <div>
              <p className="eyebrow">Beauty Studio</p>
              <h1>Salon Main Screen</h1>
            </div>
            <button className="primary-btn">Book Now</button>
          </header>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className={`service-card ${service.tone}`}>
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

