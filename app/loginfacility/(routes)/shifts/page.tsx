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
        <div>
            <h1>Welcome, {session?.user?.name}</h1>
            <h2>Fill in the form to create shift</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='block'>
                <span>StartTime</span>
                <input
                  {...register("startTime", { required: true })}
                  type="text"
                  className=''
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span>EndTime</span>
                <input
                  {...register("endTime", { required: true })}
                  type="text"
                  className=''
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span>Profession</span>
                <input
                  {...register("profession", { required: true })}
                  type="text"
                  className=''
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span>Date</span>
                <input
                  {...register("date", { required: true })}
                  type='datetime-local'
                  className=''
                />
              </label>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
            Submit
          </button>
          </form>
        </div>
    </div>
  )
}
