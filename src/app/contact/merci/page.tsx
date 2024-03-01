import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav contact={false} />
      <main className="w-full container mx-auto min-h-[calc(100vh-110px)] flex justify-center items-center">
        <div className="max-w-5xl w-full flex justify-center items-center flex-col">
          <h1 className="text-textDev text-[32px] font-extrabold">
            Merci pour votre message
          </h1>
          <p>Nous vous recontacterons dans les plus brefs délais.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
