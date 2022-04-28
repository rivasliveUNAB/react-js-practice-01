// Button
const Button = ({className, onClick, ...restProps}) => {
  return (
    <button
      {...restProps}
      className={`btn ${className}`}
      onClick={onClick}
    />
  );
}

export default Button;