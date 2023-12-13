"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/loader";
import StaffNavbar from "@/components/ui/2navbar";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

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

const ShiftsPage: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await axios.get("/api/getUserShifts");
        setShifts(response.data);
      } catch (error) {
        console.error("Error fetching shifts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShifts();
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  const withdrawShift = async (shiftid: string) => {
    try {
      const res = await axios.post(
        "/api/withdrawShift",
        JSON.stringify(shiftid)
      );
      if (res.status === 200) {
        toast.success("Shift withdrawn successfully");
      }
      setShifts(shifts.filter((shift) => shift.id !== shiftid));
    } catch (error) {
      console.error("Error withdrawing shift:", error);
    }
  };

  const confirmShift = async (shiftid: string) => {
    try {
      const res = await axios.post(
        "/api/confirmShift",
        JSON.stringify(shiftid)
      );
      if (res.status === 200) {
        toast.success("Shift confirmed successfully");
      }

      setShifts((prevShifts) =>
        prevShifts.map((shift) =>
          shift.id === shiftid ? { ...shift, confirmed: true } : shift
        )
      );
    } catch (error) {
      console.error("Error confirming shift:", error);
    }
  };
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
            <div>
              {!shift.confirmed && (
                  <button
                  className="bg-sky-900 text-white px-4 py-2 rounded-xl mt-4"
                  onClick={() => withdrawShift(shift.id)}
                >
                  Withdraw
                </button>)}
            </div>
            {shift.confirmed ? (
      <div className="text-green-500 mt-4 flex items-center">
        <FaCheckCircle size={24} />
        <span className="ml-2">Confirmed</span>
      </div>
    ) : (
      <button
        className="bg-sky-900 text-white px-4 py-2 rounded-xl mt-4"
        onClick={() => confirmShift(shift.id)}
      >
        Confirm
      </button>
    )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiftsPage;
