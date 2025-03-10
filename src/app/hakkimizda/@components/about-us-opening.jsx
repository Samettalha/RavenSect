export default function AboutUsOpening() {
  return (
    <div className="flex items-center justify-center pt-24 sm:py-36 px-5 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("images/.jpg")' }}>
      <div className="flex items-center flex-col gap-5 justify-center max-w-[670px] w-full text-center text-white">
        <p className="font-semibold text-[62px] leading-[86px] text-yellow-400 animate-pulse">
          Biz kimiz 
        </p>
        <p className="text-gray-100">
         06.02.2025 tarihin de oyun yapmaya başlayan bir grup lise son öğrencileriydik RavenSect olarak.
         şuanda ise bir oyun geliştirme firmasıyız :D
        </p>
      </div>
    </div>
  );
}
