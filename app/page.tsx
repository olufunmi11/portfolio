import Image from "next/image";
import Link from "next/link";
// import Footer from "./components/footer";

export default function Home() {
  return (
    <main className=" h-screen p-20">
      {/* <h1 className="text-3xl">Home</h1> */}
      <Image
        // className="w-64 -mt-24"
        src="/images/funmi-profile.png"
        alt=""
        width={200}
        height={200}
      />{" "}
      <br />
      <div className="pl-16 md:pl-32 pb-52 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750]">
        <h2 className="text-[20px]  text-black font-semibold">
          Let&apos;s create beautiful websites you can&apos;t resist <br />{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#a88976]  to-[#8c7d67]">
            {" "}
            Web Development
          </span>
        </h2>
        <p className=" text-black-200 hidden md:block">
          This is Funmi Ekibolaji, a passionate DevOps Engineer with an interest
          in bridging the gap between development and operations team. With few
          years experience in cloud computing, automation and continuous
          integration/continuous deployment (CI/CD), I thrive in dynamic
          environments where collaboration and innovation is key!
        </p>
        <div className="flex-col md:flex-row hidden md:flex">
          <Link
            href="/aboutme"
            className="rounded-[20px] group relative bg-[#978a81]  hover:bg-blue-400 px-5 py-3 text-lg  text-black max-w-[200px]"
          >
            About Me
          </Link>
          <Link
            href="/myproject"
            className="rounded-[20px] group relative bg-[#978a81]  hover:bg-blue-400 px-5 py-3 text-lg  text-black max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
            My projects
          </Link>
          <Link
            href="/contactus"
            className="rounded-[20px] group relative bg-[#978a81]  hover:bg-blue-400 px-5 py-3 text-lg  text-black max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
            Contact me
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
