import GlowingButton from "@/components/buttons/glowing-button";

export default function AboutUsOpening() {
  return (
    <div className="flex items-center justify-center pt-24  sm:py-36 px-5">
      <div className="flex items-center flex-col gap-5 justify-center max-w-[670px] w-full text-center text-white">
        <GlowingButton title={"Hakkımızda"} />
        <p className="font-semibold text-[32px] leading-[56px]">
          Geleceğin Teknolojisini Bugün Keşfet
        </p>
        <p>
          ...... tarafından geliştirilen bu eğitim stili ile teknolojinin kalbinde yer alıp hem kendinize hemde tüm dünyaya faydalı olabilirsiniz
        </p>
      </div>
    </div>
  );
}
