"use client";
import Background from "@/components/layout/background";
import {
  mdiCamera,
  mdiChefHat,
  mdiCodeJson,
  mdiDevices,
  mdiForest,
  mdiPlaneTrain,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Blogs = () => {
  type Blog = {
    _id: string;
    title: string;
    image: string;
    categories: Array<String>;
    createdAt: Date;
    summary: string;
    video: string;
    slug: string;
    author: any;
  };
  const [mounted, setMounted] = useState(false);
  const [firstMount, setFirstMount] = useState(true);
  const [activeFilters, setActiveFilters] = useState<any>([]);
  const [blogs, setBlogs] = useState<any>([]);
  const router = useRouter();

  const toggleFilter = (filter: any) => {
    setActiveFilters((prevFilters: any) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f: any) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const blogs = await res.json();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setMounted(true);
    if (firstMount) {
      setTimeout(() => {
        setFirstMount(false);
      }, 1000);
    }
  }, [firstMount]);

  useEffect(() => {
    console.log("Hello world");
  }, [activeFilters]);

  const filters = [
    {
      label: "Technology",
      icon: <Icon className="h-5 w-5" path={mdiDevices} />,
    },
    {
      label: "Web development",
      icon: <Icon className="h-5 w-5" path={mdiCodeJson} />,
    },
    {
      label: "Life style",
      icon: <Icon className="h-5 w-5" path={mdiForest} />,
    },
    {
      label: "Travel",
      icon: <Icon className="h-5 w-5" path={mdiPlaneTrain} />,
    },
    { label: "Cooking", icon: <Icon className="h-5 w-5" path={mdiChefHat} /> },
    {
      label: "Photograph",
      icon: <Icon className="h-5 w-5" path={mdiCamera} />,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-tl from-black to-gray-700 transition-opacity ${
        mounted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="fixed left-0 top-0 z-0 hidden h-full w-full items-center gap-12 overflow-hidden opacity-10 md:flex">
        <Background />
      </div>
      <div className="container space-y-8 pt-24">
        <div>
          <p className="text-3xl font-bold">Blogs</p>
          <p className="text-sm">
            From Bits to Pixels: My Tech & Life Adventures
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {filters.map((filter, index) => (
            <Button
              key={index}
              onClick={() => toggleFilter(filter.label)}
              style={{
                transitionDelay: firstMount ? `${index * 200}ms` : "0ms",
              }}
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${
                activeFilters.includes(filter.label)
                  ? "bg-neutral-100 text-neutral-700"
                  : "bg-neutral-700 bg-opacity-30 text-slate-300"
              } flex transform items-center gap-1 rounded-lg px-4 py-1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-neutral-700 active:scale-95`}
            >
              {filter.label} {filter.icon}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-4">
          {blogs?.map((blog: Blog, idx: any) => {
            return (
              <button
                onClick={() => {
                  router.push(`/blogs/${blog.slug}`);
                }}
                key={idx}
                className="col-span-1 transform rounded-lg bg-slate-700 bg-opacity-30 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 active:scale-95"
              >
                <video
                  src={blog.video}
                  className="rounded-t-lg"
                  loop
                  muted
                  autoPlay
                />
                <div className="space-y-4 p-4">
                  <div>
                    <p className="truncate font-bold text-slate-200">
                      {blog.title}
                    </p>
                    <p className="line-clamp-2 text-sm">{blog.summary}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">
                      {dayjs(blog.createdAt).format("YYYY.MM.DD")}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
