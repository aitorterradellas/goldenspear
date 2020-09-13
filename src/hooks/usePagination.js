import { useState } from "react";

const usePagination = () => {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [size, setSize] = useState(1);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const create = (array, size) => {
    setCurrentPageNum(1);
    setTotalPages(Math.ceil(array.length / size));
    setArray(array);
    setSize(size);
    const firstPage = array.slice(0, size);
    setCurrentPage(firstPage);

    return firstPage;
  };

  const getCurrentPage = () => {
    return currentPage;
  };

  const setPage = (page) => {
    let data = null;
    if (page > 0) {
      data = array.slice((page - 1) * size, page * size);
      setCurrentPageNum(page);
      setCurrentPage(data);
    }
  };

  const next = () => {
    setPage(currentPageNum + 1);
  };

  const prev = () => {
    setPage(currentPageNum - 1);
  };

  const isFirstPage = () => {
    return currentPageNum === 1;
  };

  const isLastPage = () => {
    return currentPageNum === totalPages;
  };

  const hasElements = () => {
    return currentPage.length !== 0;
  };

  return {
    create,
    getCurrentPage,
    setCurrentPage,
    hasElements,

    paginationApi: {
      next,
      prev,
      currentPageNum,
      totalPages,

      isFirstPage,
      isLastPage,
    },
  };
};

export default usePagination;
