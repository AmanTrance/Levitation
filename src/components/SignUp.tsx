import { useNavigate } from "react-router-dom";
import axios from "axios";

type UserDetails = {
  name: string,
  email: string,
  password: string
}

function SignUp() {
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate("/")
    }

    const handlePassword = (e: any) => {
        const element: HTMLInputElement | null = document.getElementById("password") as HTMLInputElement | null;
        if (e.target.checked === true) {
            if (element !== null) {
              element.type = "text";
            }
        } else {
            if (element !== null) {
              element.type = "password";
            }
          }
        }

    const handleSignUp = async (e: any) => {
      e.preventDefault();
      const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
      const formData: FormData = new FormData(form);
      const user: UserDetails = Object.fromEntries(formData) as UserDetails;
      const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/auth/signup', JSON.stringify(user), {headers:{
        "Content-Type": "application/json"
      }});
      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Server is not responding");
      }
    }   
    
  return (
    <div className="dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center h-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create your account
                </h1>
                <form id="form" className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="name" name="name" id="name" placeholder="Enter your name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" pattern="^[a-z\.0-9]+@[a-z0-9]+\.[a-z]{2,}$" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your email" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="hidden" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer" onChange={handlePassword}/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="hidden" className="text-gray-500 dark:text-gray-300" >Show Password</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-indigo-400 outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in">Sign up</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?<br/>
                        <a className="font-medium text-primary-600 text-blue-300 hover:underline hover:cursor-pointer dark:text-primary-500" onClick={handleSignin}>
                          Sign in
                        </a>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
    )
}

export default SignUp