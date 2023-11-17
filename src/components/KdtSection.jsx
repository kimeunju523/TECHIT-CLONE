import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const KdtSection = () => {
  return (
    <section className="mt-20 bg-green-100 container">
      <TitleBar title="KDT 테킷 스쿨" desc="K-Digital Training 부트캠프" />
      <div className="bg-purple-100 grid grid-cols-4 gap-6 justify-items-center mt-10">
        <KdtCard />
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
        <div className="bg-yellow-100 w-[290px] h-[416px]">Card</div>
      </div>
    </section>
  );
};
export default KdtSection;
