import { mdiPenPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Link } from "@nextui-org/react";

const AdminBlogs = () => {
  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-4xl font-bold text-neutral-600">Blogs</p>

        <Button
          href="/admin/blogs/create"
          as={Link}
          className="transform rounded-xl bg-neutral-300 p-4 text-neutral-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <Icon path={mdiPenPlus} className="h-10 w-10" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4"></div>
    </div>
  );
};

export default AdminBlogs;
