import { PAGINATION } from '../../constants/pagination'
import { Flex } from '../atoms/utils/Flex'
import {
  GoToFirstPageButton,
  GoToLastPageButton,
  GoToNextPageButton,
  GoToPreviousPageButton,
} from '../atoms/utils/pagination'

export const Pagination = ({ page, setPage, count }) => {
  const disablePrev = page < 1 || !count
  const lastPage = Math.floor(count / PAGINATION.PAGE_SIZE)
  const disableNext = lastPage <= page || !count

  return (
    <Flex gap='1rem' justify='center'>
      <GoToFirstPageButton disabled={disablePrev} setPage={setPage} />
      <GoToPreviousPageButton disabled={disablePrev} setPage={setPage} />
      <p>{page + 1}</p>
      <GoToNextPageButton disabled={disableNext} setPage={setPage} />
      <GoToLastPageButton disabled={disableNext} lastPage={lastPage} setPage={setPage} />
    </Flex>
  )
}
