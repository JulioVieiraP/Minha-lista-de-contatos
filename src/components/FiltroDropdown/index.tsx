import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

import * as S from './styles'


const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = ['Todos', 'Favoritos', 'Recentes'];

  return (
    <S.filterDropdown>
      <S.dropdownToggle onClick={toggleDropdown}>
        <FaFilter />
      </S.dropdownToggle>
      {isOpen && (
        <S.DropdownMenu>
          {items.map((item, index) => (
            <S.DropdownItem key={index} onClick={() => alert(`Filtrando por: ${item}`)}>
              {item}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.filterDropdown>
  );
};

export default FilterDropdown;
