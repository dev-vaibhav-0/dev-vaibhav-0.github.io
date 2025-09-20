import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

const Project = ({setPreview, title, description, subDescription, href, image, tags = []}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div onMouseEnter={()=>setPreview(image)} onMouseLeave={()=>setPreview(null)} className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-yellow-700">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button onClick={()=>setIsHidden(true)} className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (<ProjectDetails closeModal={()=>setIsHidden(false)} title={title} description={description} subDescription={subDescription} image={image} tags={tags} href={href} />)}
    </>
  );
};

export default Project;
