"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import StaffNavbar from "@/components/ui/2navbar";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/components/ui/loader";
import { HealthcareProfessional } from "@prisma/client";
import { useShift } from "@/hooks/use-shift";
import { useAvailable } from "@/hooks/use-available";

interface IFormInput {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  language: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

interface healthcareProfessional {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  language: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export default function Employee() {
  const shifts = useShift();
  const availableShifts = useAvailable();
  const [healthcareProfessional, setHealthcareProfessional] =
    useState<healthcareProfessional | null>(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session) {
      redirect("/login/staff");
    }
  }, [session]);

  useEffect(() => {
    const id = session?.user?.id;

    console.log(id);
    (async () => {
      try {
        await axios
          .post("/api/Professional", { id })
          .then((response) => setHealthcareProfessional(response.data))
          .catch((error) =>
            console.error("Error fetching healthcare professional", error)
          );
      } catch (error) {
        console.error("Error fetching healthcare professional", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [session, status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const res = await axios.post("/api/Profile", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) {
        toast.success("Profile created");
        setHealthcareProfessional(res.data);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return healthcareProfessional ? (
    <div>
      <StaffNavbar />
      <div className="bg-orange-400 p-6">
        <div className="text-white  text-2xl font-bold ">
          Hi, {healthcareProfessional?.firstName}{" "}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div
            onClick={shifts.onOpen}
            className="flex justify-center bg-sky-900 text-white text-md border rounded-xl p-2"
          >
            <p>Your shifts</p>
          </div>
          <div
            onClick={availableShifts.onOpen}
            className="bg-sky-900 text-white flex justify-center border rounded-xl p-2"
          >
            <p>Available shifts</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-lg mx-auto my-10 p-8 rounded-xl shadow-lg bg-white sm:p-10 md:max-w-2xl lg:max-w-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-700"
          >
            FirstName
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-700"
          >
            LastName
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone
          </label>
          <input
            type="telephone"
            {...register("phone")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            {...register("address")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-semibold text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="text"
            {...register("dateOfBirth")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Language"
            className="block text-sm font-semibold text-gray-700"
          >
            Language
          </label>
          <input
            type="text"
            {...register("language")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="emergencyContactName"
            className="block text-sm font-semibold text-gray-700"
          >
            Emergency Contact Name
          </label>
          <input
            type="text"
            {...register("emergencyContactName")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="emergencyContactPhone"
            className="block text-sm font-semibold text-gray-700"
          >
            Emergency Contact Phone
          </label>
          <input
            type="tel"
            {...register("emergencyContactPhone")}
            className="mt-1 p-2 w-full rounded-md border focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-700 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
