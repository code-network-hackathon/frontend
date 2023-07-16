export function defaultLinks(retailer){
    switch(retailer){
        case "woolworths":
            return "https://www.woolworths.com.au/"
            break;
        case "ALDI":
            return "https://www.aldi.com.au/en/"
            break;
        case "coles":
            return "https://www.coles.com.au/"
            break;
        
        }
    }


export function defaultImageLink(retailer){
    switch(retailer){
        case "woolworths":
            return "https://i2.wp.com/millercentralshoppingcentre.com.au/wp-content/uploads/2018/07/Woolworths-logo.jpg?fit=555%2C564&ssl=1"
        case "ALDI":
            return "https://yt3.googleusercontent.com/ytc/AOPolaTw_7pB0tmuFVLB7nkIks3-n1abaO8YRJNH3cQnSvc=s900-c-k-c0x00ffffff-no-rj"
        case "Coles":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv9IUmQBgVSoJJyoXp9PN4z80QlweF-HzB3kOZ6OfLw&s"
        }
    }