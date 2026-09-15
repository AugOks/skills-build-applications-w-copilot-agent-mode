import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('workouts').then(setWorkouts).catch((caughtError) => setError(caughtError.message))
  }, [])

  return (
    <ResourceView title="Workouts" error={error}>
      <div className="row g-3">{workouts.map((workout) => <article className="col-md-6 col-lg-4" key={workout._id || workout.name}><div className="border rounded p-3 h-100"><h2 className="h5">{workout.name}</h2><p className="mb-1">{workout.type} · {workout.duration} min</p><p className="text-secondary mb-2">{workout.focus?.join(', ') || 'General fitness'}</p><span className="badge text-bg-light">{workout.difficulty}</span></div></article>)}</div>
      {!workouts.length && !error && <p className="text-secondary">No workouts available yet.</p>}
    </ResourceView>
  )
}

function ResourceView({ title, error, children }) {
  return <section><h1 className="h2 mb-3">{title}</h1>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export default Workouts
