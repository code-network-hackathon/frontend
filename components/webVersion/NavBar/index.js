import Image from "next/image"
import Link from "next/link"

export default function NavBar(){
    return(<div className="w-full h-16 flex flex-wrap font-mono flex">
        <div className="w-1/5 h-full text-center inline-block align-middle flex text-3xl hover:font-bold underline"><Link href="/main" className="m-auto w-full h-full">Chaotic Good</Link></div>
        <div className="w-1/5 h-full text-center inline-block align-middle flex text-3xl hover:font-bold"><Link href="/main" className="m-auto w-full h-full">On Sale Right Now</Link></div>
        <div className="w-1/5 h-full text-center inline-block align-middle flex text-3xl hover:font-bold" ><Link href="/frequent" className="m-auto w-full h-full">Frequently On Sale</Link> </div>
    </div>)
}