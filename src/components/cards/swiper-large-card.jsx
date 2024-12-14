import Image from "next/image";

export default function SwiperLargeCard({ imageSrc }) {
  return (
    <div className="w-full h-full">
      <Image
        src={imageSrc}
        alt="Dynamic Swiper Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
