import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  // Enhanced smooth scroll function with multiple easing options
  const smoothScrollTo = (targetId, e) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const navbarHeight = 100; // Adjust based on your navbar height
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Animation duration in milliseconds (1.5 seconds)
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Custom easing function (ease-in-out cubic) - very smooth
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      // Alternative easing functions (uncomment to try different feels):
      
      // Ease-in-out quart (slower start/end)
      // const easing = progress < 0.5 
      //   ? 8 * progress * progress * progress * progress 
      //   : 1 - Math.pow(-2 * progress + 2, 4) / 2;
      
      // Ease-in-out quint (even smoother)
      // const easing = progress < 0.5 
      //   ? 16 * progress * progress * progress * progress * progress 
      //   : 1 - Math.pow(-2 * progress + 2, 5) / 2;
      
      // Ease-in-out sine (most natural feeling)
      // const easing = -(Math.cos(Math.PI * progress) - 1) / 2;
      
      // Ease-in-out expo (dramatic acceleration/deceleration)
      // const easing = progress === 0 
      //   ? 0 
      //   : progress === 1 
      //   ? 1 
      //   : progress < 0.5 
      //   ? Math.pow(2, 20 * progress - 10) / 2 
      //   : (2 - Math.pow(2, -20 * progress + 10)) / 2;
      
      const currentPosition = startPosition + (distance * easeInOutCubic);
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a 
          href="#home" 
          className="nav-link"
          onClick={(e) => smoothScrollTo('home', e)}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#about" 
          className="nav-link"
          onClick={(e) => smoothScrollTo('about', e)}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#projects" 
          className="nav-link"
          onClick={(e) => smoothScrollTo('projects', e)}
        >
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#experience" 
          className="nav-link"
          onClick={(e) => smoothScrollTo('experience', e)}
        >
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#contact" 
          className="nav-link"
          onClick={(e) => smoothScrollTo('contact', e)}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Vaibhav
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img 
              alt='toggle' 
              src={isOpen ? "assets/close.svg" : 'assets/menu.svg'} 
              className="w-6 h-6" 
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="block overflow-hidden text-center sm:hidden" 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }} 
          style={{ maxHeight: "100vh" }} 
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;