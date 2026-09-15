import { useEffect, useState } from 'react'
import { fetchItems } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchItems('users').then(setUsers).catch((caughtError) => setError(caughtError.message))
  }, [])

  return (
    <ResourceView title="Users" error={error}>
      <div className="table-responsive"><table className="table table-hover"><thead><tr><th>Name</th><th>Email</th><th>Activity level</th><th>Team</th></tr></thead><tbody>{users.map((user) => <tr key={user._id || user.email}><td>{user.name}</td><td>{user.email}</td><td>{user.activityLevel || '-'}</td><td>{user.team || '-'}</td></tr>)}</tbody></table></div>
      {!users.length && <p className="text-secondary">No users registered yet.</p>}
    </ResourceView>
  )
}

function ResourceView({ title, error, children }) {
  return <section><h1 className="h2 mb-3">{title}</h1>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export default Users
