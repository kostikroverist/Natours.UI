import React, { FC } from 'react'
import { ITour } from '../../types/Types';
import TourList from './ToursList'
interface TourListProps {
    toursData: ITour[];
}
const Tours: FC<TourListProps> = ({ toursData }) => {
    return (
        <div className='w-full'>
            <TourList toursData={toursData} />
        </div>
    )
}

export default Tours
