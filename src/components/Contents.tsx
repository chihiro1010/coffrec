const Contents: React.FC = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center h-screen justify-center mt-[-10vh]">
        <h1 className="text-[#8F8F8F] text-lg">最初の一杯を淹れましょう。</h1>
        <img
          className="w-20 x-20 mt-5"
          src="src/assets/home.png"
          alt="home-logo"
        />
      </div> */}
      <div className="flex flex-col items-center mt-5">
        <div className="w-[22rem] h-20 my-1  bg-white  ">
          <img
            src="src/assets/home.png"
            alt="抽出アイコン"
            className="inline-block h-14 w-13 my-3 mx-3"
          />
          <h1 className="inline-block text-[#C8A99C] text-xl align-middle">
            モカレケンプティ
          </h1>
        </div>
        <div className="w-[22rem] h-20 my-1  bg-white  ">
          <img
            src="src/assets/home.png"
            alt="抽出アイコン"
            className="inline-block h-14 w-13 my-3 mx-3"
          />
          <h1 className="inline-block text-[#C8A99C] text-xl align-middle">
            マンデリンＧ１
          </h1>
        </div>
        <div className="w-[22rem] h-20 my-1  bg-white  ">
          <img
            src="src/assets/home.png"
            alt="抽出アイコン"
            className="inline-block h-14 w-13 my-3 mx-3"
          />
          <h1 className="inline-block text-[#C8A99C] text-xl align-middle">
            モカイルガチェフェ
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contents;
