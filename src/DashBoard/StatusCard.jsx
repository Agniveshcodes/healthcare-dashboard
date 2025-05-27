import React from "react";
import { healthCardData } from "../AppData/HealthCardData";
import HealthCard from "../DashBoard/HealthCard";

const StatusCard = () => {
  return (
    <div className="flex flex-col gap-4  sm:grid-cols-2 w-44">
      {healthCardData.map((item) => (
        <HealthCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          date={item.date}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default StatusCard;
