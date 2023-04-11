import { useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react';
import { ITour, Review } from '../../types/Types';
import { Img } from "react-image";
import { MdOutlineWatchLater } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci/"
import moment from 'moment';
import { AiOutlineCalendar } from "react-icons/ai"
import { TfiArrowTopRight } from "react-icons/tfi"
import { IoMdPeople } from "react-icons/io"
import { AiOutlineStar } from "react-icons/ai"
import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Reviews from './Reviews';
const TourDetails = () => {
    const { _id } = useParams<{ _id: string }>();
    const [tour, setTour] = useState<ITour>();
    const [reviews, setReview] = useState<Review[]>();
    const nextDayValue = tour?.startDates[0]
    useEffect(() => {
        fetch(`http://localhost:4200/api/v1/tours/${_id}`).then(res => res.json()).then(data => setTour(data.data.data));
        fetch(`http://localhost:4200/api/v1/tours/${_id}/reviews`).then(res => res.json()).then(data => setReview(data.data.data));
    }, [])
    const firstFive = reviews?.slice(0, 5);
    const date = moment(nextDayValue);
    const formattedDate = date.format('MMMM YYYY').slice();
    const text = tour?.difficulty;
    const capitalizedText = text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
    return (
        <div>
            {tour && (
                <>
                    <div className="relative z-1">
                        <div className="  clip-path-polygon">
                            <div className="clip-path-polygon ">
                                <div className="absolute w-full h-full bg-gradient-to-br from-green-400 to-green-500 opacity-50"></div>
                                <Img src={`http://localhost:4200/api/v1/img/tours/${tour.imageCover}`} className="object-cover    " alt="Зображення" />
                            </div>
                            <div className="flex justify-center ">
                                <h1 className="text-5xl  absolute  top-60   w-1/5 text-center leading-tight z-1 text-white ">
                                    <span className=" background-gradient p-2 uppercase font-light  z-10">{tour.name} Tour</span>
                                </h1>
                                <div className="flex absolute  justify-center ml-20    top-96 pt-20 ">
                                    <div className="flex w-52 " >
                                        <MdOutlineWatchLater className=" w-10  fill-white h-10" />
                                        <p className='text-2xl mt-1 pl-2 text-white'>
                                            {tour.duration} days
                                        </p>
                                    </div>
                                    <div className="flex w-52 ">
                                        <CiLocationOn className="w-10  fill-white h-10" />
                                        <p className="text-white text-2xl pl-2 mt-1">{tour.startLocation.description}</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='w-full flex   '>
                        <div className=' w-1/2 bg-gray-199  pt-10 flex flex-col items-center'>
                            <h1 className='text-3xl'>{`Quik Facts`.toUpperCase()}</h1>
                            <div className='h-44 flex text-lg mt-5'>
                                <div className='flex flex-col justify-around mr-4'>
                                    <AiOutlineCalendar className="w-6 fill-green-400 h-6" />
                                    <TfiArrowTopRight className="w-6 fill-green-400 h-6 " />
                                    <IoMdPeople className="w-6 fill-green-400 h-6" />
                                    <AiOutlineStar className="w-6 fill-green-400 h-6" />
                                </div>
                                <div className='flex flex-col justify-around  font-medium'>
                                    <p>NEXT DATE <span className='text-sm p-3'>{formattedDate}</span></p>
                                    <p>DIFFICULTY  <span className='text-sm p-3'>{capitalizedText}</span>  </p>
                                    <p>PARTICIPANTS<span className='text-sm p-3'> {tour.maxGroupSize + ' People'}</span>  </p>
                                    <p>RATING <span className='text-sm p-3'>{tour.ratingsAverage + '/ 5'}</span>   </p>
                                </div>
                            </div>
                            <h1 className='text-3xl mt-10'>YOUR TOUR GUIDES</h1>
                            <div className='w-64'>
                                {tour.guides.map((guides) => <div key={guides._id} className='flex mt-5'>
                                    <Img src={`http://localhost:4200/api/v1/img/users/${guides.photo}`} className='rounded-full object-cover h-8 w-8 mr-3' />
                                    <p className='mr-2 font-medium'>{guides.role === 'lead-guide' ? guides.role.toUpperCase() : "TOUR " + guides.role.toUpperCase()} </p>
                                    <p className='mr-2'>{guides.name} </p>
                                </div>
                                )}
                            </div>
                        </div>
                        <div className='w-1/2  h-96  flex flex-col items-center pt-10'>

                            <h1 className='text-3xl '>{'about '.toUpperCase() + tour.name.toUpperCase()}</h1>
                            <div className='w-4/6 pt-5'>
                                <p className=''>
                                    {tour.description}
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex mt-1 clip-path-polygon-forImg  ">
                        {tour.images.map(image => <div key={image} className=' '> <Img src={`http://localhost:4200/api/v1/img/tours/${image}`} className="as " /></div>)}
                    </div>

                    <div className='clip-path-polygon-maps -mt-40'>
                        <MapContainer className='mt-15' center={[tour.locations[0].coordinates[1], tour?.locations[0].coordinates[0]]} zoom={6} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {tour.locations.map(el =>
                                <Marker key={el._id} position={[el.coordinates[1], el.coordinates[0]]}>
                                    <Popup>
                                        {`DAY ${el.day} : ${el.description}`}
                                    </Popup>
                                </Marker>
                            )}
                        </MapContainer >
                    </div>
                    <Reviews reviews={firstFive} />
                </>

            )}
        </div>
    )
}

export default TourDetails
