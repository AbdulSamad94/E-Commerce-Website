import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const [changingState, setChangingState] = useState("Create account?");

const onSubmit =  async (e) => {
e.preventDefault()
}

  const toggling = () =>{
    if(currentState === "Login"){
      setCurrentState("Sign up")
      setChangingState("Login here!")
    }
    else {
      setCurrentState("Login")
      setChangingState("Create account?")
    }
  }
  const settingName = () => {
    if (currentState === "Login") {
      return "Sign in";
    } else {
      return "Sign up";
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-3 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="praata text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>
      {currentState === "Sign up" && (
        <input
          required
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
        />
      )}
      <input
        required
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        type="email"
      />
      <input
        required
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        type="password"
      />
      <div className="flex justify-between text-sm w-full">
        <p className="cursor-pointer">Forget password?</p>
        <p
          onClick={toggling}
          className="cursor-pointer"
        >
          {changingState}
        </p>
      </div>
      <button  className="bg-black text-white tracking-tight px-7 mt-5 py-2 ">
        {settingName()}
      </button>
    </form>
  );
}

export default Login;
