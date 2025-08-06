import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-8 bg-black">
      <div className="mt-24 bg-purple-400/10 border border-purple-400/30 rounded-xl shadow-lg p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 bg-purple-400/20 p-6 rounded-full mb-6 md:mb-0 md:mr-8">
            <ZapIcon className="size-14 text-purple-500" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-purple-600">Rate Limit Reached</h3>
            <p className="text-lg text-base-content mb-2">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-base text-base-content/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
