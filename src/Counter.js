import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">

      <IconButton className="like-dislike" onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton className="like-dislike" onClick={() => setdisLike(dislike + 1)} color="primary" aria-label="upload picture">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

    </div>

  );

}
