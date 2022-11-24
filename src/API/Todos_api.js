import axios from "axios";

// Method used for request API
export const fetchTodos = async () => {
  const newArr = [];
  try {
    const { data, status } = await axios.get("https://jsonplaceholder.typicode.com/todos");
    if (status !== 200) throw new Error("Somethign went wrong!");

    for (let i = 0; i <= 14; i++) {
      newArr.push(data[i]);
    }
    return newArr;
  } catch (error) {
    throw error;
  }
};