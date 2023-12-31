"use client";

import StaffNavbar from "@/components/ui/2navbar";
import FacilityNavbar from "@/components/ui/fnavbar";
import axios from "axios";
import React, { use } from "react";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";
import GukaAnimation from "@/components/ui/guka";
import GrandmaAnimation from "@/components/ui/grandma";
import LottieAnimation from "@/components/ui/LottieAnimation";
import GuksAnimation from "@/components/ui/guks";
import ShoshAnimation from "@/components/ui/shosho";

interface FacilityFormInput {
  name: string;
  location: string;
  overview: string;
}

export default function Facility() {
  const [facility, setFacility] = useState<FacilityFormInput | null>(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const { register, handleSubmit, reset } = useForm<FacilityFormInput>();

  useEffect(() => {
    const id = session?.user?.id;
    console.log(id);
    (async () => {
      try {
        await axios
          .post("/api/getFacility", { id })
          .then((response) => setFacility(response.data))
          .catch((error) => console.error("Error fetching facility", error));
      } catch (error) {
        console.error("Error fetching facility", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [session]);

  const onSubmit: SubmitHandler<FacilityFormInput> = async (
    data: FacilityFormInput
  ) => {
    console.log(data);

    try {
      const response = await axios.post("/api/Facility", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log("Facility created successfully");
        reset();
      }
    } catch (error) {
      console.log("Failed to create Facility:", error);
    }
  };

  if (loading) return <Loader />;
  if (facility) {
    return (
      <div>
           <FacilityNavbar />
      <div className="bg-sky-900 py-8 w-full text-center font-extrabold text-white text-xl">
        <h1>Welcome, {session?.user?.name}</h1>
      </div>
      <div className="grid lg:grid-cols-3 justify-center sm:max-sm:grid-cols-1 gap-1">
        <LottieAnimation />
        <GukaAnimation />
        <GrandmaAnimation />
        <GuksAnimation />
        <ShoshAnimation />

      </div>
      </div>
    );

  }

  if(!facility) {

    return (
      <div>
        <FacilityNavbar />
        <div className="bg-sky-900 py-8 w-full text-center font-extrabold text-white text-xl">
          <h1>Welcome, {session?.user?.name}</h1>
        </div>
        <div>
          <h2 className="text-sky-900 text-3xl font-bold pb-5">
            Fill in the form below to get started
          </h2>
        </div>
        <div>
          <form
            className="grid grid-cols-2 gap-3 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block">
                <span className="font-bold text-gray-400">Facility Name</span>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="font-bold text-gray-400">Facility Location</span>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="font-bold text-gray-400">Facility Overview</span>
                <textarea
                  {...register("overview", { required: true })}
                  rows={10}
                  className="font-bold border border-black mt-1 block w-full py-4"
                />
              </label>
            </div>
            <div className="flex justify-center items-center col-span-2">
              <button
                type="submit"
                className="border p-2 bg-sky-900 text-white rounded-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
