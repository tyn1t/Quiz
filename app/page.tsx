import { Pontos } from "@/components/ponto";
import { Quiz } from "@/components/Quiz/quiz";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen ">
      <div className="flex w-screen items-center justify-center">
          <header className="w-full">
            <nav className="flex flex-wrap w-full justify-between px-10 items-center">
              <Pontos />
              <h1>
                <Link href="/contact" className="border-2  border-blue-300 hover:bg-blue-400">
                  @Gmail
                </Link>
              </h1>
            </nav>
          </header>
          
      </div>
      <section className="w-full md:px-20 my-5">
          <Quiz />
      </section>
    </main>
  );
}
