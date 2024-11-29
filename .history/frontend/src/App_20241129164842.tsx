import Dashboard from "./components/Dashboard"
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import { DataProvider } from "./context/DataContext"

function App() {

  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={
                <DataProvider>
                  <Dashboard />
                </DataProvider>
                } />
            </Routes>
          </Router>     
    </>
  )
}

export default App
