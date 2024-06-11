import CreateBlog from "@/components/layout/admin/createBlog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { mdiPenPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";

const AdminBlogs = () => {
  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-4xl font-bold text-neutral-600">Blogs</p>
        <Drawer>
          <DrawerTrigger>
            <div className="transform rounded-xl bg-neutral-300 p-4 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <Icon path={mdiPenPlus} className="h-10 w-10" />
            </div>
          </DrawerTrigger>
          <DrawerContent className="p-4">
            <DrawerHeader>
              <DrawerDescription>
                <p className="text-center text-xl">Write a blog</p>
              </DrawerDescription>
            </DrawerHeader>
            <CreateBlog />
            <DrawerFooter className="flex items-center justify-center">
              <Button className="transform bg-neutral-700 font-bold uppercase text-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl active:translate-y-0 active:scale-95">
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="grid grid-cols-4 gap-4"></div>
    </div>
  );
};

export default AdminBlogs;
