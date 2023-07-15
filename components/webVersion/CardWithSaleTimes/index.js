import style from "./style";
import "../../../assets/placeholder-image.png";
import Link from "next/link";

export default function CardWithSaleTimes(props) {
  return (
    <div className="lg:w-1/3 p-8 md:w-1/2">
      <div className={style}>
        <Link href="https://www.woolworths.com.au/" className="w-full h-full">
        {
          //<div className="h-2/3">{props.product.ImageLink}</div>
        }
        <div className="h-2/3 overflow-hidden rounded-lg">
          <div className="overflow-hidden">
            <img className="object-cover h-60 " src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"></img>
          </div>
        </div>
        <div className="h-1/3 flex flex-wrap p-6 overflow-hidden bg-white">
          <div className="h-2/3 w-2/3 text-lg w-full overflow-hidden">{props.product.ItemName}</div>
          <div className="h-2/3 w-1/4 text-sm w-full overflow-hidden text-red-600">On sale for 1 time</div>
          <div className="w-1/3 text-lg">{props.product.CurrentPrice}</div>
          <div className="w-1/3 text-sm line-through text-red-600">Was {props.product.Rrp}</div>
          <div className="w-1/3 text-sm text-red-600">
            {Math.round(props.product.DiscountPercentage * 100)}% off

          </div>
        </div>
        <div className="relative h-20 w-20 -top-44 left-4 bg-white rounded-full overflow-hidden">
            <img className="object-cover h-20 w-20" src="https://pelicanwaterscommunity.com.au/wp-content/uploads/2017/11/Woolworths-logo.png"></img>
        </div>
        </Link>
      </div>
    </div>
  );
}
