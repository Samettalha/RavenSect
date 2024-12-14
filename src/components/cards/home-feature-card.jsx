import React from "react";
import Image from "next/image";

export default function HomeFeatureCard({ imageUrl, title, description }) {
  return (
    <div className="flex gap-x-5 text-left max-w-[400px] h-[150px]">
      <div>
        <Image src={imageUrl} alt={title} width={56} height={56} />
      </div>
      <div className="flex max-w-[300px]  gap-2 w-full flex-col mt-2">
        <div>
          <p className="text-[20px] font-semibold">{title}</p>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
