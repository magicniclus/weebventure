/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Realisations = () => {
  return (
    <section className="w-full md:mt-14">
      <div className="max-w-5xl mx-auto py-4 px-2 flex justify-between flex-col flex-col items-center">
        <h2 className="text-textDev mx-auto font-extrabold text-[36px] mt-10 titleLeftText">
          Nos dernières réalisations
        </h2>
        <Carousel className="mt-10">
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/duval.png"
                alt="duval"
                className="shadow-md"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/avenueimmo.png"
                alt="avenueimmo"
                className="shadow-md"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/terabois.png"
                alt="terabois"
                className="shadow-md"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/signature.png"
                alt="signature"
                className="shadow-md"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/dutruch.png"
                alt="dutruch"
                className="shadow-md"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img
                src="/projects/maprimerenov.png"
                alt="maprimerenov"
                className="shadow-md"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Realisations;
