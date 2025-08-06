import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-[#6b21A8]">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#8b5cf6] font-mono tracking-tight">
            NotesBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn bg-[#8b5cf6] hover:bg-[#6b21A8] text-white border-none shadow-md shadow-[#9b5de5]/50">
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
