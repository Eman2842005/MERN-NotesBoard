import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-[#7642c0]/50">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#7642c0] font-mono tracking-tight">
            NotesBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn bg-[#873fb4] hover:bg-[#613494] text-white border-none shadow-md shadow-[#9b5de5]/50">
              <PlusIcon className="size-6" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
