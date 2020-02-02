import React from 'react';
import { NextPage } from 'next';
import Button from '@material-ui/core/Button';

import { getLayout } from 'Layouts/public';

const Landing: NextPage = () => (
  <>
    <h1>Hello world!</h1>
    <Button variant="contained" color="primary">
      Primary
    </Button>
  </>
);

// @ts-ignore
Landing.getLayout = getLayout;
// @ts-ignore
Landing.whyDidYouRender = true;

export default Landing;
