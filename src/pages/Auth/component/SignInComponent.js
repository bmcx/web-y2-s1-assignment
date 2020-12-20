const SignInForm = (props) => (
  <div className="bg-gray-50 rounded-lg w-96 shadow-lg p-4 z-20">
    <h2 className="text-2xl font-black text-gray-700 text-center">Harvest</h2>

    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
    <button
      href="#"
      className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full transition-all ease-out duration-400"
    >
      <div className="px-4 py-3 text-center text-gray-600 font-bold w-full">
        <svg className="h-6 w-6 absolute" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>
        Continue with Google
      </div>
    </button>
    <div className="mt-4 flex items-center justify-between">
      <span className="border-b w-1/5 lg:w-1/4"></span>

      <span className="text-xs text-center text-gray-500 uppercase">
        or sign in with email
      </span>

      <span className="border-b w-1/5 lg:w-1/4"></span>
    </div>

    <div className="mt-4">
      <label
        className="block text-gray-600 text-sm font-medium mb-2"
        for="LoggingEmailAddress"
      >
        Email Address
      </label>
      <input
        id="LoggingEmailAddress"
        className="bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-300 transition-all ease-out duration-300"
        type="email"
      />
    </div>

    <div className="mt-4">
      <div className="flex justify-between">
        <label
          className="block text-gray-600 text-sm font-medium mb-2"
          for="loggingPassword"
        >
          Password
        </label>
        <button
          href="#"
          className="text-xs text-gray-500 hover:underline focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>

      <input
        id="loggingPassword"
        className="bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-300 transition-all ease-out duration-300"
        type="password"
      />
    </div>

    <div className="mt-8">
      <button className="bg-gray-700 text-white uppercase font-bold py-2 px-4 w-full rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ease-out duration-300">
        Sign in
      </button>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <span className="border-b w-1/5 md:w-1/4"></span>

      <button
        href="#"
        className="text-xs text-gray-500 uppercase hover:underline focus:outline-none"
      >
        or sign up
      </button>

      <span className="border-b w-1/5 md:w-1/4"></span>
    </div>
  </div>
);
export default SignInForm;
