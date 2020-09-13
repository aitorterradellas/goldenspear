import React from "react";
import constants from "../config/constants";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../config/colors";

function PaginationControls({ api }) {
  return (
    <div style={styles.container}>
      {!api.isFirstPage() && (
        <button style={styles.button} onClick={api.prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      <span>
        {api.currentPageNum} {constants.PAGINATION.SEPARATOR} {api.totalPages}
      </span>
      {!api.isLastPage() && (
        <button style={styles.button} onClick={api.next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.secondary,
    border: "none",
    borderRadius: "50px",
    color: colors.white,
    height: "30px",
    margin: "10px",
    width: "30px",
  },
};

export default PaginationControls;
