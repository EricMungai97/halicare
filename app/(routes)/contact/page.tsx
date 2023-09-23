"use client";

import React from 'react'
import axios from 'axios';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button"


interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    company: string;
    help_needed: string;
  }

export default function ContactPage() {
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async ( data) => {
        console.log(data);

        try {
         const response = await axios.post('api/Mail', JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
            });
          if (response.status === 200) {
            console.log('Email sent successfully');
            reset();
          }
        } catch (error) {
          console.log('Failed to send email:', error);
          
        }
      };
  return (
    <div className='flex flex-col items-center bg-gray-100 w-full'>
        <div className='bg-sky-900 py-8 w-full text-center'>
            <p className='font-extrabold text-white text-xl'>CONTACT HALICARE FOR YOUR STAFFING NEEDS</p>
        </div>
            <div className='w-full max-w-screen-lg px-5 py-10 m-auto'>
                <p className='text-sky-900 text-3xl font-bold pb-5'>Fill out the form below to get in touch</p>
                        <form className='flex flex-wrap' onSubmit={handleSubmit(onSubmit)}>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='font-bold text-gray-400'>First Name</span>
                                    <input
                                        {...register("firstName", { required: true })}
                                        type="text"
                                        className='font-bold border border-black mt-1 block w-full py-4'
                                        
                                    />
                                </label>
                            </div>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='font-bold text-gray-400'>Last Name</span>
                                    <input
                                        {...register("lastName", { required: true })}
                                        type="text"
                                        className='font-bold border border-black mt-1 block w-full py-4'
                                        
                                    />
                                </label>
                            </div>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='text-gray-400 font-bold'>Email</span>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        className='border border-black mt-1 block w-full py-4'
                                        
                                    />
                                </label>
                            </div>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='text-gray-400 font-bold'>Phone</span>
                                    <input
                                        {...register("phone", { required: true })}
                                        className='border border-black mt-1 block w-full py-4 '
                                        type="text"
                                        
                                    />
                                </label>
                            </div>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='text-gray-400 font-bold'>Company</span>
                                    <input
                                        {...register("company", { required: true })}
                                        className='border border-black mt-1 block w-full py-4'
                                        type="text"
                                        
                                    />
                                </label>
                            </div>
                            <div className='w-full md:w-1/2 p-2'>
                                <label className='block'>
                                    <span className='text-gray-400 font-bold'>Message</span>
                                    <textarea
                                        {...register("help_needed", { required: true })}
                                        className='border border-black mt-1 block w-full '
                                        rows={10}
                                        
                                    />
                                </label>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button className='bg-sky-900 text-white font-bold text-xl mt-5 mb-5' type='submit'>Submit</Button>
                            </div>
                            
                        </form>
                   
                </div>
              
    </div>
  )
}
