import Link from "next/link";

export default function Menu() {
  return (
    <div>
        <ul>
            <Link href="/"><li>Inicio</li></Link>
            <Link href="/Contador"><li>Contador</li></Link>
            <Link href="/Todo-list"><li>Todo-List</li></Link>
          </ul>
    </div>
  )
}
