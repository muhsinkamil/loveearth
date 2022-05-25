import Button from '../Button';
import './styles.scss';

const FormElements = () => {
  return (
    <form className="form-wrapper">
      <div className="form-row">
        <div className="row-element">
          <input type="text" className="form-input" />
          <label className="label-input">First name *</label>
        </div>
        <div className="row-element">
          <input type="text" className="form-input" />
          <label className="label-input">Last name</label>
        </div>
      </div>
      <div className="form-row">
        <div className="row-element">
          <input type="email" className="form-input" />
          <label className="label-input">Email *</label>
        </div>

        <div className="row-element">
          <input type="text" className="form-input" />
          <label className="label-input">Phone</label>
        </div>
      </div>

      <div className="form-row">
        <div className="row-element">
          <textarea
            name="message"
            id="msg"
            cols={30}
            rows={8}
            className="msg-box"
          ></textarea>
          <label className="label-input">Message *</label>
        </div>
      </div>

      <div className="btn-wrapper">
        <Button
          bfrContent="Submit"
          aftrContent="Drop a message"
          buttonOuterWidth="90px"
        />
      </div>
    </form>
  );
};

export default FormElements;
