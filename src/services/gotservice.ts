import 'whatwg-fetch'

import { Character } from "../models/character";
import { House } from "../models/house";

export class GotApi {
  private static parseJSON(response: Response) {
    return response.json();
  }
  public getCharacters(page: number, pageSize: number = 10): Promise<Character[]> {
    // const url ="https://www.anapioficeandfire.com/api/characters";
    // tslint:disable-next-line:no-console
    console.log('Retrieve chars');
    return fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
      .then(GotApi.parseJSON)
      .then((response) => {
        return response.map((c: any) => {
          return Object.assign(new Character(), c)
        });
        
      });
    } 

  public getHouses(page: number, pageSize: number = 10): Promise<House[]> {
    // const url ="https://www.anapioficeandfire.com/api/characters";
    // tslint:disable-next-line:no-console
    console.log('Retrieve chars');
    return fetch(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`)
      .then(GotApi.parseJSON)
      .then((response) => {
        return response.map((c: any) => {
          return Object.assign(new House(), c)
        });

      });
  }     
}

export default new GotApi();