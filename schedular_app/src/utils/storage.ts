export const clearStorageData = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

export const removeStorageItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage item "${key}":`, error);
  }
};

export const isStorageAvailable = () => {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};
