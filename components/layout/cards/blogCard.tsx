import {
  mdiApplicationBraces,
  mdiCamera,
  mdiChefHat,
  mdiCodeJson,
  mdiCompare,
  mdiDevices,
  mdiForest,
  mdiKubernetes,
  mdiLanguageGo,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLeaf,
  mdiNuxt,
  mdiPlaneTrain,
  mdiReact,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const BlogCard = (props: any) => {
  const router = useRouter();
  const icons = [
    {
      label: "Performance",
      icon: <Icon className="h-5 w-5" path={mdiCompare} />,
    },
    {
      label: "Software",
      icon: <Icon className="h-5 w-5" path={mdiApplicationBraces} />,
    },

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
    {
      label: "NextJS",
      icon: <Icon className="h-5 w-5" path={mdiReact} />,
    },
    {
      label: "MongoDB",
      icon: <Icon className="h-5 w-5" path={mdiLeaf} />,
    },
    {
      label: "ExpressJS",
      icon: <Icon className="h-5 w-5" path={mdiLanguageJavascript} />,
    },
    {
      label: "Go",
      icon: <Icon className="h-5 w-5" path={mdiLanguageGo} />,
    },
    {
      label: "Kubernetes",
      icon: <Icon className="h-5 w-5" path={mdiKubernetes} />,
    },
    {
      label: "Quarkus",
      icon: <Icon className="h-5 w-5" path={mdiLanguageJava} />,
    },
    {
      label: "NuxtJS",
      icon: <Icon className="h-5 w-5" path={mdiNuxt} />,
    },
  ];
  const shouldRenderIcon = (label: string) => {
    return props.blog.categories.includes(label);
  };
  return (
    <div>
      <Card
        onClick={() => {
          router.push(`/blogs/${props.blog.slug}`);
        }}
        isFooterBlurred
        isPressable
        className="relative h-80 w-full rounded-xl bg-transparent p-0 shadow-xl"
      >
        {props.blog.video != "/" ? (
          <video
            autoPlay
            loop
            muted
            className="h-full w-full rounded-2xl object-cover"
            src={props.blog.video}
          />
        ) : (
          <Image
            src={props.blog.image}
            alt=""
            className="h-full w-full rounded-2xl object-cover"
          />
        )}

        <div className="absolute -top-2 z-10 h-1/2 w-[600px] rounded-xl bg-gradient-to-b from-black"></div>
        <CardHeader className="absolute top-1 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-neutral-400">
            {dayjs(props.blog.createdAt).format("YYYY.MM.DD")}
          </p>
          <h4 className="text-start text-xl font-medium text-neutral-200">
            {props.blog.title}
          </h4>
        </CardHeader>
        <CardFooter className="absolute bottom-0 z-10 h-20 rounded-xl bg-neutral-950 bg-opacity-60">
          <div className="flex items-center gap-4">
            {icons.map((iconObj, index) =>
              shouldRenderIcon(iconObj.label) ? (
                <div key={index} className="flex gap-2">
                  <div className="rounded-lg bg-white p-1 text-neutral-800">
                    {iconObj.icon}
                  </div>
                </div>
              ) : null,
            )}
            <div className="">
              <p className="line-clamp-2 text-start text-sm text-neutral-300">
                {props.blog.summary}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
