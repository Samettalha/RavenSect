import Image from "next/image";

export default function AboutUsStats() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col xl:flex-row w-full max-w-[1500px] px-2">
        <div className="w-full xl:w-1/2 relative">
          <div className="w-full px-5">
            <Image
              src={"/images/.jpg"} // Dark, intense image
              layout="responsive"
              alt="A dark, intense scene"
              width={732}
              height={447}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-600 via-transparent to-transparent rounded-lg z-10"></div>
            {/* Light beam effect with yellow tone for adventure theme */}
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex flex-col text-center sm:text-left items-center sm:items-start justify-center xl:justify-start gap-5 mt-10 text-white px-5 z-10">
          <p className="text-2xl xl:max-w-[400px] text-yellow-400">
            Alışılmışın dışındayız{" "}
            <span className="font-medium text-yellow-500"> Taki bir gün...</span>
          </p>
          <p className="xl:max-w-[530px] text-gray-300">
            hepimiz 12.sınıfta iken aklımızda bir ampul yandı
            (o tarz bir ampul değil!!) ve RavenSect kuruldu
          </p>
          <div className="flex justify-center w-full mt-10">
            <div className="w-full sm:w-4/5 xl:w-3/5 xl:-ml-20 py-5 sm:py-16 bg-yellow-600 flex items-center justify-around text-white z-10">
              <div className="flex flex-col items-center text-center">
                <div className="text-[7px] sm:text-base font-light">
                  Kayıp Ruh Sayısı
                </div>
                <div className="text-3xl sm:text-7xl font-semibold mt-2 sm:mt-4">
                  12
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-[7px] sm:text-base font-light">
                  Personel Sayısı
                </div>
                <div className="text-3xl sm:text-7xl font-semibold mt-2 sm:mt-4">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
