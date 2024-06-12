"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  type blog = {
    createdAt: string;
    title: string;
    image: string;
    content: string;
  };
  const [data, setData] = useState<blog>();
  const [mounted, setMounted] = useState(false);
  const getBlog = async () => {
    const res = await fetch(`/api/blogs?slug=${params.slug}`);
    const data = await res.json();
    setData(data);
    console.log(data);
    return data;
  };
  useEffect(() => {
    getBlog();
    setMounted(true);
  }, []);
  return (
    <div
      className={`${
        mounted ? "opacity-100" : "opacity-0"
      } flex min-h-screen transform justify-center bg-stone-950 p-4 pt-24 transition-all duration-300 ease-in-out`}
    >
      <div className="z-10 w-full space-y-8 text-neutral-400 md:w-1/3">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-neutral-200">{data?.title}</p>
          <p className="text-xs">
            {dayjs(data?.createdAt).format("YYYY.MM.DD")}
          </p>
        </div>
        <div
          className="text-base"
          dangerouslySetInnerHTML={{ __html: data?.content as TrustedHTML }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;
