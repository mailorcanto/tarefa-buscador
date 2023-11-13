import { useState } from "react";
import axios from "axios";
import Card from "../../components/card";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./index.css"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Dark() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main><Inicial /></main>
    </ThemeProvider>
  );
}

function Inicial () {
  const [nomeUsuario, setnomeUsuario] = useState(""); //input
  const [listaRepositorios, setlistaRepositorios] = useState([]); //repositório(s) retornado(s)
  
  return (
    <div className="inicial">
      <h1>Buscar usuário no Github</h1>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        value={nomeUsuario}
        onChange={(e) => setnomeUsuario(e.target.value)} // atualiza o estado com o valor do input
      />
      <button onClick={() => carregaRepositorios(nomeUsuario, setnomeUsuario, setlistaRepositorios)}>
        Buscar
      </button>
      <div className="cards">
        {listaRepositorios.map((repositorio) => (
          // renderiza os repositórios do usuário em cards
          <Card
            key={repositorio.id}
            title={repositorio.name}
            content={repositorio.description}
            image={repositorio.owner.avatar_url}
            link={repositorio.html_url}
          />
        ))}
      </div>
    </div>
  );
}

// função para carregar os repositórios do usuário
async function carregaRepositorios(nomeUsuario, setnomeUsuario, setlistaRepositorios) {
  if (nomeUsuario) {
    // se o input não estiver vazio
    try {
      const response = await axios.get(
        `https://api.github.com/users/${nomeUsuario}/repos`
      );
      setlistaRepositorios(response.data); // atualiza o estado com os repositórios
    } catch (error) {
      console.log(error);
    }
  } else {
    setlistaRepositorios([]); // se o input estiver vazio, limpa tela
  }
}

export default Dark;
