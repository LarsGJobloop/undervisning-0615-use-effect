import { ArticleFeed } from './components/ArticleFeed/ArticleFeed'

import './App.css'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>React Use Effect</h1>
        <h2>-Fetching Data</h2>
      </header>

      <main>
        <ArticleFeed />
      </main>

      <footer>
        <h2>&copy; Lars Gunnar</h2>
      </footer>
    </div>
  )
}

export default App
