const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function apiUrl(resource) {
  return `${apiBaseUrl}/api/${resource}/`
}

export function getItems(payload) {
  if (Array.isArray(payload)) return payload

  for (const key of ['data', 'results', 'items', 'docs']) {
    if (Array.isArray(payload?.[key])) return payload[key]
    if (payload?.[key] && typeof payload[key] === 'object') {
      const nestedItems = getItems(payload[key])
      if (nestedItems.length) return nestedItems
    }
  }

  return []
}

export async function fetchItems(resource) {
  const response = await fetch(apiUrl(resource))
  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`)
  }

  return getItems(await response.json())
}
