import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from "../../assets/Logo_ML.png";
import { Input } from "../input/Input";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    navigate(`/items?search=${searchValue}`);
  };

  return (
    <header>
      <div className="search container-header">
        <a href="/" className="search__brand">
          <img src={Logo} alt="logo" />
        </a>
        <div className="search__input">
          <Input onSearch={handleSearch} onSubmit={handleSubmit} />
        </div>
      </div>
    </header>
  );
};
