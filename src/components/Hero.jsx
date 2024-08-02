import { backgroundText } from "../lib/constants"

const Hero = () => {
  return (
    <div className="fixed inset-0 flex items-center -rotate-2 select-none">
      <div className="relative">
        <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
          <h1 className="shrink-0 text-white text-10xl font-black ">
            {backgroundText[0]}
          </h1>
          <h2 className="shrink-0 text-white text-8xl italic font-light">
            {backgroundText[1]}
          </h2>
          <h2 className="shrink-0 text-white text-12xl font-bold">
            {backgroundText[2]}
          </h2>
          <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
            {backgroundText[3]}
          </h2>
          <h2 className="shrink-0 text-white text-9xl font-medium">
            {backgroundText[4]}
          </h2>
          <h2 className="shrink-0 text-white text-9xl font-extralight italic">
            {backgroundText[5]}
          </h2>
          <h2 className="shrink-0 text-white text-13xl font-bold">
            {backgroundText[6]}
          </h2>
          <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
            {backgroundText[7]}
          </h2>
        </div>
        <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
          <h1 className="shrink-0 text-white text-10xl font-black ">
            {backgroundText[0]}
          </h1>
          <h2 className="shrink-0 text-white text-8xl italic font-light">
            {backgroundText[1]}
          </h2>
          <h2 className="shrink-0 text-white text-12xl font-bold">
            {backgroundText[2]}
          </h2>
          <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
            {backgroundText[3]}
          </h2>
          <h2 className="shrink-0 text-white text-9xl font-medium">
            {backgroundText[4]}
          </h2>
          <h2 className="shrink-0 text-white text-9xl font-extralight italic">
            {backgroundText[5]}
          </h2>
          <h2 className="shrink-0 text-white text-13xl font-bold">
            {backgroundText[6]}
          </h2>
          <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
            {backgroundText[7]}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero