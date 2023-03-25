// TourItem.tsx
import React from "react";
import { IGuide, ILocation, ITour } from "../../types/Types";
import moment from 'moment';
import BaseButton from "../button/BaseButton";
import { CiLocationOn } from "react-icons/ci/"
import { AiOutlineCalendar } from "react-icons/ai"
import { SlFlag } from "react-icons/sl"
import { IoMdPeople } from "react-icons/io"

interface TourItemProps {
  tourData: ITour;
}
const TourItem: React.FC<TourItemProps> = ({ tourData }) => {
  const { name, imageCover, difficulty, duration, price, locations, guides, summary, startLocation, startDates, maxGroupSize, ratingsAverage, ratingsQuantity } = tourData;

  const date = moment(startDates[0]);

  const formattedDate = date.format('MMMM YYYY').slice();

  return (
    <div className="tour-item mr-10 mb-16 bg-white  flex flex-col ">
      <div className="relative  h-56">
        <div className="clip-path-polygon ">
          <div className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-500 opacity-50"></div>
          <img src={"https://www.natours.dev/img/tours/tour-2-cover.jpg"} className="object-cover h-full w-full " alt="Зображення" />
        </div>
        <div className="">
          <h1 className="text-3xl text-right absolute bottom-4 right-8 w-8/12 z-10 text-white ">
            <span className=" background-gradient p-1 py-1 break-words uppercase font-light z-10">{name}</span>
          </h1>
        </div>
      </div>
      <div className="p-5 h-32">
        <p className=" text-sm uppercase font-semibold col-start-1 col-end-auto text-text-description">{`${difficulty}`.toUpperCase()} {duration}-DAY TOUR</p>
        <div className="col-span-full text-lg italic mt-3 text-slate-400">
          {summary}
        </div>
      </div>

      <div className="">
        <div className="card__details p-2 h-16">
          <div className="flex justify-center p-2 ">
            <div className="w-1/2">
              <div className="flex">
                <CiLocationOn className="w-8 fill-green-400 h-6" />
                <p className="text-text-description text-sm">{startLocation.description}</p>
              </div>
              <div className="flex mt-5">
                <SlFlag className="w-8 fill-green-400 h-5" />
                <p className="text-text-description text-sm">{locations.length} steps</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex">
                <AiOutlineCalendar className="w-8 fill-green-400 h-6" />
                <p className="text-text-description text-sm">{formattedDate}</p>
              </div>
              <div className="flex mt-5">
                <IoMdPeople className="w-8 fill-green-400 h-6" />
                <p className="text-text-description text-sm">{maxGroupSize} people</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card_footer flex justify-between p-6 pt-10 pb-5 mt-10 h-28 bg-item-footer-color">
          <div className="">
            <p className="">${price} <span className="text-text-description">per person</span></p>
            <p>{ratingsAverage} <span className="text-text-description">rating({ratingsQuantity})</span> </p>
          </div>
          <BaseButton name="Details" />
        </div>
      </div>
    </div>
  );
};

export default TourItem;
