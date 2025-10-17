import React, { JSX } from 'react';
import Placeholder from 'components/content-sdk/Placeholder';
import { ComponentProps } from 'lib/component-props';
import { getCleanComponentMap } from 'src/lib/component-map-utils';

const PartialDesignDynamicPlaceholder = (props: ComponentProps): JSX.Element => {
  const componentMap = getCleanComponentMap();
  return (
    <Placeholder
      name={props.rendering?.params?.sig || ''}
      rendering={props.rendering}
      page={props.page}
      componentMap={componentMap}
    />
  );
};

export const Default = PartialDesignDynamicPlaceholder;
export default PartialDesignDynamicPlaceholder;
