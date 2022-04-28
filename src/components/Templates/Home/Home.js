import {useEffect, useState} from "react";
import logo from "../../../assets/logo.svg";
import CountNumber from "../../Organisms/CountNumber";

export const HomeTemplate = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [count, setCount] = useState(min);

  const onPlus = () => {
    const countIsMax = count === max;
    if (countIsMax) return null;
    return setCount(count + 1)
  }

  const onMinus = () => {
    setCount(prevState => {
      if (prevState === min) return prevState;
      return prevState - 1;
    })
  }

  const handleInput = (event, type = 'min') => {
    const value = parseInt(event.target.value, 10);
    if (type === 'min') return setMin(value);
    return setMax(value);
  }

  useEffect(() => {
    setCount(min)
  }, [min])

  return (
    <header className="App-header">
      <img width={75} height={75} src={logo} className="App-logo" alt="logo"/>

      <CountNumber
        min={min}
        max={max}
        count={count}
        onPlus={onPlus}
        onMinus={onMinus}
        handleInput={handleInput}
      />
    </header>
  )
}

export default HomeTemplate;