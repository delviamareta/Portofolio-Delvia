import Project1 from "../assets/project-1.jpg"
import Project2 from "../assets/project-2.png"

const project = () => {
  return (
    <div className="bg-red-950 m-20 max-w-full rounded-xl">
        <div className="grid justify-items-center">
            <h1 className="text-3xl text-white my-10">Projects</h1>
        </div>

        <div>
            <div className="grid grid-col-2 gap-4 p-5 mx-w-full">
                <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-full ml-5">
                    <div className="flex flex-col items-center">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm font-semibold">
                                Skincare Advertisement Design
                            </div>
                            <a href="#">Tool: Figma</a>
                            <p className="mt-2 text-slate-500">
                                I'm designed digital advertisement using Figma to create visually appealing and effective design.
                                By selecting the right colors, typography, and graphic elements, this project highlights my ability
                                to create ads ready for use across various platforms.
                            </p>
                        </div>
                        <div className="md:shrink-0 p-5">
                            <img src={Project1} alt="Project1" width={250} height={250}/>
                        </div>
                    </div>
                </div>

                <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-full mb-5 ml-5">
                    <div className="flex flex-col items-center">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm font-semibold">
                                Clothing Brand Landing Page Design
                            </div>
                            <a href="#">Tool: Figma</a>
                            <p className="mt-2 text-slate-500">
                            In this project, I designed a landing page for a clothing brand using Figma. The goal was to create an engaging, 
                            responsive design that aligns with the brand's identity. I focused on cute design elements, color selection, 
                            and typography to ensure a seamless user experience across devices.
                            </p>
                        </div>
                        <div className="md:shrink-0 p-5">
                            <img src={Project2} alt="Project2" width={650} height={250}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default project