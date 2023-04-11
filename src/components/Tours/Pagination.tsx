import { FC } from 'react'
import BaseButton from '../button/BaseButton';

type Props = {
  totalPosts: number,
  postsPerPage: number
  setCurrentPage: (page: number) => void
}

const Pagination: FC<Props> = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }
  console.log(pages)
  return (
    <div className="flex justify-center mt-6">
      {pages.map((page, index) => <button
        className="page-link bg-background-button-form text-white hover:text-gray-600 rounded-md px-3 py-2 m-3 focus:outline-none"
        onClick={() => setCurrentPage(page)} key={index}>{page}</button>)}
    </div>
  )
}

export default Pagination
