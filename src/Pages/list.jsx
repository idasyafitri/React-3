import  Spinner  from "../component/spinner"
import { fetchTodos } from "../API/Todos_api";
import { useEffect, useState } from "react";
import Card from "../component/card.jsx";

// In here we making communication between API and client
const List = () => {
    const [list, setList] = useState({
      isLoading: true,
      data: [],
    });
  
    const fetchAPI = async () => {
      try {
        const data = await fetchTodos();
        setList((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            data,
          };
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchAPI();
  
      // fungsi array dibawah ini adalah untuk melakukan re-rendering
      // jika salah satu method dalam useEffect di trigger
    }, []);
  
    if (list.isLoading)
      return (
        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <Spinner />
        </section>
      );
  
    return (
      <section style={{ marginTop: "20px" }}>
        <h3>This is data :</h3>
  
        {list.data.map((val) => (
          <Card key={val.id} title={val.title} status={val.completed} />
        ))}
      </section>
    );
  };
  
  export default List;