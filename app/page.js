import Dashboard from "@/components/Dashboard";
import connectDB from "@/database/connectDB"; 
export default function Home() {
  connectDB()
  return (
    <div className="min-h-screen  ">

      <Dashboard />

    </div>
  );
}
