import { motion } from "motion/react";

const ProjectDetails = ({ closeModal, title, description, subDescription, image, tags, href }) => {
  // Open external links safely, SPA won't hijack
  const openExternal = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-gray-950 to-gray-900 border-white/10"
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 bg-black rounded-sm" alt="Close" />
        </button>

        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={`${tag.id}-${title}`} // unique across projects
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            {/* SPA-safe external link */}
            <button
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              onClick={() => openExternal(href)}
            >
              View Project <img src="assets/arrow-up.svg" alt="arrow icon" className="size-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
