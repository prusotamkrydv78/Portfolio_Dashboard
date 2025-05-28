import Dashboard from "@/components/Dashboard";
import connectDB from "@/database/connectDB";
import Image from "next/image";

export default function Home() {
  connectDB()
  return (
    <div className="min-h-screen  ">

      <Dashboard />

    </div>
  );
}
