import { FunctionComponent } from 'react';

import {} from './Styles';
import { Props, defaultProps } from './Props';

const Component: FunctionComponent<Props> = () => {
  return (
    <>

    </>
  );
};
Component.defaultProps = defaultProps;
// @ts-ignore
Component.whyDidYouRender = true;

export default Component;

