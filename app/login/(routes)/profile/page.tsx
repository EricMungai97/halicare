"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import StaffNavbar from "@/components/ui/2navbar";

type Profile = {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  language: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
};

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/getProfile");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  return (
    <div>
      <StaffNavbar />
      <div className="flex justify-center py-8
     h-screen px-8 bg-gray-100">
        <div className="p-4 bg-white shadow-xl rounded-xl max-w-8xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-sky-900">Profile</h1>
          {loading ? (
            <Loader />
          ) : profile ? (
            <div>
              <p>
                <strong className="text-sky-900">Name:</strong> {profile.firstName} {profile.lastName}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Title:</strong> {profile.title}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Phone:</strong> {profile.phone}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Address:</strong> {profile.address}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Date of Birth:</strong> {profile.dateOfBirth}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Language:</strong> {profile.language}
              </p>
              <hr className="my-5" />
              <p>
                <strong className="text-sky-900">Emergency Contact Name:</strong>{" "}
                {profile.emergencyContactName}
              </p>
              <hr className="my-5" />
              <p className="my -5">
                <strong className="text-sky-900">Emergency Contact Phone:</strong>{" "}
                {profile.emergencyContactPhone}
              </p>
            </div>
          ) : (
            <p>No profile information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
