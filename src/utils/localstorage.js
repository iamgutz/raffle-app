const available = () => typeof(Storage) !== "undefined";
export const clearStorage = () => available && window.localStorage.clear();
export const getFromStorage = key => available && JSON.parse(window.localStorage.getItem(key));
export const getStorage = () => available && window.localStorage;
export const removeFromStorage = key => available && window.localStorage.removeItem(key);
export const setInStorage = (key, value) => available && window.localStorage.setItem(key, JSON.stringify(value));
