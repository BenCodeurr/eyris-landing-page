/* eslint-disable react/no-unescaped-entities */
import hero from "./../assets/images/hero.gif"
import partner1 from "./../assets/images/mest.svg"
import partner2 from "./../assets/images/partner.svg"
import iris from "./../assets/images/iris.svg"
import meal from "./../assets/images/meal.svg"
import Icon1 from "./../assets/images/book-open.svg"
import Icon2 from "./../assets/images/disc.svg"
import Icon3 from "./../assets/images/refresh-cw.svg"
import Icon4 from "./../assets/images/loader.svg"
import tesmonial from "./../assets/images/testimonial-img.svg"
import diet from "./../assets/images/diet-tips.svg"
import Features from "../components/Features"
import Card from "../components/Card"
import Footer from '../components/Footer'


function Landing() {
  return (
    <>
    {/* ------------Hero section Starts------------------*/}
      <div className="text-black flex gap-[40px] mt-[100px] mb-8 text-left px-20">
          <div className="">
              <h2 className="text-[50px] font-semibold font-roboto leading-[50px] mb-8"><span className="text-blue-800">Seamless, Painless<br/> & Convenient</span> <br/>Way to Monitor your Blood Sugar Levels</h2>
              <p className="mb-8 text-[15px]">Experience the future of blood sugar monitoring with our Seamless, Painless & Convenient solution.</p>
              <a href="#" className="border rounded-[5px] text-white bg-teal-600 text-[12px] px-12 py-3">Start Free Trial</a>
          </div>
          
          <img className='w-[400px] h-[400px] object-cover mr-8' src={hero} alt="Hero Image" />
      </div>


      {/* ------------Partner section Starts------------------*/}
      <div className="flex flex-col gap-9 items-center bg-zinc-100 p-5 text-black text-xl font-semibold">
          <h3>OUR PARTNERS</h3>
          <div className="flex gap-8">
            <img className="md:w-20" src={partner1} alt="" />
            <img className="md:w-32" src={partner2} alt="" />
          </div>
      </div>


      {/* ------------Features section Starts------------------*/}
      <Features title="FEATURES WE PROVIDE" subtitle="Monitor your Blood Sugar Levels" content="Revolutionizing the way you care for your well-being, we've integrated cutting-edge iris scanning technology into the process" imgURL={iris} />

      <Features subtitle="Scan your meals to get the composition." content="Unlock the power of personalized nutrition by simply scanning your meals to reveal their composition. Embrace a seamless and innovative approach to understanding what fuels your body. " imgURL={meal} isSecond />

      <Features subtitle="Get Dietary Tips to Stay Healthy" content="Our personalized approach considers your unique needs, providing you with insightful recommendations to optimize your nutrition" imgURL={diet} isThird />


      {/* Testimonials */}
      <div className="text-black bg-zinc-100 flex flex-col items-center text-center p-16">
        <h2 className="font-extrabold mb-8">TESTIMONIALS</h2>
        <p className="mb-8 text-stone-900 italic">“This product has revolutionized my health routine. The Seamless, Painless & Convenient blood sugar monitoring, with iris scanning technology, offers a stress-free experience. The dietary tips are personalized and invaluable, making it a must-have for anyone seeking a modern and efficient approach to health management. Highly recommended!”</p>

        <img src={tesmonial} alt="" className="mb-3"/>
        <p className="text-xs font-semibold">Emily Fiagbedzi</p>
      </div>

      {/* How it works section */}
      <div className="flex text-black items-center p-24">
        <div className="mr-20">
          <h2 className="text-xl font-extrabold mb-8">HOW IT WORKS</h2>
          <p className="mb-8">Unlock Wellness in Four Simple Steps: Open the app, scan your iris, wait for results, and receive personalized recommendations. Your path to health made simple.</p>
          <a href="#" className="border rounded-[5px] text-white bg-teal-600 text-[12px] px-12 py-3">Get Started</a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card imgURL={Icon1} title="Open the App" content="Unlock a world of seamless health management at your fingertips"/>
          <Card imgURL={Icon2} title="Scan Your Iris" content="Embrace effortless monitoring with a simple glance."/>
          <Card imgURL={Icon3} title="Wait For Your Result" content="Patience meets precision. Your health insights are just moments away."/>
          <Card imgURL={Icon4} title="Get Recommendations" content="Receive personalized tips tailored just for you and elevate your health journey."/>
        </div>
      </div>

      <div className="text-black bg-zinc-100 mb-12 text-center p-7">
        <div>
          <h1 className="font-bold">PLANS</h1>
          <h4 className="font-normal mb-2">Our Custom Plans</h4>
          <p className="text-[14px] font-light mb-4">We have taken time to create plans that <br/>have been tailor made just for you.</p>
        </div>

        <div className="grid grid-cols-3">
          <div className="border border-blue-800 p-5 pb-9 font-normal w-[260px] text-blue-900 text-[14px] leading-[25px]">
            <h3 className="font-bold mb-5">Basic</h3>
            <a href="#" className="border border-blue-800 rounded-[5px] text-[12px] px-12 py-3">$5/<span>Month</span></a>
            <p className="mt-5">3 Scans/Day</p>
            <p>Daily Healthy Tips</p>
            <p><s>Access to a Health Practitioner</s></p>
            <p className="mb-5"><s>24/7 Customer Services</s></p>
            <a href="#" className="border font-bold rounded-[5px] text-white bg-blue-800 text-[12px] px-12 py-3">Subscribe</a>
          </div>

          <div className="border p-5 pb-9  font-normal w-[260px] text-white bg-blue-800 text-[14px] leading-[25px]">
            <h3 className="font-bold mb-5">Standard</h3>
            <a href="#" className="border bg-white text-blue-800 rounded-[5px] text-[12px] px-12 py-3">$50/<span>Month</span></a>
            <p className="mt-5">5 Scans/Day</p>
            <p>Daily Healthy Tips</p>
            <p>Access to a Health Practitioner</p>
            <p className="mb-5">24/7 Customer Services</p>
            <a href="#" className="border font-bold rounded-[5px] bg-white text-blue-800 text-[12px] px-12 py-3">Subscribe</a>
          </div>

          <div className="border border-blue-800 p-5 pb-9 font-normal w-[260px] text-blue-900 text-[14px] leading-[25px]">
            <h3 className="font-bold mb-5">Premium</h3>
            <a href="#" className="border border-blue-800 rounded-[5px] text-[12px] px-12 py-3">$120/<span>Month</span></a>
            <p className="mt-5">Unlimited Scans/Day</p>
            <p>Daily Healthy Tips</p>
            <p>Access to a Health Practitioner</p>
            <p className="mb-5">24/7 Customer Services</p>
            <a href="#" className="border font-bold rounded-[5px] text-white bg-blue-800 text-[12px] px-12 py-3">Subscribe</a>
          </div>

        </div>
      </div>




    <div className="flex flex-col text-black items-center bg-zinc-100 p-14">
      <h3 className="font-normal mb-6">Try the product out for free.</h3>
      <form>
        <input className="text-black bg-white mb-6 p-2 rounded-md drop-shadow-md" type="text" placeholder="Email" />
      </form>
      <a href="#" className=" font-medium border rounded-[5px] text-white bg-teal-600 text-[12px] px-12 py-3">Sign Up for waitlist</a>
    </div>

      <Footer />
  </>
  )
}
export default Landing
