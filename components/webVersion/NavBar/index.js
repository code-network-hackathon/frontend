import Image from "next/image"
import Link from "next/link"

export default function NavBar(){
    return(<div className="w-full h-16 flex flex-wrap font-mono flex">
        <Link href="/main"><Image src="/chaotic-good-logo.png" width={300} height={100} className="h-full"></Image></Link>
        <div className="w-1/5 h-full text-center inline-block align-middle flex text-3xl hover:font-bold"><Link href="/main" className="m-auto w-full h-full">On Sale Right Now</Link></div>
        <div className="w-1/5 h-full text-center inline-block align-middle flex text-3xl hover:font-bold" ><Link href="/frequetly" className="m-auto w-full h-full">Frequently On Sale</Link> </div>
    </div>)
}