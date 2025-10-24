import Link from "next/link";

export default function BannerHero() {
  return (
    <div className="h-[600px] flex items-center justify-center">
      <div className="container-section flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-[#cbcbcb] text-center title-mobile md:text-9xl md:font-bold">
            Chronos
          </h1>
          <p className="text-white text-center">
            Sua nova maneira de gerenciar o tempo.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-white md:text-2xl text-center mx-auto">
            A Chronos foi fundada por Hudson Junior, Riquelme Campos, Janaina Alves e Luiz Otávio, que, durante o período de graduação, perceberam uma lacuna no mercado de aplicativos de produtividade e finanças pessoais. Diante disso, decidiram unir esforços para criar uma solução integrada e simples que ajudasse as pessoas a organizar compromissos e controlar gastos em um único ambiente digital. O objetivo da Chronos é oferecer um sistema web intuitivo, acessível e eficiente, que proporcione mais controle, praticidade e organização no dia a dia dos usuários.
          </p>

          <Link
            href="/agendamento"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300 text-sm font-medium self-center w-fit"
          >
            Comece agora
          </Link>
        </div>
      </div>
    </div>
  );
}
