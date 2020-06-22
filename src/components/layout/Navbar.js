import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const NavBar = ({ title, icon }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <FontAwesomeIcon icon={icon} />
          {title}
        </h1>
      </nav>
    </div>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
  icon: faHome,
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;
