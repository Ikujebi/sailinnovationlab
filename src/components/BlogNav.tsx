import { FC } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

const BlogNav: FC = () => {
  const readingBoy = "https://sailab.ng/wp-content/uploads/2023/10/Photo.png";
  return (
    <div>
      <header>
        <HeaderNav />
      </header>

      <main>
        <section className="karla mt-[5rem]">
          <article className="flex justify-center ">
            <h2 className="flex justify-center bg-[#48c4b4] px-6 rounded-2xl text-white ">
              BLOG
            </h2>
          </article>

          <article className="flex justify-center mt-[2rem] text-[2.15rem] font-extrabold">
            Updates From the Lab
          </article>
        </section>
        <section className="ml-[2rem] mt-[2rem] w-[27rem]">
          <article>
            <img src={readingBoy} alt="" className="rounded-xl w-[24rem] ml-5" />
          </article>
          <article className="my-[2rem]">
            <h5 className="text-[1.65rem] font-bold mb-3">SAIL Innovation Lab to drive youth Empowerment</h5>
            <p>
              SAIL Innovation Lab partnered with Co-creation Hub to develop a
              Community Innovation Space for young people in Lagos East
              Senatorial District.
            </p>
          </article>
        </section>
      </main>

      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default BlogNav;
