import "./Popup.scss";

export const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <p>Share this event with a friend!</p>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};
