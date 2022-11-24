import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const value = {
      id: Math.random(),
      fname: data.fname,
      lname: data.lname,
    };

    setUsers((prevState) => [...prevState, value]);
    reset();
  };

  const listUsers = users.map((val, index) => (
    <tr key={val.id}>
      <th scope="row">{index + 1}</th>
      <td>{val.fname}</td>
      <td>{val.lname}</td>
    </tr>
  ));

  return (
    <section style={{ marginTop: "20px" }}>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="fname">
            First name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-describedby="fname"
            {...register("fname", {
              required: {
                value: true,
                message: "We need ur first name!",
              },
            })}
          />
        </div>
        {errors.fname && <p style={{ color: "red" }}>{errors.fname.message}</p>}
        <div className="input-group mb-3">
          <span className="input-group-text" id="lname">
            Last name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-describedby="lname"
            {...register("lname", {
              required: {
                value: true,
                message: "Last name is required!",
              },
            })}
          />
        </div>
        {errors.lname && <p style={{ color: "red" }}>{errors.lname.message}</p>}
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
};

export default Form;