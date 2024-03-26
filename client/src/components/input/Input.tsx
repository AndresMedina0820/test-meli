import { useState } from "react";
import SearchIcon from "../../assets/ic_Search.png";
import { Props } from "../../interfaces/Input";

export const Input = ({ onSearch, onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="input__icon" onClick={onSubmit}>
        <img src={SearchIcon} alt="icono buscar" />
      </button>
    </div>
  );
};
