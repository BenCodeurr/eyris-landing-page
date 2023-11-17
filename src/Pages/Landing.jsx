/* eslint-disable react/no-unescaped-entities */
import hero from "./../assets/Images/hero.svg"
import partner1 from "./../assets/Images/mest.svg"
import partner2 from "./../assets/Images/partner.svg"
import iris from "./../assets/Images/iris.svg"
import Features from "../components/Features"
import Footer from '../components/Footer'


function Landing() {
  return (
    <>
    {/* ------------Hero section Starts------------------*/}
      <div className="text-black flex gap-[40px] mt-[100px] mb-8 text-left px-20">
          <div className="">
              <h2 className="text-[50px] font-semibold leading-[50px] mb-8"><span className="text-blue-800">Seamless, Painless<br/> & Convenient</span> <br/>Way to Monitor your Blood Sugar Levels</h2>
              <p className="mb-8 text-[15px]">Experience the future of blood sugar monitoring with our Seamless, Painless & Convenient solution.</p>
              <a href="#" className="border rounded-[5px] text-white bg-teal-600 text-[12px] px-12 py-3">Start Free Trial</a>
          </div>
          
          <img className='w-[400px] h-[400px] object-cover mr-8' src={hero} alt="Hero Image" />
      </div>


      {/* ------------Partner section Starts------------------*/}
      <div className="flex flex-col gap-9 items-center bg-zinc-200 p-5 text-black text-xl font-semibold">
          <h3>OUR PARTNERS</h3>
          <div className="flex gap-8">
            <img className="md:w-20" src={partner1} alt="" />
            <img className="md:w-32" src={partner2} alt="" />
          </div>
      </div>


      {/* ------------Features section Starts------------------*/}
      <Features title="FEATURES WE PROVIDE" subtitle="Monitor your Blood Sugar Levels" content="Revolutionizing the way you care for your well-being, we've integrated cutting-edge iris scanning technology into the process" imgURL={iris}/>


      <Footer />
  </>
  )
}
export default Landing