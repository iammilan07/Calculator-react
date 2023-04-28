import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function New() {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.value);

  }

  const clearInput = () => {
    setInput("");
  }

  const calculate = () => {
      setInput(eval(input));
  }

  return (
    <Box className="calculator" >
      <Box justifyContent='center'>
      <Box className="display">{input}</Box>
      <Box className="Buttons" display='flex'>
        <Button className="clear" onClick={clearInput}>clear</Button>
        <Button value="/" onClick={handleClick}>/</Button>
        <Button value="*" onClick={handleClick}>*;</Button>
        <Button value="7" onClick={handleClick}>7</Button>
        <Button value="8" onClick={handleClick}>8</Button>
        <Button value="9" onClick={handleClick}>9</Button>
        <Button value="-" onClick={handleClick}>-</Button>
        <Button value="4" onClick={handleClick}>4</Button>
        <Button value="5" onClick={handleClick}>5</Button>
        <Button value="6" onClick={handleClick}>6</Button>
        <Button value="+" onClick={handleClick}>+</Button>
        <Button value="1" onClick={handleClick}>1</Button>
        <Button value="2" onClick={handleClick}>2</Button>
        <Button value="3" onClick={handleClick}>3</Button>
        <Button className="equals" onClick={calculate}>=</Button>
        <Button value="0" onClick={handleClick}>0</Button>
        <Button value="." onClick={handleClick}>.</Button>

      </Box>
      </Box>
    </Box>
  );
}

export default New;