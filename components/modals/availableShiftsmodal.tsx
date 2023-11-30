"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAvailable } from "@/hooks/use-available";


type HealthcareFacility = {
    name: string;
    location: string;
    overview: string;
  };

type Shift = {
    id: string;
    profession: string;
    date: string;
    startTime: string;
    endTime: string;
    healthcareFacility: HealthcareFacility;
    confirmed: boolean;
    applied: boolean;
  };

export const AvailableModal = () => {
    const [shefts, setShefts] = useState<Shift[]>([]);
    useEffect(() => {
        const fetchShifts = async () => {
          try {
            const response = await axios.get("/api/getShifts");
            setShefts(response.data);
           
          } catch (error) {
            console.error("Error fetching shifts:", error);
            }
        };
    
        fetchShifts();
      }, [shefts]);

  const shifts = useAvailable();

  return (
    <Dialog open={shifts.isOpen} onOpenChange={shifts.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">
            Available shifts
          </h2>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          {shefts.map((shift) => (
            <div
              key={shift.id}
              className="flex flex-col gap-2 p-4 border rounded-md"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{shift.healthcareFacility.name}</h3>
                <p className="text-sm text-gray-500">{shift.date}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{shift.startTime} - {shift.endTime}</p>
                <p className="text-sm text-gray-500">{shift.profession}</p>
              </div>
            </div>
          ))}
          </div>
      </DialogContent>
    </Dialog>
  );
};
