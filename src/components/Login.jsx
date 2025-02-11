import { useForm } from "react-hook-form"
const Login = () => {
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => console.log(data)
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
                        {...register("Email", { required: true })} 
                         className="bg-transparent border w-full px-2 py-4 rounded-xl " placeholder="Email . . . ." />
                         {errors.Email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="py-4">
                        <input
                         type="text"
                         {...register("Password", { required: true })} 
                          className="bg-transparent border w-full px-2 py-4 rounded-xl " placeholder="password . .  . . " />
                          {errors.Password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className=" flex mt-4 items-center space-x-3 justify-around">
                        <h2 className="text-xl">New User?</h2>
                        <h2 className="text-blue-400 underline cursor-pointer hover:scale-125">Signup</h2>
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