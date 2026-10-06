import Link from "next/link";
import { Title } from "./title.components";
import Menu from "./menu.components";

export default function Pagina(props: any) {

return (
    <div className="flex min-h-screen">
        <aside className="bg-red-900 p-6 w-64 flex flex-col gap-6">
          <h1 className="text-xl font-bold">Logo</h1>
          <Menu/>
        </aside>
        <main className="p-6 bg-gray-800 flex-1 flex flex-col gap-6">
          <Title 
            main={props.titulo}
            subtitle={props.subtitle}
          />
          <div>
            {props.children}
          </div>
        </main>
    </div>
  );
}
