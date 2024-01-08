import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContexProvider'
// import UserContext from './context/UserContext'

function App() {

  return (
    <UserContextProvider>
      <h1> React with Chai and Share is important </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
