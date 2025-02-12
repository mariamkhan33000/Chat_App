import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { useAuth } from "./context/AuthProvider"
import Left from "./Home/Left/Left"
import Right from "./Home/Right/Right"
import {Routes, Route, Navigate} from 'react-router-dom'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
    <Routes>
      <Route 
      path="/" element = { authUser ? (<div className="flex text-gray-300 h-screen">
        <Left/>
        <Right/>
      </div>) : (<Navigate to={"/login"} />)}
      />
      <Route path="/login" element = {authUser ? <Navigate to="/"/> : <Login/>}/>
      <Route path="/signup" element = {authUser ? <Navigate to="/"/> : <SignUp/>}/>
    </Routes>
    </>
  )
}

export default App