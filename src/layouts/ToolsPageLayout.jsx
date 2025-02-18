import PropTypes from "prop-types";
import ToolsHero from "../components/toolspage/ToolsHero";

const ToolsPageLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:w-11/12 xl:w-10/12">
      <ToolsHero />
      {children}
    </div>
  );
};

ToolsPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolsPageLayout;
