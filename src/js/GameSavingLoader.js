import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

/** @module GameSavingLoader
 * Class creating GameSavingLoader.
 */
export default class GameSavingLoader {
  /**
   * Load buffer into the memory as Uint16Array
   * @param {ArrayBuffer} buffer - ArrayBuffer for further conversion
   */
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => console.log(response))
      .then((response) => new GameSaving(JSON.parse(response)));
  }

  /* load() {
    const data = read(); // возвращается Promise!
    const value = json(data); // возвращается Promise!
    return value;
  } */

  /**
   * Converts Uint16Array into string using String.fromCharCode
   * @return {string} the result of the String.fromCharCode method
   */
  toString() {
    return String.fromCharCode.apply(null, this.buffer);
  }
}
