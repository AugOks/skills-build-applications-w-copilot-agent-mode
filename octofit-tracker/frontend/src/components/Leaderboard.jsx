import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('leaderboard').then(setEntries).catch((caughtError) => setError(caughtError.message))
  }, [])

  return (
    <ResourceView title="Leaderboard" error={error}>
      <div className="list-group">
        {entries.map((entry) => <div className="list-group-item d-flex justify-content-between" key={entry._id || entry.userId}><span><strong>#{entry.rank}</strong> {entry.name}</span><span>{entry.points} points</span></div>)}
        {!entries.length && <p className="text-secondary">No leaderboard entries yet.</p>}
      </div>
    </ResourceView>
  )
}

function ResourceView({ title, error, children }) {
  return <section><h1 className="h2 mb-3">{title}</h1>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export default Leaderboard
