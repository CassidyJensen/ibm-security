/**
 * @file Button cluster module stories.
 * @copyright IBM Security 2020
 */

import { Add16, Edit16 } from '@carbon/icons-react';

import React from 'react';

import withResponsive from '../../../../.storybook/decorators';
import { Button, ButtonCluster } from '../../..';
import getTitle, { getDocsParameters } from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(ButtonCluster),
  component: ButtonCluster,
  parameters: {
    ...getDocsParameters(page),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <ButtonCluster>
    <Button kind="ghost" renderIcon={Add16}>
      Button 1
    </Button>

    <Button kind="ghost" renderIcon={Edit16}>
      Button 2
    </Button>
  </ButtonCluster>
);
