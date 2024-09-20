// dataFetcher.js

export const fetchData = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/5aecca04-8f20-4504-b084-a479ee8114dc');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Rethrow error to be caught in the importing module
    }
  };
  
  // Fetch data immediately and export it
  export const dataPromise = fetchData();  