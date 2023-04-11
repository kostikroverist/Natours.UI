import React, { FC, useState } from 'react'
import { ITour } from '../../types/Types';
import TourList from './ToursList'
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
interface TourListProps {
    toursData: ITour[];
}
const Tours: FC<TourListProps> = ({ toursData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = toursData.slice(firstPostIndex, lastPostIndex)
    return (
        <div className='w-full'>
            <TourList toursData={currentPosts} />
            <Pagination totalPosts={toursData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Tours
