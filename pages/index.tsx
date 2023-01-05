import { useState } from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Button, TextField, Stack, Select, MenuItem } from '@mui/material';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import { useRouter } from 'next/router';

const rustFunc = async (utils: any, a: number, b: number, operation: String) => {
  if (operation === "add") {
    return utils.add(a, b)
  } else if (operation === "subtract") {
    return utils.subtract(a, b)
  } else if (operation === "multiply") {
    return utils.multiply(a, b)
  } else if (operation === "divide") {
    return utils.divide(a, b)
  }
}


const Home: NextPage = (props: any) => {
  const router = useRouter()
  const { slug } = router.query
  const operations = ["add", "subtract", "multiply", "divide"]
  const [operation, setOperation] = useState(operations[0])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)
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
          <Button variant={"outlined"} onClick={async () => setResult(await rustFunc(props.utils, a, b, operation))}>Compute</Button>
          <Typography variant="h4" component="h1" gutterBottom> RESULT: {result}</Typography>
        </Stack>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
