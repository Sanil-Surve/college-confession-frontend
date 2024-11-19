import React from "react";
import { useDispatch } from "react-redux";
import { voteConfession } from "../features/ConfessionSlice";

const VoteButtons = ({ confessionId, upvotes, downvotes }) => {
  const dispatch = useDispatch();

  const handleVote = (type) => {
    dispatch(voteConfession({ id: confessionId, type }));
  };

  return (
    <div className="flex items-center space-x-4 mt-2">
      <button
        onClick={() => handleVote("upvote")}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        👍 {upvotes}
      </button>
      <button
        onClick={() => handleVote("downvote")}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        👎 {downvotes}
      </button>
    </div>
  );
};

export default VoteButtons;