import './App.css'
import Navbar from './components/Navbar'

const services = [
  { title: 'Reservation', icon: '📅', description: 'Book your salon time quickly and easily.', tone: 'reservation' },
  { title: 'Hair Style Images', icon: '💇‍♀️', description: 'Browse fresh looks and trending haircuts.', tone: 'styles' },
  { title: 'Retro Songs', icon: '🎵', description: 'Relax with classic tunes in a stylish vibe.', tone: 'music' },
  { title: 'Salon Staffs', icon: '👩‍💼', description: 'Meet the professionals behind your glow.', tone: 'staff' },
  { title: 'Skin Care', icon: '🌿', description: 'Refresh and restore your skin naturally.', tone: 'skincare' },
  { title: 'Hair Care', icon: '✨', description: 'Nourish your hair for shine and strength.', tone: 'haircare' },
]

const highlights = [
  { value: '1.2k+', label: 'Happy Clients' },
  { value: '20+', label: 'Expert Stylists' },
  { value: '4.9', label: 'Client Rating' },
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
              <p className="eyebrow">Luxury beauty studio</p>
              <h1>Elevate your look with premium salon care</h1>
            </div>
            <button className="primary-btn">Book Now</button>
          </header>

          <div className="hero-panel">
            <div className="hero-copy">
              <p>Tailored beauty, wellness, and hair expertise for every moment.</p>
              <div className="hero-actions">
                <button className="primary-btn">Book Appointment</button>
                <button className="secondary-btn">View Gallery</button>
              </div>
            </div>

            <div className="metric-row">
              {highlights.map((item) => (
                <div key={item.label} className="metric-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

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

