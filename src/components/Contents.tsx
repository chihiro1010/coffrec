import DripItem from "./DripItem";

const Contents: React.FC = () => {
  const dummyJsonData = [
    {
      dateTime: "2024/2/1 16:19",
      beanBrand: "エチオピア　ナチュラル",
      grinding: "中細挽き",
      beanScales: "16",
      waterScales: "256",
      thermometer: "87",
      dripTimes: "03:20",
      memo: "落ち切り",
    },
    {
      dateTime: "2024/2/12 09:25",
      beanBrand: "マンデリン　スマトラ",
      grinding: "中細挽き",
      beanScales: "16",
      waterScales: "256",
      thermometer: "87",
      dripTimes: "03:20",
      memo: "落ち切り",
    },
  ];

  return (
    <>
      {dummyJsonData.length !== 0 ? (
        <div className="flex justify-center">
          <div className="mt-7 w-96">
            ダミーデータ（まだ操作できません） -------------------------
            {dummyJsonData.map((item) => (
              <DripItem
                key={item.dateTime}
                dateTime={item.dateTime}
                beanBrand={item.beanBrand}
              />
            ))}
            -----------------------------------------------------------
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen justify-center mt-[-10vh]">
          <h1 className="text-[#8F8F8F] text-lg">最初の一杯を淹れましょう。</h1>
          <img
            className="w-20 x-20 mt-5"
            src="src/assets/home.png"
            alt="home-logo"
          />
        </div>
      )}
    </>
  );
};

export default Contents;
