import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetails= () => {

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {

    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost text-purple-400 hover:text-purple-800 hover:bg-stone-950">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn border-purple-700 text-black bg-purple-500 transition-colors duration-300 ease-in-out hover:bg-purple-700 hover:scale-105">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
            <div className="card bg-black border border-purple-600">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-purple-400">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered bg-black border-purple-700 text-purple-300 placeholder-purple-500"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })} />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-purple-400">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 bg-black border-purple-700 text-purple-300 placeholder-purple-500"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}/>
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-ghost bg-purple-500 text-black hover:bg-purple-700 border-none"
                  disabled={saving}
                  onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetails;