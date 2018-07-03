import 'whatwg-fetch';

import { House } from "../models/house";

/**
 * Service Class for handling IFTT requests
 */
export class IfftApi {
    /**
     * Sending tweets via IFTTT to Twitter
     * Text is a composition of the given House name and the region of the House.
     * @param {House} house instance
     * @returns {Promise<void>}
     * @memberof IfftApi
     */
    public sendHouseTweet(house: House): Promise<void> {
        return fetch(`https://maker.ifttt.com/trigger/mhp_challenge/with/key/mgLArA5BWrsgm39Yn8FWoVnrezDadQQcCsMixn34AS7`,
            {
                body: JSON.stringify({ value1: `${house.name} from ${house.region} is great!` }),

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: "POST",
                mode: 'no-cors',
            })
            .then(() => {
                return;
            });
    }
}

export default new IfftApi();