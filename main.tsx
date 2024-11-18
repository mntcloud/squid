// @deno-types="npm:@types/react@^18.3.12"
import { useState, useEffect } from 'react';

import {Box, render, Text, useInput} from 'ink';

const Demo = () => {
  const [x, setPositionX] = useState(0);
  const [y, setPositionY] = useState(0);

  useInput((input, key) => {
    if (key.leftArrow) {
      setPositionX(previousPosition => previousPosition - 1);
    }

    if (key.rightArrow) {
      setPositionX(previousPosition => previousPosition + 1);
    }

    if (key.upArrow) {
      setPositionY(previousPosition => previousPosition - 1);
    } 

    if (key.downArrow) {
      setPositionY(previousPosition => previousPosition + 1);
    }
  })

  useEffect(() => {
    
  }, [])

  return ( 
  <Box marginX={x} marginY={y}>
    <Text>-</Text>
  </Box>
  )
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  render(<Demo />);
}
