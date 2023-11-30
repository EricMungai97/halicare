"use client";

import { useEffect, useState } from "react";

import { ShiftsModal } from "@/components/modals/shiftsmodal";
import { AvailableModal } from "@/components/modals/availableShiftsmodal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <ShiftsModal />
      <AvailableModal />
</>
  );
};