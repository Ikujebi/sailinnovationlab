import {FC} from 'react'
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

const IndividualBlog: FC = () => {

    const faceBook = "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fsailab.ng%252Ffinding-my-path-in-data-science-featuring-adetola-azeezat-adeola%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
  return (
    <div className='bg:"#2596be"'>
        <header>
        <HeaderNav />
      </header>
      <main>
        <section className='text-[2rem] font-black'>
        <h2 className='flex justify-center '>Finding My Path in Data</h2>
        <h2 className='flex justify-center'>Science Featuring</h2>
        <h2 className='flex justify-center'>Adetola, Azeezat Adeola</h2>
        <p className='flex justify-center text-[1rem] text-blue-700'>January 26, 2024</p>
        <p className='flex justify-center text-[1.2rem]'>Share this arcticle <img src="" alt="" /> <img src="" alt="" /></p>
        </section>
       
      </main>
      <footer className="mt-[10rem]">
        <Footer />
      </footer>
    </div>
  )
}

export default IndividualBlog