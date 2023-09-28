import { isJsonString } from "./str.helper";

export function setLocalStorage(key: string, value: any) {
  try {
    const type = typeof value;
    if (type === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else if (type === "boolean") {
      localStorage.setItem(key, value ? "true" : "false");
    } else if (type === "bigint" || type === "number") {
      value = value.toString();
      localStorage.setItem(key, value);
    } else if (type === "string") {
      localStorage.setItem(key, value);
    } else {
      throw new Error(`Cannot assign this type of value (${type}) into localStorage`);
    }
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function getLocalStorage(key: string) {
  let value: any = localStorage.getItem(key);
  if (value === "true" || value === "false") {
    value = value === "true";
  } else if (isJsonString(value)) {
    value = JSON.parse(value);
  } else if (!isNaN(Number(value))) {
    value = Number(value);
  }
  return value;
}
