import React from 'react'
import { FC, useEffect, useState } from 'react';
import { Review } from '../../types/Types';
import { Img } from 'react-image';
import { AiOutlineStar } from 'react-icons/ai';
import CreateRating from './CreateRating';

type ReviewProps = {
    reviews?: Review[];
}

const Reviews: FC<ReviewProps> = ({ reviews }) => {

    if (!reviews) {
        return <div>Немає відгуків</div>;
    }
    return (
        <div className="reviews flex   w-full  items-center  bg-green-500 clip-path-polygon-reviews -mt-44">
            {reviews.map((review) => (
                <div className="mx-auto bg-white w-60 h-64">
                    <div className="flex p-5 ">
                        <Img src={`http://localhost:4200/api/v1/img/users/${review.user.photo}`} className='rounded-full object-cover h-8 w-8 mr-3' />
                        <p>
                            {review.user.name}
                        </p>

                    </div>
                    <div className="p-2 h-36">
                        <p>{review.review}</p>
                    </div>
                    <div className="p-2 flex justify-center">
                        <CreateRating count={review.rating}/>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews