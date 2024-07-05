"use client";
import Loader from "@/components/layout/loader";
import "@/styles/fontHeights.css";
import "@/styles/loader.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/blogs?slug=${params.slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(undefined);
    };
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center bg-stone-950 p-4 pt-24">
      <div className="w-full space-y-8 text-neutral-400 md:w-1/3">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-neutral-200">{data?.title}</p>
          <p className="text-xs">
            {dayjs(data?.createdAt).format("YYYY.MM.DD")}
          </p>
        </div>
        <div
          className="w-full overflow-hidden text-pretty"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>
    </div>
  );
};
export default BlogDetails;
