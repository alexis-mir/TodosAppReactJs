import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [items, setItems] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      const localStorageItems = localStorage.getItem(itemName);
      let parsedItems;
      if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = initialValue;
      } else {
        parsedItems = JSON.parse(localStorageItems);
      }
      setItems(parsedItems);
      console.log("use efect");
    } catch (e) {
      setError(e);
    }
  }, []);
  const saveItem = (newItems) => {
    try {
      const stringifiedItem = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItem);
      setItems(newItems);
    } catch (e) {
      setError(e);
    }
  };
  return {
    items,
    saveItem,
    error,
  };
}

export { useLocalStorage };
