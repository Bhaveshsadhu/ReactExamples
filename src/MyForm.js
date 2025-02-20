import { useRef } from "react";

export const MyForm = () => {
  const nameRef = useRef();
  const addRef = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(nameRef.current.value); //this will fetch value typed in input
    console.log(addRef.current.value); //this will fetch value typed in input
  };
  return (
    <>
      <form className="myform m-5" onSubmit={handleOnSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          ref={nameRef}
          required
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="Address"
          ref={addRef}
          required
        ></input>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};
