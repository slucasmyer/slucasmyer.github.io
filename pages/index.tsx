import { useState } from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Button, TextField, Stack, Select, MenuItem } from '@mui/material';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import { useRouter } from 'next/router';

const rustFunc = async (a: number, b: number, operation: String) => {
  if (operation === "add") {
    return a + b //utils.add(a, b)
  } else if (operation === "subtract") {
    return a - b //utils.subtract(a, b)
  } else if (operation === "multiply") {
    return a * b //utils.multiply(a, b)
  } else if (operation === "divide") {
    return b === 0 ? a : a / b //utils.divide(a, b)
  }
}


const Home: NextPage = (props: any) => {
  const router = useRouter()
  const { slug } = router.query
  const operations = ["add", "subtract", "multiply", "divide"]
  const [operation, setOperation] = useState<string>(operations[0])
  const [a, setA] = useState<number>(0)
  const [b, setB] = useState<number>(0)
  const [result, setResult] = useState<number | undefined>(0)
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sullivan Lucas Myer
        </Typography>
        <Stack spacing={2}>
          <Select label={"Operation"} value={operation} onChange={(e) => setOperation(e.target.value)}>
            {operations.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </Select>
          <TextField label={"X"} type={"number"} value={a} onChange={(e) => setA(Number(e.target.value))}/>
          <TextField label={"Y"} type={"number"} value={b} onChange={(e) => setB(Number(e.target.value))}/>
          <Button variant={"outlined"} onClick={async () => setResult(await rustFunc(a, b, operation))}>Compute</Button>
          <Typography variant="h4" component="h1" gutterBottom> RESULT: {result}</Typography>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
