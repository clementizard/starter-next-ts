import React, { FunctionComponent } from 'react';
import Component from './Component';
import DefaultLayout from '../default';

export const getLayout: FunctionComponent<FunctionComponent> = page => (
  <DefaultLayout>
    <Component>{page}</Component>
  </DefaultLayout>
);
// @ts-ignore
export default Component;
