import { GithubIcon, Star } from "lucide-react";

const iconSize = 16;

export const HeaderInfo = () => (
  <div className="bg-gray-800 px-10 py-2 flex flex-wrap items-center justify-between text-white text-sm">   

    <a
      href="https://github.com/ArhanAnsari/emi-calculator"
      target="_blank"
      className="flex items-center gap-2 bg-slate-100 px-5 py-1 text-black rounded-md"
    >
      Leave a <Star size={iconSize} fill="#000" /> on GitHub{" "}
      <GithubIcon size={iconSize} />
    </a>
  </div>
);
