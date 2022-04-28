const Label = ({ htmlFor, name, children }) => {
  return <label htmlFor={htmlFor}>
    <p>{name}:</p>
    {children}
  </label>
}

export default Label