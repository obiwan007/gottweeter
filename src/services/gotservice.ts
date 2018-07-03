import 'whatwg-fetch';

import { Character } from "../models/character";
import { House } from "../models/house";

/**
 * Service Class for requesting data from the Game of Thrones API.
 *
 * @export
 * @class GotApi
 */
export class GotApi {
  private static parseJSON(response: Response) {
    return response.json();
  }
  /**
   * Retrive Characters from GoT API
   * @param {number} Index of the page you are requesting. Starting at 1
   * @param {number} Number of Character you will get per page. Default = 10. [pageSize=10]
   * @returns {Promise<Character[]>}
   * @memberof GotApi
   */
  public getCharacters(page: number, pageSize: number = 10): Promise<Character[]> {
    return fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
      .then(GotApi.parseJSON)
      .then((response) => {
        return response.map((c: any) => {
          return Object.assign(new Character(), c);
        });
      });
  }
  /**
   * Retrieve List of Houses frm GoT API
   * @param page Index of the page to load. Starting at 1
   * @param pageSize Number of Houses to load for a given page
   * @returns {Promise<House[]>} House Array
   * @memberof GotApi
   */
  public getHouses(page: number, pageSize: number = 10): Promise<House[]> {
    return fetch(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=${pageSize}`)
      .then(GotApi.parseJSON)
      .then((response) => {
        return response.map((c: any) => {
          return Object.assign(new House(), c);
        });

      });
  }
}

export default new GotApi();