// Permite escrever HTML em JS
import Pagina from "./Components/page.components";

export default function Home() {
  return (
    <Pagina titulo="Página inicial" subtitle="Bem-vindo ao React!">
      <span>Conteudo da pagina!</span>
    </Pagina>
  );
}