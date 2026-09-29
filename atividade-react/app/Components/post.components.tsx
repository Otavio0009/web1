"use client";

import { ThumbsDown, ThumbsUp} from "lucide-react";
import { useState } from "react";

export default function Post() {
  const [count, setCount] = useState(0);

  function like() {
    setCount(count + 1);
  }

  function desLike() {

    if (count > 0) {
        setCount(count - 1)
    }
  }

  return (
    <div className="flex flex-col items-start gap-2 border p-4 rounded-xl">
      <h1 className="text-lg font-bold">Curtidas: {count}</h1>
      <div className="flex gap-2">
        <button type="button" className="btn btn_like" onClick={like}
        >
            <ThumbsUp/>
        </button>

        <button type="button" className="btn btn_desLike" onClick={desLike}>
            <ThumbsDown/>   
        </button>
      </div>
    </div>
  );
}