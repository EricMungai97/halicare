"use client";

import React, { use } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from "@/app/login/staff/page";
import StaffNavbar from "@/components/ui/2navbar";

export default function Employee() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session) {
      redirect("/login/staff");
    }
  }, [session, status]);

  if (session) {
    return (
      <div>
        <StaffNavbar />
        <div className="bg-orange-400 p-6">
          <div>Hi, {session?.user.email} </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 grid grid-cols-2 gap-2 mr-20 ml-20 text-white ">
            <div className="bg-sky-900 border rounded-xl p-2">
              <p>Your shifts</p>
            </div>
            <div className="bg-sky-900 border rounded-xl p-2">
              <p>Available shifts</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
