import { FlipWords } from "./FlipWords";
import {motion} from "motion/react";

const HeroText = () => {
    const variants ={
        hidden:{opacity:0, x: -50},
        visible:{opacity:1, x:0},
    };
    return <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium"variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}>Hi I'm Vaibhav</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300"variants={variants} initial="hidden" animate="visible" transition={{delay: 1.2}}>A Developer dedicated <br /> to Crafting</motion.p>
                    <motion.div
                    variants={variants} initial="hidden" animate="visible" transition={{delay: 1.5}}>
                        <FlipWords className="font-black text-white text-8xl" words={["Secure","Modern","Scalable"]}/>
                        <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay: 1.8}} className="text-4xl text-neutral-50 font-medium">Solutions</motion.p>
                    </motion.div>
                </div>
            </div>
            {/* Mobile View */}
            <div className="flex- flex-col space-6-y md:hidden">
                <motion.p variants={variants} initial="hidden" animate="visible" transition={{delay: 1}} className="text-4xl text-white" >Hi, I'm Vaibhav</motion.p>
                <div>
                    <motion.p className="text-5xl font-black text-white"variants={variants} initial="hidden" animate="visible" transition={{delay: 1.2}}>Crafting</motion.p>
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay: 1.8}}><FlipWords className="font-bold text-white text-7xl" words={["Secure","Modern","Scalable"]} /></motion.div>
                    <motion.p className="text-4xl font-black text-white" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.9}}>Data Enthusiasts</motion.p>
                </div>
            </div>

    </div>
};

export default HeroText;