"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Corrected the import
import { FaUserMd, FaDollarSign, FaHeadset } from "react-icons/fa";
import { Gothic_A1, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/ui/LottieAnimation";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1,  } },
  };

  const secondVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerchildren: 0.1,
      },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
  };
  const router = useRouter();
  const goToContact = () => {
    router.push("/contact");
  };
  const goToRegsiter = () => {
    router.push("/register");
  }

  return (
    <div className="bg-sky-100">
      <motion.div initial="initial" animate="animate" variants={textVariants} className="bg-sky-100 grid lg:grid-cols-2 sm:max-md:grid-cols-1 gap-0" >
        <motion.div variants={textVariants} className=" p-20">
          <motion.p variants={textVariants} className="text-5xl text-sky-950 font-bold  ml-5" >
            Simplifying Nurse Staffing
          </motion.p>
          <motion.p variants={textVariants} className="text-xl text-sky-950 ml-5">
            Linking CNA, LPN, and RN Professionals with BestShifts
          </motion.p>
        </motion.div>
        <motion.div variants={textVariants}>
          <LottieAnimation/>
        </motion.div>
      </motion.div>
      <motion.div variants={cardVariants} initial="initial" animate="animate" className="grid lg:grid-cols-2 sm:max-md:grid-cols-1 gap-8 p-2 mx-8">
        <motion.div variants={cardVariants} initial="initial" animate="animate" className="border rounded-xl p-12 bg-sky-950 shadow-md transition-all hover:scale-150 hover:bg-cyan-900 hover:border-sky-100 hover:border-4">
          <h2 className="text-white font-bold text-xl">In Need of Shifts?</h2>
          <p className="text-white">
            Rapidly Access More Opportunities at Top-of-the-Line Pay Rates.
          </p>
          <Button 
          onClick={goToRegsiter}
          className="border rounded-xl text-white bg-orange-500">
            Get Started
          </Button>
        </motion.div>
        <motion.div variants={secondVariants} initial="initial" animate="animate" className="border rounded-xl p-12 bg-sky-950 shadow-md transition-all hover:bg-cyan-900 hover:scale-150 hover:border-sky-100 hover:border-4">
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
        </motion.div>
      </motion.div>

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
          className="border rounded-xl p-4 md:p-6 bg-sky-950 text-white font-bold text-lg md:text-xl mt-5 mb-5 hover:bg-white hover:text-sky-900"
          onClick={goToContact}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
