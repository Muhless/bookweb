import localFont from "next/font/local";
import {
  Footer,
  Hero,
  Latest,
  Navbar,
  Popular,
  Subscribe,
  Testimonials,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-white">
        <div className="px-10">
          <Navbar />
          <Popular />
          <Latest />
          <Subscribe />
          <Testimonials />
        </div>
        <Footer />
      </main>
    </div>
  );
}
