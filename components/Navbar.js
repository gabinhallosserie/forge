import Link from "next/link";

export default function Navbar() {
    return (
        <div className={"w-screen flex justify-between items-center border-b-2 border-black py-5 px-20"}>
            <div className={"flex items-center"}>
                <Link href={"/"} className={"text-3xl font-black text-black"}>FORGE</Link>
            </div>

            <div className={"flex items-center gap-5"}>
                <Link href={"/builder"} className={"text-md font-semibold text-black"}>BUILDER</Link>
                <Link href={"/about"} className={"text-md font-semibold text-black "}>ABOUT</Link>
            </div>
        </div>
    )
}