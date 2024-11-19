import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchConfessions } from "../features/ConfessionSlice";
import VoteButtons from "./VoteButtons";

const ConfessionFeed = () => {
  const dispatch = useDispatch();
  const { confessions, loading, error } = useSelector((state) => state.confessions);

  useEffect(() => {
    dispatch(fetchConfessions());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4">
      {confessions.map((confession) => (
        <div key={confession._id} className="bg-white p-4 rounded shadow">
          <p>{confession.text}</p>
          {confession.imageUrl && (
            <img src={confession.imageUrl} alt="Confession" className="w-full h-auto mt-2" />
          )}
          <VoteButtons confessionId={confession._id} upvotes={confession.upvotes} downvotes={confession.downvotes} />
        </div>
      ))}
    </div>
  );
};

export default ConfessionFeed;