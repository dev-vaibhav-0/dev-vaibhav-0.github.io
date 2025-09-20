import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyGmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "asdfghbvqqqq@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false);
        },2000);
    };
        
    return <motion.button whileTap={{scale:0.5}} whileHover={{y:-5}} onClick={copyToClipboard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-black w-[12rem] cursor-pointer overflow-hidden">
        
        <AnimatePresence mode="wait">
        {copied?(<motion.p key="copied" initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.1, ease:"easeInOut"}} className="flex items-center justify-center gap-2">
            <img src="assets/copy-done.svg" className="w-5 " alt="CopyDone" />
            Email Copied</motion.p>):(
        <motion.p key="copy" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.1}} className="flex items-center justify-center gap-2">
            <img src=" assets/copy.svg" alt="Copy" className="w-5 " />
            Copy Email Address</motion.p>)}
        </AnimatePresence>
    </motion.button>

};
export default CopyGmailButton;