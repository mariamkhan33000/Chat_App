import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { useAuth } from "./context/AuthProvider"
import Left from "./Home/Left/Left"
import Right from "./Home/Right/Right"

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <div className="flex text-gray-300 h-screen">
      <Left/>
      <Right/>
    </div>
    //  <SignUp/>
    // <Login/>
  )
}

export default App