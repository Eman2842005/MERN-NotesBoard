import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import RateLimitedUI from "../component/RateLimitedUI";
import toast from "react-hot-toast";
import NoteCard from "../component/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../component/NotesNotFound";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let retryTimeout;

    const fetchNotes = async () => {
      setLoading(true); 
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
          retryTimeout = setTimeout(() => {
            fetchNotes();
          }, 5000);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
    return () => clearTimeout(retryTimeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-purple-400 py-10">Loading notes...</div>
        )}
        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}
        {notes.length > 0 && !isRateLimited && (
          <div className="max-h-screen overflow-y-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
