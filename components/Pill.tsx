const Pill: React.VFC<{ data: string }> = ({ data }) => {
  return (
    <div className="rounded-full bg-black py-1 px-4 text-white text-sm mr-1">
      <p>{data}</p>
    </div>
  );
};

export default Pill;
