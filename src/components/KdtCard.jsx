const KdtCard = () => {
  return (
    <div className="bg-yellow-100 w-[290px] h-[416px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 duration-300 rounded-lg"
          src="./images/kdt_blockchain.webp"
          alt="kdt_blockchain"
        />
      </div>
      <div>
        <span className="text-[#1d4ed8] text-sm font-semibold border border-[#1d4ed8] py-1 px-2 rounded-[4px]">
          모집중
        </span>
        <h3>블록체인 스쿨</h3>
        <h5>미래를 바꿀 대체불가한 개발자의 시작</h5>
        <div>23.11.01(수) ~ 23.11.30(목) 까지</div>
      </div>
    </div>
  );
};

export default KdtCard;
