import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vite.js",
    "wordspress",
  ];

  return (
    <div className="relative flex h-[12rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img 
    src={src} 
    className="rounded-sm hover:scale-110 duration-200" 
    alt=""
    onError={(e) => {
      // Fallback if image fails to load - shows first 2 letters of filename
      const filename = src.split('/').pop().replace('.svg', '');
      e.target.style.display = 'none';
      e.target.parentNode.innerHTML = `<div class="w-full h-full bg-blue-500 text-white text-xs flex items-center justify-center rounded-sm">${filename.slice(0, 2).toUpperCase()}</div>`;
    }}
  />
);