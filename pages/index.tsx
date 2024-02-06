import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>


      {/* header */}
      <Header />

      {/* hero */}


      {/* about */}


      {/* experience */}


      {/* skills */}


      {/* projects */}


      {/* contact me */}



      <h1 className="text-blue-800">Let's build a portfolio</h1>
    </div>
  )
}
