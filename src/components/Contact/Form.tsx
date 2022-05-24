const FormElements = () => {
  return (
    <div className="form-wrapper">
      <div className="form-row">
        <div className="row-element">
          <label className="label-input">First name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="row-element">
          <label className="label-input">Last name</label>
          <input type="text" className="form-input" />
        </div>
      </div>
      <div className="form-row">
        <div className="row-element">
          <label className="label-input">Email</label>
          <input type="email" className="form-input" />
        </div>

        <div className="row-element">
          <label className="label-input">Phone</label>
          <input type="text" className="form-input" />
        </div>
      </div>

      <div className="form-row">
        <div className="row-element full-row">
          <label className="label-input">Message</label>
          <textarea
            name="message"
            id="msg"
            cols={30}
            rows={10}
            className="msg-box"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FormElements;
