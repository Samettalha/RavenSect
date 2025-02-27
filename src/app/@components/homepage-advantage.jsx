export default function HomePageAdvantage() {
  return (
    <div className="w-full h-screen flex flex-col gap-7 items-center justify-center px-5 bg-[url('/images/adventure-bg.jpg')] bg-cover bg-center bg-blend-darken">
      <p className="text-center max-w-[1000px] text-white text-4xl sm:text-5xl font-extrabold leading-tight">
        <span className="text-[#FF5733]">Aksiyonun</span> ve{" "}
        <span className="text-[#FFBD33]">Macera</span> ile, dünyayı keşfetmeye hazır mısın?
      </p>
      <p className="text-center max-w-[1000px] text-[#D3D3D3] text-lg sm:text-2xl font-normal mt-4 opacity-90">
        Bir kahraman gibi, zorlu düşmanlarla mücadele et, gizemli dünyalarda yol al ve unutulmaz bir maceraya atıl!
      </p>
      <div className="absolute bottom-10 text-center">
      </div>
    </div>
  );
}
