import { Location } from "./Location";
import { Price } from "./Price";
import { User } from "./User";

class Event {
  public title:string;
  public date: Date;
  public city: string;
  public description: string;
  public banner: string;
  public categories: string[];
  public flyers: string[];
  public coupons: string[];
  public location: Location
  public participants: User[];
  public price: Price[];

  constructor(
    title: string,
    date: Date,
    city: string,
    description: string,
    banner: string,
    categories: string[],
    flyers: string[],
    coupons: string[],
    location: Location,
    participants: User[],
    price: Price[],
    ){
    this.title = title;
    this.date = date;
    this.city = city; 
    this.description = description;
    this.banner = banner;
    this.categories = categories
    this.flyers = flyers;
    this.coupons = coupons;
    this.location = location;
    this.participants = participants;
    this.price = price;
  };

}

export { Event }