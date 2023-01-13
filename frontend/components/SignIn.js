import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { BaseGridSerializingSession } from "ag-grid-community";

export default function SignIn() {
  const notificationMethods = [
    { id: "student", title: "Student" },
    { id: "coordinator", title: "Coordinator" },
    { id: "admin", title: "Admin" },
  ];
  const { login, error } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat ">
      <Nav />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur py-8 px-4 shadow sm:rounded-lg sm:px-10 g-blur-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="mx-auto text-center ">
                <Image
                  className="mx-auto"
                  width={100}
                  height={100}
                  alt="NIT Patna"
                  src="/images/logo.png"
                />
              </div>

              <h2 className="mt-6 text-center text-2xl font-extrabold font-serif text-white">
                Training and Placement Cell
              </h2>
              <h2 className="text-center font-extrabold text-3xl uppercase text-black">
                NIT Patna
              </h2>
              <p className="mt-2 text-center text-sm text-stone-100 ">
                Login Or{" "}
                <Link href="/account/studentRegistration">
                  <a className="font-medium text-yellow-500 hover:text-orange-500 font-bold">
                    New Student Registration
                  </a>
                </Link>
              </p>
            </div>

            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                  <div
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-2 flex items-center leading-5 cursor-pointer  text-orange-600 px-2 py-1 rounded-md text-sm"
                  >
                    {passwordShown ? "Hide" : "Show"}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/account/forgotPassword">
                    <a className="font-medium text-yellow-600 hover:text-orange-500">
                      Forgot your password?
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
