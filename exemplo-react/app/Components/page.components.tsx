import { Calculator, House, ListTodo } from "lucide-react";
import Menu from "./menu.components";
import { Title } from "./title.components";

export default function Pagina(props: any) {

    const menuItem = [
      {text: "Home", link: "/", icon: House},
      {text: "Contador", link: "/Contador", icon: Calculator},
      {text: "Todo-list", link: "/Todo-list", icon: ListTodo},
  ]

return (
    <div className="flex min-h-screen">
        <aside className="page-side-bar">
          <h1 className="text-xl font-bold">Logo</h1>
          <Menu items={menuItem}/>
        </aside>
        <main className="main">
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
