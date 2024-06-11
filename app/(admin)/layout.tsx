import AdminSidebar from "@/components/layout/admin/adminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-neutral-100">
      <nav className="w-1/5">
        <AdminSidebar />
      </nav>
      <section className="min-h-screen w-4/5 p-8">{children}</section>
      <footer className="">{/* <Footer /> */}</footer>
    </main>
  );
};

export default AdminLayout;
