import PropTypes from "prop-types";

export default function DropdownInput({ id, label, value, onChange, options, className = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-1 text-sm italic">
          {label}
        </label>
      )}
      <select id={id} value={value} onChange={onChange} className="dark:border-border-dark focus:border-accent dark:bg-dark bg-light border-border-light rounded-md border-2 p-2 outline-hidden" {...props}>
        {options.map((opt) =>
          typeof opt === "string" ? (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ) : (
            <option key={opt.value ?? opt.name} value={opt.value ?? opt.name}>
              {opt.label ?? opt.name}
            </option>
          ),
        )}
      </select>
    </div>
  );
}

DropdownInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
};
