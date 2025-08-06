import axios from "axios";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const Create = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!title.trim() || !content.trim()) {
        toast.error("All fields are required");
        return;
      }
      setLoading(true);
      try {
        await api.post("/notes", {
          title,
          content,
        });
        toast.success("Note created successfully!");
        navigate("/");
      } catch (error) {
        console.log("Error creating the note", error);
        if (error.response?.status === 429)
          toast.error("Slow down! You are creating notes too fast");
        else toast.error("Failed to create note");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto ">
            <Link to={"/"} className="btn btn-ghost mb-6 text-purple-400 hover:text-purple-600 hover:bg-stone-950">
              <ArrowLeftIcon className="size-5" />
              Back to Notes
            </Link>
            <div className="card bg-black border border-purple-700">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4 text-purple-400">Create new note</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text text-purple-300">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Note Title"
                      className="input input-bordered border-purple-600 bg-black text-purple-300 focus:border-purple-500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text text-purple-300">Content</span>
                    </label>
                    <textarea
                      placeholder="Write your note here..."
                      className="textarea textarea-bordered h-32 border-purple-600 bg-black text-purple-300 focus:border-purple-500"
                      value={content}
                      onChange={(e) => setContent(e.target.value)} />
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn bg-purple-600 hover:bg-purple-700 text-black border-none shadow-md shadow-purple-700/50"
                      disabled={loading}>
                      {loading ? "Creating..." : "Create note"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Create;
  