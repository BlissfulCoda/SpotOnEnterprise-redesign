import { useState } from "react";

export default function PageIndicator(): JSX.Element {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selectedInput: number = +e.currentTarget.value;
    console.log(selectedInput);
    setSelected(selectedInput);
  };
  return (
    <ul className="navigation">
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="num1"
          value="1"
          checked={selected === 1}
          onChange={handleSelect}
        />
      </li>
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="num2"
          value="2"
          checked={selected === 2}
          onChange={handleSelect}
        />
      </li>
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="num3"
          value="3"
          checked={selected === 3}
          onChange={handleSelect}
        />
      </li>
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="num4"
          value="4"
          checked={selected === 4}
          onChange={handleSelect}
        />
      </li>
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="num5"
          value="5"
          checked={selected === 5}
          onChange={handleSelect}
        />
      </li>
      <li>
        <input
          className="navigation-li"
          type="radio"
          id="home"
          value="6"
          checked={selected === 6}
          onChange={handleSelect}
        />
      </li>
    </ul>
  );
}
