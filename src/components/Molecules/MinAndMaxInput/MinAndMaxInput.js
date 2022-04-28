import Label from "../../Atoms/Label";
import Input from "../../Atoms/Input";

const MinAndMaxInput = ({ min, max, handleInput }) => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <Label name="Min" htmlFor="min">
        <Input
          min={0}
          id="min"
          value={min}
          type="number"
          placeholder="0"
          onChange={handleInput}
        />
      </Label>

      <Label name="Max" htmlFor="max">
        <Input
          min={10}
          id="max"
          value={max}
          type="number"
          placeholder="0"
          onChange={(event) => handleInput(event, 'max')}
        />
      </Label>
    </div>
  )
}

export default MinAndMaxInput;