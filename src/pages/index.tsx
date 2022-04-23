import { NextPage } from "next";
import Image from "next/image";

const IndexPage: NextPage = () => {
  return (
    <main className="">
      <section className="bg-light1">
        <nav className="h-[80px] flex items-center w-2/3 mx-auto">
          <div>
            <Image
              src="/icons/arzon.svg"
              height={48}
              width={48}
              alt="arzon logo"
            />
          </div>
          <div className="ml-auto font-medium text-lg">Sign in</div>
        </nav>
        <header className="w-2/3 mx-auto min-h-[600px] md:grid md:grid-cols-[2fr_1fr]">
          <div className="h-full flex flex-col justify-center gap-6">
            <h1 className="text-6xl leading-tight">
              Every purchase will be made with pleasure
            </h1>
            <p className="text-3xl">
              Buying and selling of goods or services using the internet.
            </p>
            <button className="mt-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg py-4 px-6 w-max font-medium text-lg">
              Start shopping
            </button>
          </div>
        </header>
      </section>
    </main>
  );
};

export default IndexPage;
