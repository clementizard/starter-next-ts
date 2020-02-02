import React, { FunctionComponent, useMemo } from 'react';

import { Container } from './Styles';
import { Props } from './Props';

const Default: FunctionComponent<Props> = ({ children }) => {
  return useMemo(() => <Container>{children}</Container>, [children]);
};
// @ts-ignore
Default.whyDidYouRender = true;

export default Default;
