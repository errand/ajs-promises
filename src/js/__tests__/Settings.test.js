/* eslint-disable quotes */
import Settings from '../Settings';

test('Throw if bad value for theme', () => {
  const settings = new Settings();
  expect(() => settings.set('theme', 'asdfasdf')).toThrow();
});

test('Throw if bad value for music', () => {
  const settings = new Settings();
  expect(() => settings.set('music', 'asdfasdf')).toThrow();
});

test('Throw if bad value for difficulty', () => {
  const settings = new Settings();
  expect(() => settings.set('difficulty', 'asdfasdf')).toThrow();
});

test('Throw if settings doesn\'t exist', () => {
  const settings = new Settings();
  expect(() => settings.set('difficdsulty', 'asdfasdf')).toThrow();
});

test('Should accept keys and values', () => {
  const settings = new Settings();
  settings.set('theme', 'gray');
  settings.set('music', 'pop');
  settings.set('difficulty', 'hard');

  const expected = "[[\"theme\",\"gray\"],[\"music\",\"pop\"],[\"difficulty\",\"hard\"]]";
  const recieved = JSON.stringify((Array.from(settings.getSettings().entries())));

  expect(recieved).toEqual(expected);
});

test('Should concat Maps', () => {
  const settings = new Settings();
  settings.set('theme', 'gray');
  settings.set('music', 'pop');

  const expected = "[[\"theme\",\"gray\"],[\"music\",\"pop\"],[\"difficulty\",\"easy\"]]";
  const recieved = JSON.stringify((Array.from(settings.getSettings().entries())));

  expect(recieved).toEqual(expected);
});
