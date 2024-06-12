import { Card, CardFooter, CardHeader, Skeleton } from "@nextui-org/react";

const SkeletonCard = () => {
  return (
    <div>
      <Card
        isFooterBlurred
        isPressable
        className="relative h-80 w-full rounded-xl bg-transparent shadow-xl"
      >
        {/* <video
          autoPlay
          loop
          muted
          className="h-full w-full rounded-2xl object-cover"
          src={props.blog.video}
        /> */}
        <Skeleton className="h-full w-full" />
        <CardHeader className="absolute top-1 z-10 flex-col items-start">
          <p className="text-tiny font-bold uppercase text-neutral-400"></p>
          <h4 className="text-start text-xl font-medium text-neutral-200"></h4>
        </CardHeader>
        <CardFooter className="absolute bottom-0 z-10 h-20 rounded-xl bg-neutral-950 bg-opacity-60">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-7 w-7 rounded-lg" />
              <Skeleton className="h-7 w-7 rounded-lg" />
              <Skeleton className="h-7 w-7 rounded-lg" />
            </div>
            <div className="">
              <p className="line-clamp-2 text-sm text-neutral-300"></p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
