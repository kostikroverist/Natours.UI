// TourList.tsx
import React from "react";
import { ITour } from "../../types/Types";
import TourItem from "./TourItem";

interface TourListProps {
  toursData: ITour[];
}

const TourList: React.FC<TourListProps> = ({ toursData }) => {
  return (
    <div className="w-8/12 mx-auto flex flex-wrap mt-20">
      {toursData.map((tourData) => (
        <TourItem key={tourData._id} tourData={tourData} />
      ))}
    </div>
  );
};

export default TourList;
