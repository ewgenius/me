import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import { Layout } from "@components/Layout";

export default function Home() {
  return (
    <Layout>
      <header className="flex flex-col justify-center items-center pb-8">
        <Image src="/images/avatar.png" width={192} height={192} alt="logo" />
        <h1 className="text-3xl font-bold">ewgenius</h1>
        <p className="text-gray-600 dark:text-gray-300">Making things...</p>
      </header>
      <div className="flex flex-col text-lg justify-center items-center">
        <nav className="">
          {/* <Link href="/resume">
            <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
              resume
            </a>
          </Link> */}
          <Link href="/contacts">
            <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
              contacts
            </a>
          </Link>
        </nav>
      </div>
    </Layout>
  );
}
