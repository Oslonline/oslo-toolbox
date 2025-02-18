import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonNeutralCta = ({ to = null, onClick = null, children, className = "" }) => {
  const baseClass = "rounded-lg border-2 px-4 py-1.5 duration-150 hover:cursor-pointer font-mono md:font-semibold";
  const defaultClass = "dark:border-border-dark dark:text-text-border-dark text-text-border-light border-border-light rounded-lg border-2";

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

ButtonNeutralCta.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonNeutralCta;
