import { useAtom } from "jotai";
import { pageAtom, pages } from "../lib/constants"

const Footer = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <div className="w-full fixed bottom-0 overflow-auto pointer-events-auto flex justify-center">
      <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
        {[...pages].map((_, index) => (
          <button
            key={index}
            className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${index === page
              ? "bg-white/90 text-black"
              : "bg-black/30 text-white"
              }`}
            onClick={() => setPage(index)}
          >
            {index === 0 ? "Cover" : `Page ${index}`}
          </button>
        ))}
        <button
          className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${page === pages.length
            ? "bg-white/90 text-black"
            : "bg-black/30 text-white"
            }`}
          onClick={() => setPage(pages.length)}
        >
          Back Cover
        </button>
      </div>
    </div>
  )
}

export default Footer