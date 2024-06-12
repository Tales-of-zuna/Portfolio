import Navbar from "@/components/layout/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <section className="min-h-screen w-full">{children}</section>
      <footer className="absolute">{/* <Footer /> */}</footer>
    </main>
  );
};

export default MainLayout;
