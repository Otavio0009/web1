import Post from "./Components/post.components";

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mb-4">Exercício: Controle de Curtidas</h1>

      <Post />
    </main>
  );
}