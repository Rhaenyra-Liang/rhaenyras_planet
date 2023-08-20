import ContactPage from "@/components/Contact";
import NotesPage from "@/components/Notes";
import WorkPage from "@/components/Work";
import AboutPage from "@/components/about";
export default function Home() {
  return (
    <section className="h-screen overflow-auto">
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-[#822820] text-4xl font-bold text-center">
            Welcome to Rhaenyra's Planet
          </h1>
          <p className="text-[#808080] text-lg font-normal text-center pt-10">
            a SoftWare developer intern who is a Dancer
          </p>
        </div>
      </div>
      <AboutPage />
      <WorkPage />
      <NotesPage />
      <ContactPage />
    </section>
  );
}
