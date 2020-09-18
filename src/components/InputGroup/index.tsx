import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

import { MenuForm, Container } from './styles';

const InputGroup: React.FC = () => {
  const [ nome, setNome ] = useState<string>();
  const [ sobrenome, setSobrenome ] = useState<string>();
  const [ telefone, setTelefone ] = useState<string>();
  const [ email, setEmail ] = useState<string>();
  const [ senha, setSenha ] = useState<string>();
  const [ confirmaSenha, setConfirmaSenha ] = useState<string>();

  const [ redirect, setRedirect ] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext)

  //subimit form
  const HandleFormSubmit = async () => {
    const user = {
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha
    };
    
    try{
      const response = await signIn(user);

      if(response !== null){
        setRedirect(true);
      }
      else{
        console.log('erro no response !')
        setRedirect(false);
        return <Redirect to="/" />
      }
    } catch(error){
      console.log(error)
    }
    
  };

  if(redirect) {
    return <Redirect to="/home" />
  }
  else{
    return (
      <Container>
        <MenuForm>

          <input type="text" placeholder="nome" onChange={e => setNome(e.target.value)} />
          <input type="text" placeholder="sobrenome" onChange={e => setSobrenome(e.target.value)} />
          <input type="text" placeholder="telefone" onChange={e => setTelefone(e.target.value)} />
          <input type="email" placeholder="email pessoal" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="senha" onChange={e => setSenha(e.target.value)} />
          <input type="password" placeholder="confirmar senha" onChange={e => setConfirmaSenha(e.target.value)} />

          <p>
            Ao se cadastrar você automaticamente concorda com nossos <a href="/termos">Termos de Uso</a>
          </p>

          <button onClick={HandleFormSubmit} type="submit">Cadastrar</button>

        </MenuForm>
      </Container>
    );
  }
}

export default InputGroup;