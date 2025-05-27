import HumanAnatomy from "../DashBoard/HumanAnatomy";
import StatusCard from "../DashBoard/StatusCard";
import PatientActivityFeed from "../DashBoard/PatientActivityFeed";
import Calendar from "../DashBoard/Calendar";
import UpcomingSchedule from "../DashBoard/UpcomingSchedule";

const MainDashBoard = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-1.5">
  {/* Left Half */}
  <div className="w-full xl:w-1/2 flex flex-col gap-6">
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <HumanAnatomy />
      </div>
      <div className="w-full lg:w-1/2">
        <StatusCard />
      </div>
    </div>
    <PatientActivityFeed />
  </div>

  {/* Right Half */}
  <div className="w-full xl:w-1/2 flex flex-col gap-6 bg-[#EDF5FF] px-6  pb-8">
    <Calendar />
    <UpcomingSchedule />
  </div>
</div>
  );
};

export default MainDashBoard;
