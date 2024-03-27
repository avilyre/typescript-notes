interface UseLocalStorage<T> {
  setItem: (value: T) => void
  getItem: () => T | undefined;
  removeItem: () => void;
}

interface UseLocalStorageOptions {
  prefix?: {
    symbol?: string,
    appName: string
  }
}

const useLocalStorage = <T>(key: string, options?: UseLocalStorageOptions): UseLocalStorage<T> => {
  const isServer = typeof window === "undefined";

  if (isServer) throw new Error("This hook can only be used on the client side");
  if (key === "") throw new TypeError("Key must not be an empty string");

  let storageKey = key;

  if (options?.prefix) {
    storageKey = options.prefix.symbol
      ? `${options.prefix.symbol}${options.prefix.appName}`
      : options.prefix.appName;
  }

  const setItem = (value: T): void => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  const getItem = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(error);
    }
  }

  const removeItem = (): void => {
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    setItem,
    getItem,
    removeItem
  }
}

const { getItem } = useLocalStorage<string>("language", {
  prefix: {
    symbol: "@",
    appName: "typescript-notes"
  }
});