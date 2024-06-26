import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">
          Você não está autorizado a ver esta página por que você não é um
          Admnistrador
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Bem vindo, administrador!</p>
    </main>
  );
}
