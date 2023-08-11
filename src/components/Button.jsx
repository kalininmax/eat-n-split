/* eslint-disable react/prop-types */

const Button = ({ children, type, onClick }) => {
  return (
    <button className="button" type={type ? type : 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
