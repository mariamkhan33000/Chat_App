import { useForm } from "react-hook-form"
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  const [authUser, setAuthUser] = useAuth()
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          const onSubmit = async (data) => {
            const userInfo = {
              email: data.email,
              password: data.password,
            };

          await axios
          .post("http://localhost:3000/api/v1/users/login", userInfo)
          .then((response) => {
            if(response.data) {
                alert("Login Successful");
            }
           localStorage.setItem("ChatApp", JSON.stringify(response.data))
           setAuthUser(response.data)
          })
          .catch((error) => {
            console.log(error);
            if(error.response) {
                alert("Error: "+error.response.data.error)
            }
          });
        }
  return (
    <div className="bg-gray-800 h-screen text-white flex items-center justify-center">
        <div className="w-[500px]  border rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4">
                <div className="flex flex-col text-center">
                    <h1 className="text-3xl">Text <span className="text-green-400">App</span></h1>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Login</h1>
                    
                    <div className="py-4">
                        <input 
                        type="text"
                        {...register("email", { required: true })} 
                         className="bg-transparent border w-full px-2 py-4 rounded-xl " placeholder="Email . . . ." />
                         {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="py-4">
                        <input
                         type="text"
                         {...register("password", { required: true })} 
                          className="bg-transparent border w-full px-2 py-4 rounded-xl " placeholder="password . .  . . " />
                          {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className=" flex mt-4 items-center space-x-3 justify-around">
                        <h2 className="text-xl">New User?</h2>
                        <Link to="/signup" className="text-blue-400 underline cursor-pointer hover:scale-125">Signup</Link>
                        <button className="btn btn-accent text-white bg-green-500 text-xl cursor-pointer hover:bg-green-800">Login</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login