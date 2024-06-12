import { mdiChefHat, mdiForest, mdiPlaneTrain } from "@mdi/js";
import Icon from "@mdi/react";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import dayjs from "dayjs";

const BlogCard = (props: any) => {
  return (
    <div>
      <Card
        isFooterBlurred
        isPressable
        className="relative h-80 w-full rounded-xl bg-transparent shadow-xl"
      >
        <video
          autoPlay
          loop
          muted
          className="h-full w-full rounded-2xl object-cover"
          src={props.blog.video}
        />
        <div className="absolute top-0 z-10 h-1/2 w-full rounded-xl bg-gradient-to-b from-black"></div>
        <CardHeader className="absolute top-1 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-neutral-400">
            {dayjs(props.blog.createdAt).format("YYYY.MM.DD")}
          </p>
          <h4 className="text-start text-xl font-medium text-neutral-200">
            {props.blog.title}
          </h4>
        </CardHeader>
        <CardFooter className="absolute bottom-0 z-10 h-20 rounded-xl bg-neutral-950 bg-opacity-60">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="rounded-lg bg-white p-1">
                <Icon path={mdiPlaneTrain} className="h-5 w-5" />
              </div>
              <div className="rounded-lg bg-white p-1">
                <Icon path={mdiForest} className="h-5 w-5" />
              </div>
              <div className="rounded-lg bg-white p-1">
                <Icon path={mdiChefHat} className="h-5 w-5" />
              </div>
            </div>
            <div className="">
              <p className="line-clamp-2 text-sm text-neutral-300">
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
