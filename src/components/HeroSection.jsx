
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"
import { motion } from "framer-motion"
function HeroSection() {
  return (
    <section className="relative flex h-screen item-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
  src="/hero.mp4" // Remove the import and use a direct path
  className="h-full w-full object-cover"
  muted
  autoPlay
  loop
  playsInline
  poster={hero} // Poster can still be imported normally
></video>

        </div>
        <div className="absolute inset-0 -z-10 
        bg-gradiant-to-b from-transparent from-70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col  justify-end pb-20">

       <motion.img initial={{opacity: 0 , y: 50}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5}}
       src={logo} alt="restaurent" className="w-full  p-4" />
       <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
        </div>
    </section>
  )
}

export default HeroSection  