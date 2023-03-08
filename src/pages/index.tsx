import { type NextPage } from "next";
import Head from "next/head";
import { log } from "next-axiom";
import { useEffect } from "react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    hello?.data?.greeting
      ? log.info("hello data changed", hello.data)
      : log.error("no data received...");
  }, [hello]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-4xl font-bold text-white">Welcome to T3!</h1>
        <p className="text-2xl text-white">
          {hello?.data?.greeting || "Loading..."}
        </p>
      </main>
    </>
  );
};

export default Home;
