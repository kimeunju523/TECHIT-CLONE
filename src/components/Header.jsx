const Header = () => {
  return (
    <header className="bg-white-100 h-16 border-b  sticky top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-36 h-16 p-6">
            <img
              src="https://techit.education/img/techit_logo.svg"
              alt="techit_logo"
            />
          </div>
          <ul className="hidden lg:flex">
            <li className="header-menu">테킷 스쿨</li>
            <li className="header-menu relative">
              <div className="absolute right-2 -top-3 w-4 h-4 flex justify-center items-center rounded-full bg-[#ef4444] text-10px text-white">
                N
              </div>
              온보딩 트랙
            </li>
            <li className="header-menu">스타트업 스테이션</li>
            <li className="header-menu border-r">이벤트</li>
            <li className="header-menu">기업 해커톤</li>
          </ul>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
