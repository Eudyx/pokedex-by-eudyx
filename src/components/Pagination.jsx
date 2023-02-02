import { pages, cPage, getCurrentPage } from "../features/pokemonsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../css/pagination.css';
import { usePagination } from "../hooks/usePagination";

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(cPage);
    const numberOfPages = useSelector(pages);
    const [getPagination] = usePagination(); 


    const changePage = (e) => {
      e.preventDefault();
      dispatch(getCurrentPage(Number(e.target.innerText)));
    }

  return (
    <div className='pagination-container'>
        {getPagination(currentPage, numberOfPages)?.length ?
        getPagination(currentPage, numberOfPages).map(x => <div className='pagination' style={{
          backgroundColor: currentPage == x ? "black" : null,
          display: x == 0 ? "none" : null
        }} key={x} onClick={changePage}>{x}</div>) : null}
    </div>
  )
}

export default Pagination