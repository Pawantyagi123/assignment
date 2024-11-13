import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D')] bg-no-repeat bg-cover w-auto bg-center">
  <div className="bg-transparent rounded-lg shadow-lg w-full max-w-md p-8 backdrop-blur-lg">
    <h1 className="text-3xl font-semibold text-center text-black mb-6">Sign Up</h1>
    <form>
      <div className="mb-4">
        <Label htmlFor="name" className="block text-gray-700 font-medium mb-1">Username</Label>
        <Input type="text" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <Label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <Label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</Label>
        <Input type="text" id="phone" placeholder="Enter your number" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <Label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</Label>
        <Input type="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-6">
        <Label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-1">Confirm Password</Label>
        <Input type="password" id="confirm-password" placeholder="Confirm password" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"/>
      </div>
      <Button className="w-full py-2 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">Submit</Button>
    </form>
    <div className='text-center pt-3'>
    <p>Already have an account <Link to={"/login"} className="text-blue-500 hover:underline">login</Link></p>
  </div>
  </div>
</div>

  )
}
