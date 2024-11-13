import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [data,setdata] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const navigateHome = () =>{
    navigate("/")
  }

  const handleInput = (e) =>{
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div className= "flex justify-center items-center h-screen backdrop-blur-xl bg-[url('https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D')] bg-no-repeat bg-cover w-auto bg-center">
  <div className="bg-transparent rounded-lg shadow-lg w-full p-6 h-auto backdrop-blur-md max-w-md">
    <h1 className="text-2xl font-semibold text-center text-black mb-6">Login</h1>
    <form>
      <div className="mb-4 flex flex-col gap-2">
        <Label htmlFor="email" className="block text-white mb-1 text-lg">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" className="bg-gray-50 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-none" value={data.email} onChange={handleInput}/>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <Label htmlFor="password" className="block text-white text-lg mb-1">Password</Label>
        <Input type="password" id="password" placeholder="Enter your password" className="bg-gray-50 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-none" value={data.password} onChange={handleInput}/>
      </div>
      <Button className="w-full py-2  text-white font-semibold rounded-lg transition duration-200" onClick={navigateHome}>Submit</Button>
    </form>
    <div className="flex justify-between items-center pt-4">
    <a href="#" className="underline text-black hover:text-white ">ForgetPassword?</a>
    <Link to={"/register"} className="text-black underline hover:text-white">No account? signup</Link>
    </div>

<div className="mt-8">
  <p className="text-sm">By clicking Login or signing in through a third party you accept the LambdaTest Terms of Service and acknowledge the Privacy Policy and Cookie Policy</p>
</div>
  </div>
</div>

  );
}
