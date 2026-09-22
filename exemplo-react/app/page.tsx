// Permite escrever HTML em JS

import { Title } from "./Components/title.components";

import { Counter} from "./Components/counter.components"



export default function Home() {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <Title main='Bem-vido ao React!' subtitle='Estudando React e Next.js'></Title>

      <Counter></Counter>
    </div>
  );
}
