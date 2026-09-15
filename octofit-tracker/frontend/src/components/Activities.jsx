import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('activities').then(setActivities).catch((caughtError) => setError(caughtError.message))
  }, [])

  return (
    <ResourceView title="Activities" error={error}>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead><tr><th>Type</th><th>Duration</th><th>Calories</th><th>Date</th></tr></thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id || `${activity.type}-${activity.date}`}>
                <td>{activity.type}</td><td>{activity.duration} min</td><td>{activity.calories ?? '-'}</td>
                <td>{activity.date ? new Date(activity.date).toLocaleDateString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!activities.length && !error && <p className="text-secondary">No activities recorded yet.</p>}
      </div>
    </ResourceView>
  )
}

function ResourceView({ title, error, children }) {
  return <section><div className="d-flex justify-content-between align-items-center mb-3"><h1 className="h2 mb-0">{title}</h1><span className="badge text-bg-light">Live data</span></div>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export default Activities
