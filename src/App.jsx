import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const platform = window.electron?.platform ?? 'browser'

  return (
    <main>
      <h1>Gas Station Portal</h1>
      <p>Running in: {platform}</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </main>
  )
}
