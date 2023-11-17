import hero from "./../assets/Images/hero.svg"

function Hero() {
  return (
    <div className="text-black flex gap-[40px] mt-[100px] h-[100vh] text-left px-16">
        <div className="">
            <h2 className="text-[50px] font-semibold leading-[60px] mb-8"><span className="text-blue-800">Seamless, Painless<br/> & Convenient</span> <br/>Way to Monitor your Blood Sugar Levels</h2>
            <p className="mb-8 text-[15px]">Experience the future of blood sugar monitoring with our Seamless, Painless & Convenient solution.</p>
            <a href="#" className="border rounded-[5px] text-white bg-teal-600 text-[12px] px-12 py-3">Start Free Trial</a>
        </div>
        
        <img className='md:w-[400px] md:h-[400px] object-cover mr-8' src={hero} alt="Hero Image" />
    </div>
  )
}
export default Hero