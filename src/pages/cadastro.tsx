import React from 'react';

import Titulo from '../components/titulo';
import InputGroup from '../components/InputGroup';
import Footer from '../components/footer';

import { Formulario, Logo, Main } from '../styles';
import logo from '../styles/logo.svg';

const Cadastro: React.FC = () => {
  return (
    <>
      <Main>
        <Logo>
          <img src={logo} height={100} alt={'imagem da logo'} />
        </Logo>

        <Formulario>

          <Titulo />
          <InputGroup />
          <Footer />

        </Formulario>
        

      </Main>
    </>
  );
}

export default Cadastro;