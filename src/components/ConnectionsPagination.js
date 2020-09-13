import React, { useEffect } from "react";
import usePagination from "../hooks/usePagination";
import Connection from "./Connection";
import PaginationControls from "./PaginationControls";
import listUtils from "../utils/list";
import ErrorMessage from "./ErrorMessage";
import constants from "../config/constants";

function ConnectionsPagination({ data, filter, ...otherProps }) {
  const {
    create: createPagination,
    paginationApi,
    getCurrentPage,
    setCurrentPage,
    hasElements,
  } = usePagination();

  const setFirstPage = (list) => {
    if (filter) list = listUtils.filterByName(list, filter);

    const firstPage = createPagination(
      list,
      constants.PAGINATION.CONNECTIONS_PAGE_SIZE
    );
    setCurrentPage(firstPage);
  };

  useEffect(() => setFirstPage(data), [data]);
  return (
    <>
      <div style={styles.connections}>
        {getCurrentPage().map((item, index) => (
          <Connection connection={item} key={index} {...otherProps} />
        ))}
        <ErrorMessage
          message={constants.ERRORS.NO_RESULTS_FOUND}
          visible={!hasElements()}
        />
      </div>
      <PaginationControls visible={hasElements()} api={paginationApi} />
    </>
  );
}

const styles = {
  connections: {
    width: "100%",
    overflow: "auto",
  },
};

export default ConnectionsPagination;
