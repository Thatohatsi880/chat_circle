import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-4 rounded-lg mb-6 w-full md:w-80  p-2">
      <h2 className="text-lg font-bold mb-5 text-center">Popular Categories</h2>
      <div className="border border-x-0 border-b-0 pt-5 flex flex-wrap gap-3">
        <span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Artificial Intelligence</span>
        <span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Science</span>
        <span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Technology</span>
        <span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Video games </span>
        <span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Computer programming </span><span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Movie & TV shows</span><span className="rounded rounded-xl border border-gray-300 px-2 py-0.5 text-textGrey text-sm"> Music</span>
      </div>
    </div>
  );
};

export default Categories;
