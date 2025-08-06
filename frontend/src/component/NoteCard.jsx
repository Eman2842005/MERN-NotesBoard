import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {

  const navigate=useNavigate();

  const handleDelete = async (e, id) => {
    e.preventDefault(); 
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
      <div
      className="card bg-black/90
      hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#5e3096] hover:shadow-[#9b5de5]/40" >
      <div className="card-body">
        <h3 className="card-title text-[#9b5de5]">{note.title}</h3>
        <p className="text-[#fff]/80 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-[#bf8ef8]/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs text-[#9b5de5] hover:bg-[#9b5de5]/20" onClick={()=>navigate(`/note/${note._id}`)}>
            <PenSquareIcon className="size-4 text-[#9b5de5]" />
            </button>
            <button
              className="btn btn-ghost btn-xs text-[#9b5de5] hover:bg-[#9b5de5]/20"
              onClick={(e) => handleDelete(e, note._id)} >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
