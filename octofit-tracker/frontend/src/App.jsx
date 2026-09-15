import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-5">
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">Octofit</Link>
        <nav className="nav nav-pills" aria-label="Primary navigation">
          {[
            ['Activities', '/activities'], ['Leaderboard', '/leaderboard'], ['Teams', '/teams'],
            ['Users', '/users'], ['Workouts', '/workouts'],
          ].map(([label, path]) => <NavLink className="nav-link" to={path} key={path}>{label}</NavLink>)}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return <section className="py-5"><p className="text-uppercase small fw-semibold text-secondary mb-2">Fitness, together</p><h1 className="display-4 fw-bold">Move with purpose.</h1><p className="lead text-secondary mb-4">Track activity, build teams, and turn consistent effort into momentum.</p><Link className="btn btn-dark" to="/workouts">Browse workouts</Link></section>
}

export default App
