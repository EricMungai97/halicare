"use client";

import { signIn, useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

interface IFormInput {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { data:session, status } = useSession();
  console.log(session)
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const result = await signIn("facility", {
      redirect: false,
      username: data.username,
      password: data.password,
    
    });

    console.log(result)

    if (result?.error) {
        toast.error('Invalid credentials.');
      } else {
        router.push('/loginfacility/facility');
      }
    };
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              {...register("username")}
              className="mt-1 p-2 w-full rounded-md border"
              
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 p-2 w-full rounded-md border"
              
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
