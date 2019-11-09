import {SaveData} from './model/slot-data';

export function sum(array: number[]) {
  return array.reduce((previous, current) => current += previous);
}

export function saveToLocalStorage(saveData: SaveData) {
  localStorage.setItem(`destiny-leveling-utility`, JSON.stringify(saveData));
}

export function loadFromLocalStorage(key: string): SaveData {
  return JSON.parse(localStorage.getItem(key)) as SaveData;
}
