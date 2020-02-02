import { FunctionComponent, memo } from 'react';

import { Props } from './Props';

const Public: FunctionComponent<Props> = ({ children }) => <>{children}</>;
// @ts-ignore
Public.whyDidYouRender = true;

export default memo(Public);
