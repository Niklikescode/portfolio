import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
      <h1>let's build a portfolio</h1>
    </div>
  )
}
