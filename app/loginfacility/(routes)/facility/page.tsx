"use client";

import StaffNavbar from '@/components/ui/2navbar'
import FacilityNavbar from '@/components/ui/fnavbar'
import axios from 'axios';
import React from 'react'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from "react-hook-form";
import { getServerSession } from 'next-auth';

interface FacilityFormInput {
    name: string;
    location: string;
    overview: string;
}

export default function Facility() {
  const { register, handleSubmit, reset } = useForm<FacilityFormInput>();
  const onSubmit: SubmitHandler<FacilityFormInput> = async (data: FacilityFormInput) => {
    console.log(data);

    try {
      const response = await axios.post('/api/Facility', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        });
      if (response.status === 200) {
        console.log('Facility created successfully');
        reset();
      }
    } catch (error) {
      console.log('Failed to create Facility:', error);
      
    }
  };
  const { data:session, status } = useSession();
  console.log(session)
  return (
    <div>
        <FacilityNavbar />
        <div>
            <h1>Welcome, {session?.user?.name}</h1>
            <h2>Fill in the form below to get started</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className='block'>
                <span>Facility Name</span>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className=''
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span>Facility Location</span>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  className=''
                />
              </label>
            </div>
            <div>
            <label className='block'>
                <span>Facility Overview</span>
                <textarea
                  {...register("overview", { required: true })}
                  rows={10}
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
