import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className={"flex flex-col justify-start min-h-screen bg-amber-200"}>
            <Navbar />

            <div className={"h-[calc(100dvh-80px)] flex justify-between items-center px-20"}>
                <div className={"flex flex-col justify-center items-start w-1/2"}>
                    <h1 className={"text-5xl font-black text-black"}>Welcome to FORGE</h1>
                    <p className={"text-lg text-black mb-10"}>
                        Build your future computer. Choose your components, customize your design, and get started on your dream machine today!
                    </p>
                    <div className={"flex justify-center items-center gap-5 mb-10"}>
                        <button className={"bg-black text-white px-4 py-2 rounded-md border-2 border-black hover:border-gray-800 hover:bg-gray-800 transition duration-300"}>
                            <Link href="/builder">Get Started</Link>
                        </button>

                        <button className={"bg-white text-black px-4 py-2 rounded-md border-2 border-black hover:bg-gray-200 transition duration-300"}>
                            <Link href="/about">Learn More</Link>
                        </button>
                    </div>
                </div>
                <Image src={"/assets/computer.png"} alt={"Computer Image"} width={350} height={350} className={"mb-10"} />
            </div>
        </div>
    );
}
