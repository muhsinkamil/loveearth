const FormElements = () => {
  return (
    <div className="form-wrapper">
      <div className="form-row">
        {/* <div className="row-element"> */}
        {/* <label>First name</label> */}
        <input type="text" className="form-input" />
        {/* </div> */}
        {/* <div className="row-element"> */}
        {/* <label>Last name</label> */}
        <input type="text" className="form-input" />
        {/* </div> */}
      </div>
      <div className="form-row">
        {/* <div className="row-element"> */}
        {/* <label>Email</label> */}
        <input type="email" className="form-input" />
        {/* </div> */}

        {/* <div className="row-element"> */}
        {/* <label>Phone</label> */}
        <input type="text" className="form-input" />
        {/* </div> */}
      </div>

      <div className="form-row">
        <textarea
          name="message"
          id="msg"
          cols={30}
          rows={10}
          className="msg-box"
        ></textarea>
      </div>
    </div>
  );
};

export default FormElements;
