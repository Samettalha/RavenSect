import React from "react";
import Link from "next/link";

const NewsCard = ({ date, month, title, description, linkHref }) => {
  return (
    <div className="rounded-xl  p-6 min-h-[300px] h-full flex flex-col justify-center text-white w-full bg-[url('/images/news-card-inactive.png')] bg-cover bg-center transition-all duration-500 ease-in-out hover:bg-[url('/images/news-card-active.png')]">
      {/* Date and Month */}
      <p className="text-sm text-[#9945FF]">{`${date} / ${month.toUpperCase()}`}</p>

      {/* Title */}
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-4 text-base text-gray-400">{description}</p>

      {/* Read More Link */}
      <Link href={linkHref} passHref target="blank">
        <div className="mt-6 inline-flex items-center text-sm text-gray-300 hover:text-white">
          DAHA FAZLA OKU
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
