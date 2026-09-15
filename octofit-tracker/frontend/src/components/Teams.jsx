import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('teams').then(setTeams).catch((caughtError) => setError(caughtError.message))
  }, [])

  return (
    <ResourceView title="Teams" error={error}>
      <div className="row g-3">
        {teams.map((team) => <article className="col-md-6" key={team._id || team.name}><div className="border rounded p-3 h-100"><h2 className="h5">{team.name}</h2><p className="text-secondary mb-2">{team.description || 'No description provided.'}</p><span className="badge text-bg-light">{team.members ?? 0} members</span></div></article>)}
        {!teams.length && <p className="text-secondary">No teams created yet.</p>}
      </div>
    </ResourceView>
  )
}

function ResourceView({ title, error, children }) {
  return <section><h1 className="h2 mb-3">{title}</h1>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export default Teams
