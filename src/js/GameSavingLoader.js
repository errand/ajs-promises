import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

/** @module GameSavingLoader
 * Class creating GameSavingLoader.
 */
export default class GameSavingLoader {
  /**
   * Load buffer into the memory as Uint16Array using Promises
   */
  static load() {
    return read()
      .then(response => json(response))
      .then(response => new GameSaving(JSON.parse(response)));
  }
}
