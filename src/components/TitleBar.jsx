import NextIcon from "../icons/NextIcon";

const TitleBar = ({ title, desc }) => {
  return (
    <div className="h-[64.5px] flex justify-between items-end font-semibold">
      <div className="h-full flex flex-col justify-between">
        <h5 className="text-techit-main">{title}</h5>
        <h3 className="text-[26px]">{desc}</h3>
      </div>
      <button className="flex items-center text-sm">
        자세히 보기 <NextIcon />
      </button>
    </div>
  );
};

export default TitleBar;
