import AuthForm from "@/components/auth/Form";
import { getTodos } from "@/lib/api/todos/queries";
import { getUserAuth } from "@/lib/auth/utils";

export default async function Home() {
  const { session } = await getUserAuth();
  const { todos } = await getTodos();
  return (
    <main className="">
      <h1 className="text-2xl font-bold my-2">Profile</h1>
      <pre className="bg-secondary p-4 rounded-lg my-2">
        {JSON.stringify(session, null, 2)}
      </pre>
      <AuthForm action="/api/sign-out" />
      <h1>
        {todos.map((t) => {
          return <li>{t.content}</li>;
        })}
      </h1>
    </main>
  );
}
