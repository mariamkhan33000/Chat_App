import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const SignUp = () => {
  const [authUser, setAuthUser] = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // watch the password and confirm password fields
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Password do not match";
  };
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo)
    await axios
      .post("http://localhost:3000/api/v1/users/signup", userInfo)
      .then((response) => {
        if(response.data) {
            alert("SignUp Successful");
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
  };
  return (
    <div className="bg-gray-800 h-screen text-white flex items-center justify-center">
      <div className="w-[500px] border rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div className="flex flex-col text-center">
              <h1 className="text-3xl">
                Text <span className="text-green-400">App</span>
              </h1>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Signup</h1>
              <div className="py-4">
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                  className="bg-transparent border w-full px-2 py-4 rounded-xl "
                  placeholder="fullname . . . "
                />
                {errors.fullname && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="py-4">
                <input
                  type="text"
                  {...register("email", { required: true })}
                  className="bg-transparent border w-full px-2 py-4 rounded-xl "
                  placeholder="Email . . . ."
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="py-4">
                <input
                  type="text"
                  {...register("password", { required: true })}
                  className="bg-transparent border w-full px-2 py-4 rounded-xl "
                  placeholder="password . .  . . "
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="py-4">
                <input
                  type="text"
                  {...register("confirmPassword", {
                    required: true,
                    validate: validatePasswordMatch,
                  })}
                  className="bg-transparent border w-full px-2 py-4 rounded-xl "
                  placeholder="confirmPassword . . . . . "
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className=" flex mt-4 items-center space-x-3 justify-around">
                <h2 className="text-xl">Have an account?</h2>
                <h2 className="text-blue-400 underline cursor-pointer hover:scale-125">
                  Login
                </h2>
                <button className="btn btn-accent text-white bg-green-500 text-xl cursor-pointer hover:bg-green-800">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
