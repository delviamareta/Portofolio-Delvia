import HeroPic from "../assets/img-3.jpg"

const hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/2 ssm:w-fit">
        <p className="text-4xl mb-5 text-slate-300">Hi! I'm</p>
        <h1 className="text-6xl font-semibold">Delvia</h1>
        <p className="mt-10 text-xl text-slate-300 font-sans">
        I'm a passionate Informatics Engineering undergraduate with a keen interest in web design. I love combining creativity and technical 
        skills to create visually appealing and user-friendly websites. Welcome to my portfolio, where you can explore my journey and projects! 
        </p>
      </div>
      <div className="w-1/2 items-center ssm:w-fit">
        <img src={HeroPic} alt="" width={500} height={500} className="rounded-full border-8 border-white "/>
      </div>
    </section>
  )
}

export default hero;