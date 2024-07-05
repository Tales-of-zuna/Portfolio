"use client";
import Background from "@/components/layout/background";
import BlogCard from "@/components/layout/cards/blogCard";
import Loader from "@/components/layout/loader";
import {
  mdiApplicationBraces,
  mdiChefHat,
  mdiCompare,
  mdiDevices,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Experiments = () => {
  const [mounted, setMounted] = useState(false);
  const [firstMount, setFirstMount] = useState(true);
  const [activeFilters, setActiveFilters] = useState<any>([]);
  const [blogs, setBlogs] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
      try {
        let url = "/api/blogs?type=experiment&";
        if (activeFilters.length > 0) {
          url += `category=${activeFilters.join("&category=")}`;
        }
        const res = await fetch(url);
        const blogs = await res.json();
        setBlogs(blogs);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [activeFilters]);

  useEffect(() => {
    setMounted(true);
    if (firstMount) {
      setTimeout(() => {
        setFirstMount(false);
      }, 1000);
    }
  }, [firstMount]);

  const filters = [
    {
      label: "Technology",
      icon: <Icon className="h-5 w-5" path={mdiDevices} />,
    },
    {
      label: "Performance",
      icon: <Icon className="h-5 w-5" path={mdiCompare} />,
    },
    {
      label: "Software",
      icon: <Icon className="h-5 w-5" path={mdiApplicationBraces} />,
    },

    { label: "Cooking", icon: <Icon className="h-5 w-5" path={mdiChefHat} /> },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-tl from-black to-neutral-700 transition-opacity ${
        mounted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="fixed bottom-0 left-0 z-0 h-full w-full items-center gap-12 overflow-hidden opacity-10 md:top-0">
        <Background />
      </div>
      <div className="container space-y-8 pt-24">
        <div>
          <p className="text-3xl font-bold">Experiments</p>
          <p className="text-sm">
            From Ideas to Study: A Glimpse into My Tech Lab
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
              } flex transform items-center gap-1 rounded-lg px-4 py-1 transition-all duration-300 ease-in-out hover:scale-105 hover:text-neutral-700 active:scale-95 md:hover:bg-white`}
            >
              {filter.label} {filter.icon}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {!loading ? (
            blogs?.map((blog: any, idx: any) => {
              return <BlogCard key={idx} blog={blog} />;
            })
          ) : (
            <div className="col-span-4 flex h-96 items-center justify-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiments;
