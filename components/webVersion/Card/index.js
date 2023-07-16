import style from "./style";
import "../../../assets/placeholder-image.png";
import Link from "next/link";
import {defaultLinks,defaultImageLink} from "@/const/defaultLink";

export default function Card(props) {
  const defaultImage = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80";
  const defaultLinkR = defaultLinks(props.product.retailer);
  const defaultImageLinkR = defaultImageLink(props.product.retailer);
  console.log(props.product.imageLink)

  return (
    <div className="lg:w-1/3 p-8 md:w-1/2">
      <div className={style}>
        
        <Link href={props.product.productLink=""?defaultLinkR:props.product.productLink} className="w-full h-full">
        <div className="h-2/3 overflow-hidden rounded-lg">
          <div className="overflow-hidden">
            <img className="object-cover h-60 " 
            src={(props.product.imageLink==""|props.product.imageLink==	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")?defaultImage:props.product.imageLink}></img>
          </div>
        </div>
        <div className="h-1/3 flex flex-wrap p-6 overflow-hidden bg-white">
          <div className="h-2/3 text-lg w-full overflow-hidden">{props.product.itemName}</div>
          <div className="w-1/3 text-3xl">{props.product.currentPrice}$</div>
          <div className="w-1/3 text-md line-through text-red-600">Was {props.product.rrp}$</div>
          <div className="w-1/3 text-md text-red-600">
            {Math.round(props.product.discountPercentage * 100)}% off

          </div>
        </div>
        <div className="relative h-20 w-20 -top-44 left-4 bg-white rounded-full overflow-hidden">
            <img className="object-cover h-20 w-20" src={defaultImageLinkR}></img>
        </div>
        <div className="relative h-7 w-32 -top-64 left-60 bg-white border-2 border-red-500 overflow-hidden align-middle">
          <p className="text-center">Save {props.product.discountAmount}$!</p>
        </div>
        </Link>
      </div>
    </div>
  );
}
