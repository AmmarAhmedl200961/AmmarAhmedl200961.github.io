import React from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import RecentWork from './components/RecentWork'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Featured />
      <RecentWork />
      <Footer />
    </div>
  )
}

export default App
