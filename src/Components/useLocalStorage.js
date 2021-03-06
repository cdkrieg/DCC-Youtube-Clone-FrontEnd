import React, { useState, useEffect } from 'react';


    function useLocalStorageValue(defaultValue, key) {
        const [value, setValue] = useState(() => {
          const localStorageValue = window.localStorage.getItem(key);
          return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue
        })
        useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(value))
         }, [key, value]);
         return [value, setValue]
      }

      export default useLocalStorageValue
  