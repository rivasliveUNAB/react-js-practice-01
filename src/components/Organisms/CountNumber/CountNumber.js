import Title from "../../Atoms/Title";
import MinAndMaxInput from "../../Molecules/MinAndMaxInput";
import ActionCount from "../../Molecules/ActionCount/ActionCount";

const CountNumber = ({min, max, handleInput, count, onMinus, onPlus}) => {
  return <>
    <Title htmlTag="h1">Contador de numeros</Title>
    <MinAndMaxInput min={min} max={max} handleInput={handleInput}/>
    <ActionCount count={count} onMinus={onMinus} onPlus={onPlus}/>
  </>
}

export default CountNumber;