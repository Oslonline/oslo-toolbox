import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonMainCta = ({ to = null, onClick = null, children, className = "" }) => {
  const baseClass = "rounded-lg border-2 px-4 py-1.5 duration-150 hover:cursor-pointer font-mono md:font-semibold";
  const defaultClass = "bg-accent dark:text-dark text-text-dark hover:bg-button-hover dark:hover:bg-button-dark-hover border-transparent";

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${defaultClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${defaultClass} ${className}`}>
      {children}
    </button>
  );
};

ButtonMainCta.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonMainCta;
