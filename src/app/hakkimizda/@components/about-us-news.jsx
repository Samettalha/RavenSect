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
            Her yaştan farklı ilgi alanlarına sahip mühendisler için hazırlanmış, korku dolu bir yolculuğa çıkmaya hazır olun.
          </p>
        </div>
      </div>
    </div>
  );
}
