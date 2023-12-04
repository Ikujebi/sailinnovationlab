import design from '../images/method1.svg'
import design2 from '../images/method2.svg'
import design3 from '../images/method3.svg'
import design4 from '../images/method4.svg'
import design5 from '../images/method5.svg'

const Method = () => {
  return (
    <div className="mt-[4rem]">
        <header className="flex justify-center text-[1.5rem] font-bold" >
            <h1>We applied the methods of design research to allow us to do the following:</h1>
        </header>
        <main>
          <div className='grid '>
          <img src={design} alt="" />   
          </div>
          <div>
          <img src={design2} alt="" />   
          </div>
          <div>
          <img src={design3} alt="" />   
          </div>
          <div>
          <img src={design4} alt="" />   
          </div>
          <div>
          <img src={design5} alt="" />   
          </div>
         
         
        </main>
    </div>
  )
}

export default Method