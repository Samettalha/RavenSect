export default function HomePageAdvantage() {
  return (
    <div className="w-full h-screen flex flex-col gap-7 items-center justify-center px-5 bg-[url('/images/horror-bg.jpeg')] bg-cover bg-center bg-blend-darken">
      <p className="text-center max-w-[1000px] text-white text-2xl sm:text-4xl font-bold">
        <span className="text-[#B30000]">Korkunun</span> ...{" "}
        <span className="text-[#FF4D00]">GİZEMİ</span>yle, karanlıkta
        keşfetmeye hazır mısın?{" "}
      </p>
      <p className="text-center max-w-[1000px] text-[#D3D3D3] text-base sm:text-2xl font-normal">
        Gecenin karanlığında seni bekleyen şeyler... Keşfetmeye cesaretin var mı?
      </p>
    </div>
  );
}
