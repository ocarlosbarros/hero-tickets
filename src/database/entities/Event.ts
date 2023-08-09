import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {
  public title:string;
  public location: Location
  public date: Date;
  public description: string;
  public banner: string;
  public coupons: string[];
  public participants: User[];
  public price: Price[];
  public city: string;

  constructor(title: string, location: Location, date: Date, description: string, banner: string, coupons: string[], participants: User[], price: Price[], city: string){
    this.title = title;
    this.location = location;
    this.date = date;
    this.description = description;
    this.banner = banner;
    this.coupons = coupons;
    this.participants = participants;
    this.price = price;
    this.city = city; 
  };

}

export { Event }