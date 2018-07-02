export class Character {
  // The hypermedia URL of this resource
  public url: string;

  public name: string;
  // The name of this character
  public gender: string;
  // The gender of this character.
  public culture: string;
  // the culture that this character belongs to.
  public born: string;
  // Textual representation of when and where this character was born.
  public died: string;
  // Textual representation of when and where this character died.
  public titles: string[];
  // TThe titles that this character holds.
  public aliases: string[];
  // The aliases that this character goes by.
  public father: string
  // The character resource URL of this character's father.
  public mother: string;
  // The character resource URL of this character's mother.
  public spouse: string;
  // An array of Character resource URLs that has had a POV - chapter in this book.
  public allegiances: string[];
  // An array of House resource URLs that this character is loyal to.
  public books: string[];
  // An array of Book resource URLs that this character has been in.
  public povBooks: string[];
  // An array of Book resource URLs that this character has had a POV - chapter in.
  public tvSeries: string[];
  // An array of names of the seasons of Game of Thrones that this character has been in.
  public playedBy: string[];
}