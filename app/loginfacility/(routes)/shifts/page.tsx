"use client";

import StaffNavbar from '@/components/ui/2navbar'
import FacilityNavbar from '@/components/ui/fnavbar'
import axios from 'axios';
import React from 'react'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from "react-hook-form";
import { getServerSession } from 'next-auth';
import toast from 'react-hot-toast';

interface FacilityFormInput {
    startTime: String;
    endTime: String;
    profession: String;
    date: String;
}

export default function Facility() {
  const { register, handleSubmit, reset } = useForm<FacilityFormInput>();
  const onSubmit: SubmitHandler<FacilityFormInput> = async (data: FacilityFormInput) => {
    console.log(data);

    try {
      const response = await axios.post('/api/Shift', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        });
      if (response.status === 200) {
        toast.success('Shift created successfully');
        console.log('Shift created successfully');
        reset();
      }
    } catch (error) {
      toast.error('Failed to create shift.');
      console.log('Failed to create shift:', error);
      
    }
  };
  const { data:session, status } = useSession();
  console.log(session)
  return (
    <div>
        <FacilityNavbar />
        <div className='bg-sky-900 py-8 w-full text-center font-extrabold text-white text-xl'>
            <h1>Welcome, {session?.user?.name}</h1>
        </div>
        <div className="text-sky-900 text-3xl font-bold pb-5">
            <h2>Fill in the form to create shift</h2>
          
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block'>
                <span className="font-bold text-gray-400">StartTime</span>
                <input
                  {...register("startTime", { required: true })}
                  type="text"
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span className="font-bold text-gray-400">EndTime</span>
                <input
                  {...register("endTime", { required: true })}
                  type="text"
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span className="font-bold text-gray-400">Profession</span>
                <input
                  {...register("profession", { required: true })}
                  type="text"
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span className="font-bold text-gray-400">Date</span>
                <input
                  {...register("date", { required: true })}
                  type='datetime-local'
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div className="flex justify-center items-center col-span-2">

            <button type="submit" className="border p-2 bg-sky-900 text-white rounded-xl">
            Submit
          </button>
            </div>
          </form>
        </div>
    </div>
  )
}
