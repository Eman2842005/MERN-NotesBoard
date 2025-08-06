import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 space-y-6 max-w-md mx-auto text-center -mt-8">
      <div className="bg-purple-300/20 rounded-full p-8">
        <NotebookIcon className="size-10 text-purple-500" />
      </div>
      <h3 className="text-3xl font-bold text-purple-600">No notes yet</h3>
      <p className="text-purple-400/80">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link 
        to="/create" 
        className="btn bg-purple-600 hover:bg-purple-700 text-white">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;

