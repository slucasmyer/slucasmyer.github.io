import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';

const Posts: NextPage = (props: any) => {
  return (
    <Container maxWidth="lg">
      <Box className='page-box'>
        <Typography variant="h4" component="h1" gutterBottom>
          Sullivan Lucas Myer
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Posts;