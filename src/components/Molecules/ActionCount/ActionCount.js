import Button from "../../Atoms/Button";

const ActionCount = ({ onMinus, onPlus, count }) => {
  return <div className="w-100 d-flex justify-content-center align-items-center">
    <Button className="btn" onClick={onMinus}>-</Button>
    <span className="count-text">{count}</span>
    <Button className="btn" onClick={onPlus}>+</Button>
  </div>
}

export default ActionCount;