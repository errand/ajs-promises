/** @module Settings
 * Class creating Settings.
 */
export default class Settings {
  /**
   * Create a point.
   */
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  /**
   * Setter for the User settings checking the right keys and values
   * @param {string} key - the key of the defaultSettings Map to set in the userSettings Map
   * @return {string} value - the value of the userSettings Map
   */
  /* eslint-disable no-unused-expressions */
  set(key, value) {
    switch (key) {
      case 'theme':
        ['dark', 'light', 'gray'].includes(value)
          ? this.userSettings.set(key, value)
          : (function () { throw new Error(`Bad value ${value} for Theme settings`); }());
        break;
      case 'music':
        ['trance', 'pop', 'rock', 'chillout', 'off'].includes(value)
          ? this.userSettings.set(key, value)
          : (function () { throw new Error(`Bad value ${value} for Music settings`); }());
        break;
      case 'difficulty':
        ['easy', 'normal', 'hard', 'nightmare'].includes(value)
          ? this.userSettings.set(key, value)
          : (function () { throw new Error(`Bad value ${value} for Difficulty settings`); }());
        break;
      default: (function () { throw new Error(`Setting ${key} doesn't exist`); }());
    }
  }

  /**
   * Compare default and user settings and return new Map
   * @return {Map} new Map of user settings
   */
  getSettings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
