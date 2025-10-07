
import { data } from "./data"
import Navbar from "./Navbar";

function App() {

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div
      className="relative h-screen bg-cover bg-[url('/hero-background.jpg')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 bg-linear-to-b from-black/0 to-black/70"></div>

      {/* Navbar */}
      <Navbar scrollToElement={scrollToElement}/>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-48 text-white max-w-3xl">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Beautiful homes made for you
        </h1>
        <p className="text-sm text-gray-200 leading-relaxed">
        Experience modern architecture, thoughtful design, and trusted craftsmanship, all under one roof
        </p>
      </div>
    </div>
    {/* About section */}
    <div id="about" className='grid grid-cols-1 md:grid-cols-2 gap-12 bg-white py-24'>
      <div className="hidden md:flex">
        <img src="/about.jpg"/>
      </div>
      
      <div className='flex flex-col px-12 md:pt-24 max-w-md'>
        <h2 className="text-4xl font-bold">You're in good hands</h2>
        <p className="text-md text-gray-600 my-6">
        At AM Construction, we believe a home is more than walls and roofs, it’s where stories begin and memories grow.
With years of experience in real estate development, we focus on crafting spaces that bring comfort, connection, and lasting value to every family we serve.
Every project we undertake is built on a foundation of trust, transparency, and a deep understanding of what “home” truly means.
    </p>
    <button onClick={() => scrollToElement('services')} className="cursor-pointer bg-black w-40 h-auto text-black font-semibold px-6 py-2 rounded-tr-2xl flex items-center space-x-2 transition">
        <span className="text-white">Learn more</span>
        <span className="text-[#FFAC12]">→</span>
      </button>
      </div>
      
    </div>

    {/* Services section */}
    <div id="services" className="flex flex-col gap-20 md:px-48 py-20 bg-[#F5F5F5]">
      <h2 className="text-4xl font-bold text-center text-gray-900">Built Around Your Needs</h2>
      <div className="px-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {data.map((service) => (
          <div key ={service.id} className="flex flex-col gap-6 bg-white rounded-3xl shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src={service.img} alt={service.title}/>
            <div className="p-6 flex flex-col gap-3">
              <p className="text-xl font-semibold text-gray-900">{service.title}: <span className="text-sm text-gray-500">{service.subtitle}</span></p> 
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
      ))}
      </div>
    </div>

    {/* Contact us section */}
    <div id="contact" className="flex flex-col gap-20 py-24">
      <h2 className="text-4xl font-bold text-center text-gray-900">Get in touch with us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 bg-white px-12 md:pl-48'>
        <div className='flex flex-col gap-8  max-w-md'>
            <input type="text" name="name" placeholder="Name" className="border border-[#EBEBEB] h-9 px-6 py-8 rounded-lg"/>
            <input type="text" name="phone" placeholder="Phone" className="border border-[#EBEBEB] h-9 px-6 py-8 rounded-lg"/>
            <input type="text" name="email" placeholder="Email" className="border border-[#EBEBEB] h-9 px-6 py-8 rounded-lg"/>
            <textarea type="text" name="description" placeholder="Hello I'm interested in..." className="border border-[#EBEBEB] px-6 py-8 rounded-lg"/>
            <button className="text-center h-12 bg-black text-black font-semibold px-6 py-2 rounded-tr-2xl flex items-center space-x-2 transition">
              <span className="text-white">Learn more</span>
              <span className="text-[#FFAC12]">→</span>
            </button>
        </div>
        <div className="hidden md:flex">
          <img src="/contact-us.jpg" className=" rounded-tl-4xl"/>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="md:px-48 md:py-20 bg-gradient-to-b from-[#271A00] to-[#000000]">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-white font-bold leading-tight mb-6">
          Make your dreams a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAC12] to-[#C87224]">reality</span>
        </h1>
        <button onClick={() => scrollToElement('contact')} className="cursor-pointer ml-8 w-44 h-12 bg-[#FFAC12] text-black font-semibold px-6 py-2 rounded-tr-2xl flex items-center space-x-2 hover:bg-amber-400 transition">
            <span>Work with us</span>
            <span>→</span>
          </button>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    </>
  )


}

export default App
