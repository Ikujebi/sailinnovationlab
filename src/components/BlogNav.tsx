import { FC } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import {Link} from "react-router-dom"

const BlogNav: FC = () => {

  const isIndividualBlogPage = true;

  interface blogger {
    id: number;
    src: string;
    alt: string;
    blogTitle: String;
    blogDiscussion: String;
    blog : string ;
  }

  const techBloggers : blogger[] =[
    {id:1,
     src: "https://sailab.ng/wp-content/uploads/2024/01/SAIL-Imapact-Story-Web-Azeezat-1024x563.jpg",
      alt: "Image 1",
      blogTitle:"Finding My Path in Data Science Featuring Adetola, Azeezat Adeola",
      blogDiscussion: "After graduating from the University of Lagos with a degree in cell biology and genetics, I was anxious about my next steps.",
      blog: "/individualBlog"
    }, 
    {id:2,
     src: "https://sailab.ng/wp-content/uploads/2023/10/Photo.png",
      alt: "Image 1",
      blogTitle:"SAIL Innovation Lab to drive youth Empowerment",
      blogDiscussion: "SAIL Innovation Lab partnered with Co-creation Hub to develop a Community Innovation Space for young people in Lagos East Senatorial District.",
      blog: "/individualBlog2"
    }, 
  ]
  
  const circle = "https://sailab.ng/wp-content/uploads/2023/10/Image-16.png";
  return (
    <div>
      <header>
        <HeaderNav margin={!isIndividualBlogPage} />
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
        <section className="flex justify-center">
          {techBloggers.map((item,i)=>(
            <section className="ml-[2rem] mt-[2rem] w-[27rem]" key={i}>
            <article>
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-xl w-[24rem] ml-5"
            />
          </article>
          <article className="my-[2rem]">
            <h5 className="text-[1.65rem] font-bold mb-3">
          {item.blogTitle}
            </h5>
            <p>
              {item.blogDiscussion}
            </p>
          </article>
          <article className="mb-5 flex gap-3">
            <Link to={item.blog} className="hover:text-white hover:bg-[#184c94] p-2 border-2 border-black hover:border-0 hover:p-3">
             Read More 
            </Link>
            <div>
              <img
                src={circle}
                alt=""
                className="w-[3rem] h-[3rem] rounded-[50%]"
              />
             
            </div>
            <p className="mt-3">Sailab <span className="border-l-2 border-gray-400 mr-1"></span> September 1, 2022</p>
          </article>
          </section>
          ))}
          
        </section>
      </main>

      <footer className="mt-[10rem]">
        <Footer />
      </footer>
    </div>
  );
};

export default BlogNav;
