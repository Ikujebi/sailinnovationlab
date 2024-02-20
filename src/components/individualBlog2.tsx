import { FC } from 'react'
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import face from "../images/face.svg"
import twiter from "../images/twiter.svg"


const IndividualBlog: FC = () => {
  const isIndividualBlogPage = true;

  const faceBook = "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fsailab.ng%252Ffinding-my-path-in-data-science-featuring-adetola-azeezat-adeola%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
  const twiterLink = "https://twitter.com/intent/post?text=After%20graduating%20from%20the%20University%20of%20Lagos%20with%20a%20degree%20in%20cell%20biology%20and%20genetics%2C%20I%20was%20anxious%20about%20my%20next%20steps.%20%20https%3A%2F%2Fsailab.ng%2Ffinding-my-path-in-data-science-featuring-adetola-azeezat-adeola%2F"
  const adetola = "https://sailab.ng/wp-content/uploads/2023/10/Photo.png"



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
            <p className='my-5'>Senator Tokunbo Abiru of the Lagos East Constituency, as part of his initiative to drive youth empowerment, partnered with Co-creation Hub to develop a Community Innovation Space for young people in Lagos East Senatorial District.</p>
            <p className='my-5'>The area is plagued with challenges of unemployment and a lack of an enabling growth environment to foster their socio-economic development. There is a rising number of high school drop-outs, a high rate of teenage pregnancy, and an outcry of fraudulent & insecure activities which threaten the livelihood of business owners and traders.</p>
            <p className='my-5'>The aim of the Community Innovation Space is to create employment opportunities, inspire grass-roots innovations and build partnerships & networks that will drive economic prosperity and collaboratively solve significant social and business problems in the Lagos East Senatorial District.</p>
            <p className='my-5'>The pilot programmes for SAIL has five programmes that will be carried out over the span of 12 months. These programmes are targeted at different groups of (young) people in Lagos East (Ikorodu, Epe, Ibeju/Lekki, Kosofe and Somolu Local Government Areas)</p>
            <p className='my-5'>The Programmes and their aims:
Business 101 for Artisans and Creatives- To work with talented creatives and artisans to help them better understand how to increase the performance of their businesses.

</p>
            <p className='my-5'>Startup Accelerator Programme- To accelerate the growth of young people/entrepreneurs with hands-on business support.</p>
            <p className='my-5'>STEM Education for Senior Secondary School Students- To introduce the students to the concept of physical computing through the use of arduino.</p>
            <p className='my-5'>Tech Talent Development and Lagos East Teacher’s Fellowship- To expose young people to a learning plan that takes them from novice to entry level software engineers.</p>
            <p className='my-5'>Lagos East Teacher’s fellowship- The program aims to accelerate the growth of young people with hands-on business support by training teachers.</p>
            <p>Programme Start Dates (2nd Cohort):</p>
            <p>Business 101 for Artisans and Creatives- ( July 2022)</p>
            <p>Startup Accelerator Programme- (October 2022)</p>
            <p>STEM Education for Senior Secondary School Students- (August 2022)</p>
            <p>Tech Talent Development and Lagos East Teacher’s Fellowship- (September 2022)</p>
            <p>Lagos East Teacher’s fellowship- (August 2022)</p>
            <p className='my-5'>Apply today</p>
            <p className='my-5'>The ultimate goals of these programmes is to provide the applicants with the opportunity of life-long learning and development for young people in Lagos East.</p>
            
          </div>
        </section>

        <section className='mb-5 mt-10 flex justify-center text-[1.5rem] font-[500] gap-5'>
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