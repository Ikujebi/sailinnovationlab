import { FC } from 'react'
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import face from "../images/face.svg"
import twiter from "../images/twiter.svg"


const IndividualBlog: FC = () => {
  const isIndividualBlogPage = true;

  const faceBook = "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fsailab.ng%252Ffinding-my-path-in-data-science-featuring-adetola-azeezat-adeola%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
  const twiterLink = "https://twitter.com/intent/post?text=After%20graduating%20from%20the%20University%20of%20Lagos%20with%20a%20degree%20in%20cell%20biology%20and%20genetics%2C%20I%20was%20anxious%20about%20my%20next%20steps.%20%20https%3A%2F%2Fsailab.ng%2Ffinding-my-path-in-data-science-featuring-adetola-azeezat-adeola%2F"
  const adetola = "https://sailab.ng/wp-content/uploads/2024/01/SAIL-Imapact-Story-Web-Azeezat-1024x563.jpg"



  const openPopup = (url: string) => {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(url, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
  };

  return (
    <div className='bg-[#fffcf4]'>
      <header className='py-[3rem] '>
        <HeaderNav margin={!isIndividualBlogPage} />
      </header>
      <main>
        <section className='text-[2.3rem] leading-10 font-bold'>
          <h2 className='flex justify-center '>Finding My Path in Data</h2>
          <h2 className='flex justify-center'>Science Featuring</h2>
          <h2 className='flex justify-center '>Adetola, Azeezat Adeola</h2>
          <p className='flex justify-center text-[1.198rem] text-blue-900 py-[1rem] font-[350]'>January 26, 2024</p>
          <p className='flex justify-center text-[1.5rem] font-[500] gap-5'>Share this arcticle
            <button onClick={() => openPopup(faceBook)}><img width={36} src={face} alt="" /> </button >
            <button onClick={() => openPopup(twiterLink)}><img width={36} src={twiter} alt="" /></button></p>
        </section>

        <section className='flex  justify-center mt-10'>
          <img src={adetola} alt="" className='w-[40.625rem] xl:h-[30rem] 2xl:h-[30rem] 2xl:w-[55.625rem] xl:w-[80.625rem] rounded-2xl h-[20rem]' />
          
        </section>
        <section className='flex  justify-center mt-10 leading-8 text-gray-800 text-[1.04rem]'>
        <div className='max-w-xl xl:max-w-[49rem] 2xl:max-w-[49rem]' >
            <p className='my-5'>After graduating from the University of Lagos with a degree in cell biology and genetics, I was anxious about my next steps. Like many graduates from federal universities, the weight of expectations and the uncertainty of the future pressed heavily on me.</p>
            <p className='my-5'>Despite having zero tech knowledge, I decided to explore this route after numerous superficial conversations with my tech-savvy friends. I ventured into the realm of UI/UX design. However, after just two days, I called it quits.</p>
            <p className='my-5'>In school, I explored a lot of businesses, to the extent that people changed my business name on my behalf to everything_zeezart. A stroke of luck came when a friend introduced me to the Data Science program at SAIL. He thought that businesses could be quite seasonal, as I was leaving school and my customer base was students.</p>
            <p className='my-5'>Unknown to me, I had already been dabbling in the world of data long before I even knew what it was called. Through my school businesses, where I meticulously collected and analyzed customer data, I unknowingly laid the foundation for my future career.</p>
            <p className='my-5'>From the moment I stepped into SAIL, I felt a sense of belonging and support. The well-structured program, designed with beginners like me in mind, provided a nurturing environment where I felt empowered to learn and grow. Weekly check-ins with professors, colleague assistance, and access to industry experts like Eyitayo of Utiva transformed my learning experience.

</p>
            <p className='my-5'>The program honed my technical skills and nurtured my soft skills, instilling in me the confidence to take on leadership roles, volunteer my time, and organize events.</p>
            <p className='my-5'>Six months earlier, I was lost in a sea of uncertainty, deeply terrified of my next steps after school. Today, I stand tall as a booming data scientist, armed with the knowledge and skills to make a difference in the world, who just landed her first role as a data scientist.</p>
            <p className='my-5'>Reflecting on my transformation, I’d like to tell my younger self and people like me: “Always, always be ready to take the risk.” This message resonates deeply with me, urging me to step out of my comfort zone, embrace new challenges, and discover the limitless possibilities within myself.</p>
            <p>SAIL’s commitment to transparency and fairness in its selection process is a beacon of hope for aspiring data scientists. The institute’s dedication to providing quality education and empowering individuals like myself is a testament to its unwavering belief in the transformative power of knowledge.</p>
            
          </div>
        </section>

        <section className='flex justify-center text-[1.5rem] font-[500] gap-5'>
          <span className='flex gap-5 mt-[.7rem]'>Share this arcticle
            <p onClick={() => openPopup(faceBook)}><img width={36} src={face} alt="" /> </p >
            <p onClick={() => openPopup(twiterLink)}><img width={36} src={twiter} alt="" /></p></span>

            <button className='flex justify-center p-3 gap-4 text-blue-900 bg-[#f9f5f0]'>
            <span className=" text-blue-900  material-symbols-outlined mt-[0.45rem]">
              {" "}
              arrow_left_alt
            </span>
               Previous</button>
            <button className='flex p-3 justify-center gap-4 text-blue-900 bg-[#f9f5f0] w-[10rem]'>
               Next
               <span className=" text-blue-900  material-symbols-outlined mt-[0.45rem]">
              {" "}
              arrow_right_alt
            </span>
               </button>
            </section>

      </main>
      <footer className="mt-[10rem]">
        <Footer />
      </footer>
    </div>
  )
}

export default IndividualBlog