import React from "react";
import colors from "../config/colors";
import constants from "../config/constants";

function Breadcrumbs({ data, currentIndex, onClick }) {
  return (
    <div>
      {data.map((contact, index) => (
        <React.Fragment key={index}>
          {index > 0 && constants.BREADCRUMBS_SEPARATOR}
          {index + 1 === currentIndex ? (
            <span>{contact.name}</span>
          ) : (
            <span
              className="button"
              style={styles.link}
              onClick={() => onClick(index)}
            >
              {contact.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const styles = {
  link: {
    color: colors.secondary,
  },
};

export default Breadcrumbs;
