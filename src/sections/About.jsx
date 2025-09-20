import { useRef } from "react";
import Card from "../components/Card";
import Globe from "../components/Globe";
import CopyGmailButton from "../components/CopyGmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
    const grid2Container=useRef(

    );
    return <section className="c-space section-spacing">
        <h2 className="text-heading ">
            About me
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md: auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" alt="CodingPov" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Vaibhav Kumar</p>
                    <p className="subtext">Over the last 1 year, I developed my Python dev skills to deliver dynamic Applications.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
            </div>
            {/* Grid 2  */}
            <div ref={grid2Container} className="grid-default-color grid-2">
                <div className="flex items-center justify-center w-full h-full ">
                    <p className="flex items-end text-5xl text-gray-500">Code IS Craft</p>
                    <Card containerRef={grid2Container} style={{rotate:"75deg",top:"30%", left:"20%"}} text="Grasp"/>
                    <Card containerRef={grid2Container} style={{rotate:"-30deg",top:"60%", left:"45%"}} text="Sigma"/>
                    <Card containerRef={grid2Container} style={{rotate:"90deg",bottom:"30%", left:"70%"}} text="Solid"/>
                    <Card containerRef={grid2Container} style={{rotate:"-45deg",top:"55%", left:"0%"}} text="Design Patterns"/>
                    <Card containerRef={grid2Container} style={{rotate:"20deg",top:"10%", left:"38%"}} text="SRP"/>
                    <Card containerRef={grid2Container} style={{rotate:"30deg",top:"70%", left:"70%"}} image="assets/logos/github.svg"/>
                    <Card containerRef={grid2Container} style={{rotate:"-45deg",top:"70%", left:"25%"}} image="assets/logos/html5.svg"/>
                    <Card containerRef={grid2Container} style={{rotate:"30deg",top:"5%", left:"10%"}} image="assets/logos/cplusplus.svg"/>
                </div>
            </div>
            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%] ">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in India, and open to remote work woldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>
            {/* Grid 4  */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Quick access to my Gmail below.
                    </p>
                    <CopyGmailButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-2">
                <div className="z-10 w-[50%] ">
                    <p className="headtext">Teck Stack</p>
                    <p className="subtext">For now, I only specialize in python for data analysis and science. Later on, I'll be learning more languages</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125  ">
                    <Frameworks/>
                </div>
            </div>
        </div>
    </section>
};

export default About;