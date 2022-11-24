const Card = ({ title, status }) => {
    return (
      <div
        style={{
          borderStyle: "solid",
          margin: "15px 0px",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: status ? "green" : "#DC143C",
        }}
      >
        <h3 style={{ color: "white" }}>{title}</h3>
        <p style={{ color: "white" }}>status : {status ? "Completed" : "Uncompleted"}</p>
      </div>
    );
  };
  
  export default Card;