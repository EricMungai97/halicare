"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Corrected the import
import { FaUserMd, FaDollarSign, FaHeadset } from "react-icons/fa";
import { Gothic_A1, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/ui/LottieAnimation";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact");
  };

  return (
    <div>
      <section className="bg-orange-500 grid grid-cols-2 " >
        <div className=" p-20">
          <p className="text-5xl text-white font-bold  ml-5">
            Simplifying Nurse Staffing
          </p>
          <p className="text-xl text-white ml-5">
            Linking CNA, LPN, and RN Professionals with BestShifts
          </p>
        </div>
        <div>
          <LottieAnimation />
        </div>
      </section>
      <section className="grid lg:grid-cols-2 sm:max-md:grid-cols-1 gap-3 p-2">
        <div className="border rounded-xl p-12 bg-sky-900 shadow-md">
          <h2 className="text-white font-bold text-xl">In Need of Shifts?</h2>
          <p className="text-white">
            Rapidly Access More Opportunities at Top-of-the-Line Pay Rates.
          </p>
          <Button 
          onClick={goToContact}
          className="border rounded-xl text-white bg-orange-500">
            Get Started
          </Button>
        </div>
        <div className="border rounded-xl p-12 bg-sky-900 shadow-md">
          <h2 className="text-white font-bold text-xl">
            Urgently seeking Staff?
          </h2>
          <p className="text-white">
            Swiftly Meet Your Staffing Requirements with Top-Tier Talent.
          </p>
          <Button
            onClick={goToContact}
            className="border rounded-xl text-white bg-orange-500"
          >
            Find Staff
          </Button>
        </div>
      </section>

      <section className="bg-white text-sky-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-3xl text-sky-900 font-bold mb-8">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <FaUserMd className="text-4xl md:text-6xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                High-Quality Staff
              </h3>
              <p>
                We rigorously vet all healthcare professionals to ensure they
                meet the highest standards.
              </p>
            </div>

            <div className="card p-6 text-center">
              <FaDollarSign className="text-4xl md:text-6xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Cost-Efficiency
              </h3>
              <p>
                We help you optimize your staffing needs, saving you time and
                reducing costs.
              </p>
            </div>

            <div className="card p-6 text-center">
              <FaHeadset className="text-4xl md:text-6xl text-red-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Comprehensive Support
              </h3>
              <p>
                Our team provides around-the-clock support to ensure seamless
                staffing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 md:p-20 text-center text-sky-900 bg-gray-100 text-lg">
        <p className="text-2xl md:text-4xl font-bold text-sky-900 mb-8">
          CONNECT WITH US
        </p>
        <p>
          Reach out to HALICARE Staffing now! Specializing in healthcare
          recruitment, we are committed to aiding organizations in filling their
          staffing gaps while helping job seekers find the ideal roles. If you
          represent a healthcare institution interested in collaborating with
          us, click on Get Started below to begin.
        </p>
        <button
          className="border rounded-xl p-4 md:p-6 bg-sky-900 text-white font-bold text-lg md:text-xl mt-5 mb-5 hover:bg-white hover:text-sky-900"
          onClick={goToContact}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
