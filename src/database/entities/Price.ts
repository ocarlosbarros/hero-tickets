class Price {
  public amount: number;
  public sector: string;

  constructor(amount: number, sector: string){
    this.amount = amount;
    this.sector = sector;
  };
  
}

export { Price }