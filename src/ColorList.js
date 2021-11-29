import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from './ColorBox';


export function ColorList() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, color: "black" };
  const INITIAL_COLORS = ["crimson", "skyblue", "yellow"];
  const [colors, setColors] = useState(INITIAL_COLORS);


  return (
    <div>


      <TextField
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        label="enter a color" variant="outlined" />
      <Button onClick={() => setColors([...colors, color])}
        variant="contained">Add Color
      </Button>

      {colors.map((clr, index) => (

<ColorBox key={index} color={clr} />
      ))}
     
    </div>
  );
}


