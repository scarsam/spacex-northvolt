import { SelectTypes } from "../src/types/Select";

const Select: React.FC<SelectTypes> = ({
  label,
  value,
  onChange,
  filterOptions,
}) => {
  return (
    <label className="relative inline-flex items-center">
      <p className="mr-2">{label}</p>

      <svg
        className="w-3 h-3 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="black"
          fillRule="nonzero"
        />
      </svg>
      <select
        className="text-black px-4 py-2 pr-9 rounded-full focus:outline-none appearance-none flex-1 sm:flex-auto"
        value={value}
        onChange={onChange}
      >
        {Object.entries(filterOptions).map(([filterName, values]) => (
          <option key={filterName} value={filterName}>
            {values.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
