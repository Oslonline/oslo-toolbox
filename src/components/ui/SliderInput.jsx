import PropTypes from "prop-types";

export default function SliderInput({ id, label, min, max, step = 1, value, onChange, className = "", valueSuffix = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-1 text-sm italic">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2">
        <span className="text-text-border-light dark:text-text-border-dark text-xs">{min}</span>
        <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={onChange} className="accent-accent flex-1" {...props} />
        <span className="text-accent text-xs font-semibold">
          {value}
          {valueSuffix}
        </span>
        <span className="text-text-border-light dark:text-text-border-dark text-xs">{max}</span>
      </div>
    </div>
  );
}

SliderInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  valueSuffix: PropTypes.string,
};
