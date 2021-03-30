const Pill: React.VFC<{ data: string }> = ({ data }) => {
  return (
    <div className="rounded-full mb-1 sm:mb-0 bg-black py-1 px-4 text-white text-xs sm:text-sm mr-1">
      <p>{data}</p>
    </div>
  );
};

export default Pill;
