import { Counter } from "../Components/counter.components";
import Pagina from "../Components/page.components";

export default function ContadorPage() {
  return (
    <Pagina titulo="Contador" subtitulo="Exemplo de Contador no Eeact">
        <Counter/>
        <Counter initialValue={100}/>
        <Counter initialValue={200}/>
    </Pagina>
  )
}
