const primaryButtonSmall = (props) => {
  const { disableBtn, text } = props;

  return (
    <button
      className="primary-button-small"
      onClick={props.onClick}
      disabled={disableBtn}
    >
      {text}
      {props.children}
    </button>
  );
};

export default primaryButtonSmall;
