import { pages, cPage, getCurrentPage } from "../features/pokemonsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../css/pagination.css';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(cPage);
    const numberOfPages = useSelector(pages);

    const getPagination = () => {
        const res = [];
        const maxPages = 4;

        for (let i = 0; i < numberOfPages; i++) res.push(i);

        return res.filter(x => 
          x >= currentPage - 1 && x < currentPage + 
          (currentPage > 1 ? maxPages : maxPages + 1)
        );
    }

    const changePage = (e) => {
      e.preventDefault();
      dispatch(getCurrentPage(Number(e.target.innerText)));
    }

  return (
    <div className='pagination-container'>
        {getPagination()?.length ?
        getPagination().map(x => <div className='pagination' style={{
          backgroundColor: currentPage == x ? "black" : null,
          display: x == 0 ? "none" : null
        }} key={x} onClick={changePage}>{x}</div>) : null}
    </div>
  )
}

export default Pagination