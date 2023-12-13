"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/loader";
import StaffNavbar from "@/components/ui/2navbar";
import toast from "react-hot-toast";

type HealthcareFacility = {
  name: string;
  location: string;
  overview: string;
};

type HealthcareProfessional = {
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

type Shift = {
  id: string;
  profession: string;
  date: string;
  startTime: string;
  endTime: string;
  healthcareFacility: HealthcareFacility;
  confirmed: boolean;
  applied: boolean;
  healthcareProfessional: HealthcareProfessional;
};

const AvailableShifts: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axios.get("/api/getShifts");
        setShifts(response.data);
      } catch (error) {
        console.error("Error fetching shifts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, [shifts]);

  const applyForShift = async (shiftId: string) => {
    try {
      console.log(shiftId);
      const response = await axios.post(
        "/api/assignShifts",
        JSON.stringify(shiftId),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success("Shift applied for successfully");
      }
    } catch (error) {
      toast.error("Error applying for shift:");
    }
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div>
      <StaffNavbar />
      <h1 className="text-2xl font-bold mb-4 p-2 text-sky-900">All Shifts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shifts.map((shift) => (
          <div
            key={shift.id}
            className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              Profession: {shift.profession}
            </h2>
            <p className="mb-1">
              <span className="font-bold">Date:</span> {shift.date}
            </p>
            <p className="mb-1">
              <span className="font-bold">Start Time:</span> {shift.startTime}
            </p>
            <p className="mb-1">
              <span className="font-bold">End Time:</span> {shift.endTime}
            </p>
            <p className="mb-1">
              <span className="font-bold">Facility:</span>{" "}
              {shift.healthcareFacility.name}
            </p>
            <p className="mb-1">
              <span className="font-bold">Location:</span>{" "}
              {shift.healthcareFacility.location}
            </p>
            <p>
              <span className="font-bold">Facility Overview:</span>{" "}
              {shift.healthcareFacility.overview}
            </p>

            <button
              className="bg-sky-900 text-white px-4 py-2 rounded-xl mt-4"
              onClick={() => applyForShift(shift.id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableShifts;
