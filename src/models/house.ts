export class House {
  public url: string; // The hypermedia URL of this resource
  public name: string; // The name of this house
  public region: string; // The region that this house resides in.
  public coatOfArms: string; // Text describing the coat of arms of this house.
  public words: string; // The words of this house.
  public titles: string[]; // The titles that this house holds.
  public seats: string[]; // The seats that this house holds.
  public currentLord: string; // The Character resource URL of this house's current lord.
  public heir: string; // The Character resource URL of this house's heir.
  public overlord: string; // The House resource URL that this house answers to.
  public founded: string; // The year that this house was founded.
  public founder: string; // The Character resource URL that founded this house.
  public diedOut: string; // The year that this house died out.
  public ancestralWeapons: string[]; // An array of names of the noteworthy weapons that this house owns.
  public cadetBranches: string[]; // An array of House resource URLs that was founded from this house.
  public swornMembers: string[]; // An array of Character resource URLs that are sworn to this house.
}