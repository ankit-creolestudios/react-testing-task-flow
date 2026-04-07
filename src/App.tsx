import GetByMethods from './components/testing/GetByMethods';
import QueryByMethods from './components/testing/QueryByMethods';
import FindByMethods from './components/testing/FindByMethods';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background p-8 max-w-2xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-amber-500">TaskFlow Pro</h1>
        <p className="text-muted-foreground mt-2">Testing Demonstration Components</p>
      </header>

      <main className="space-y-6">
        <GetByMethods />
        <QueryByMethods />
        <FindByMethods />
      </main>
    </div>
  )
}

export default App
