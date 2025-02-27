import GlowingButton from "@/components/buttons/glowing-button";
import ContactForm from "./@components/contact-form";
import Faq from "./@components/faq";
import GoogleMapsProvider from "./@components/google-maps";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-36 text-white">
      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <GlowingButton title={"Cesaretimi Sınamak İstiyorum"}/>
        <p className="text-[32px] leading-[56px] font-semibold text-red-600">
          Karanlık Zindanlar, Sonsuz Macera
        </p>
        <p className="max-w-[650px] font-serif text-gray-300">
          Zindanlar seni bekliyor. Bu, sıradan bir yolculuk değil; karanlık, tehlikelerle dolu. Adımını at ve gücünü keşfet. Her köşe, seni bekleyen yeni bir mücadele ile dolu.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full max-w-[1500px] items-center justify-center mt-5 sm:t-28">
        <GoogleMapsProvider />
        <ContactForm />
      </div>

      <div className="max-w-[1500px] w-full p-5">
        <Faq />
      </div>
    </div>
  );
}
