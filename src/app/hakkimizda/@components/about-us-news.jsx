export default function AboutUsNews() {
  return (
    <div className="flex flex-col items-center justify-center sm:py-32 text-red-600">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center px-8 gap-10">
        {/* Başlık */}
        <div className="text-center max-w-[700px] text-red-500">
          <h2 className="text-[42px] leading-[56px] font-haunted">
            Karanlık Gerçeklerle Yüzleşme Zamanı
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Her yaştan farklı ilgi alanlarına sahip oyuncular için hazırlanmış, korku dolu bir yolculuğa çıkmaya hazır olun.
          </p>
        </div>
      </div>
      
      {/* Container ve Item kısmı */}
      <div className="flex flex-wrap justify-between w-full h-screen bg-black gap-4">
        {/* 1. Fotoğraf */}
        <div className="relative flex-[calc(100%/6)] sm:flex-[calc(100%/6)] lg:flex-[calc(100%/6)] overflow-hidden bg-cover filter saturate-[90%] transition-all duration-1000 hover:flex-[calc(40%)] hover:filter-saturate-[120%] group"
          style={{
            backgroundImage: "url(/images/horrorbackgraund.jpg)", // İlk fotoğraf
            backgroundPosition: "72% 35%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
          <div className="quote absolute text-white bottom-1/3 left-[5rem] w-[calc(100%-10rem)] opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-x-0">
            <p className="relative inline-block mb-7 text-xl italic before:absolute before:text-[5.5rem] before:opacity-60 before:left-[-2rem] before:top-4 before:transform before:translate-x-[-100%] after:absolute after:text-[5.5rem] after:opacity-60 after:right-[-2rem] after:bottom-2 after:transform after:translate-x-[100%]">
              ben furkan 
            </p>
            <span className="absolute text-right bottom-[-2rem] right-0 text-lg font-bold transform translate-x-[4rem] translate-y-[100%] before:content-['—'] before:mr-2">
              naber
            </span>
          </div>
        </div>

        {/* 2. Fotoğraf */}
        <div className="relative flex-[calc(100%/6)] sm:flex-[calc(100%/6)] lg:flex-[calc(100%/6)] overflow-hidden bg-cover filter saturate-[90%] transition-all duration-1000 hover:flex-[calc(40%)] hover:filter-saturate-[120%] group"
          style={{
            backgroundImage: "url(/images/horrorbackgraund.jpg)", // İkinci fotoğraf
            backgroundPosition: "60% 8%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
          <div className="quote absolute text-white bottom-1/3 left-[5rem] w-[calc(100%-10rem)] opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-x-0">
            <p className="relative inline-block mb-7 text-xl italic before:absolute before:text-[5.5rem] before:opacity-60 before:left-[-2rem] before:top-4 before:transform before:translate-x-[-100%] after:absolute after:text-[5.5rem] after:opacity-60 after:right-[-2rem] after:bottom-2 after:transform after:translate-x-[100%]">
              tuncay
            </p>
            <span className="absolute text-right bottom-[-2rem] right-0 text-lg font-bold transform translate-x-[4rem] translate-y-[100%] before:content-['—'] before:mr-2">
              hehehe tasarım yapsana heheheh :D
            </span>
          </div>
        </div>

        {/* 3. Fotoğraf */}
        <div className="relative flex-[calc(100%/6)] sm:flex-[calc(100%/6)] lg:flex-[calc(100%/6)] overflow-hidden bg-cover filter saturate-[90%] transition-all duration-1000 hover:flex-[calc(40%)] hover:filter-saturate-[120%] group"
          style={{
            backgroundImage: "url(/images/horrorbackgraund.jpg)", // Üçüncü fotoğraf
            backgroundPosition: "52% 8%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
          <div className="quote absolute text-white bottom-1/3 left-[5rem] w-[calc(100%-10rem)] opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-x-0">
            <p className="relative inline-block mb-7 text-xl italic before:absolute before:text-[5.5rem] before:opacity-60 before:left-[-2rem] before:top-4 before:transform before:translate-x-[-100%] after:absolute after:text-[5.5rem] after:opacity-60 after:right-[-2rem] after:bottom-2 after:transform after:translate-x-[100%]">
              ben
            </p>
            <span className="absolute text-right bottom-[-2rem] right-0 text-lg font-bold transform translate-x-[4rem] translate-y-[100%] before:content-['—'] before:mr-2">
              yazılım direktörü
            </span>
          </div>
        </div>

        {/* Diğer Fotoğrafları aynı şekilde ekleyebilirsiniz */}
      </div>
    </div>
  );
}
