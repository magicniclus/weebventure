"use client";

import DessinProcess from "@/components/svg/DessinProcess";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const updateLoader = () => {
    // setTimeout(() => {
    //   setIsLoading(!isLoading);
    // }, 2000);
  };

  updateLoader();

  if (isLoading) {
    return (
      <>
        <main
          className={"flex min-h-screen flex-col items-center justify-center"}
        >
          {/* <Logo />
          <DessinOne />
          <DessinMarketing /> */}
          <DessinProcess />
        </main>
      </>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
