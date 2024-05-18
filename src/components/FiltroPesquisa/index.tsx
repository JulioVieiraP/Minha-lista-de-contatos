import { useState } from "react";
import { useDispatch } from "react-redux";
import { alteraTermoFiltro } from '../../redux/reducers/Filtros';

import * as S from './styles';


const FiltroPesquisa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const texto = event.target.value;
    setSearchTerm(texto);
    dispatch(alteraTermoFiltro({ termo: texto }));
  };

  return (
    <>
      <S.ModalBackdrop onClick={toggleModal} isOpen={isOpen} />
      <S.ModalContainer isOpen={isOpen}>
        <S.ModalContent>
          <S.ModalHeader>
            <S.CloseButton onClick={toggleModal}>Fechar</S.CloseButton>
          </S.ModalHeader>
          <S.ModalBody>
            <S.InputSearch
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleChange}
            />
          </S.ModalBody>
        </S.ModalContent>
      </S.ModalContainer>
      <S.FilterDropdown>
        <S.DropdownToggle onClick={toggleModal}>
          Pesquisar
        </S.DropdownToggle>
      </S.FilterDropdown>
    </>
  );
}

export default FiltroPesquisa;
