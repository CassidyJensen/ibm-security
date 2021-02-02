/**
 * @file Action bar module stories.
 * @copyright IBM Security 2021
 */

import { Bee16, UserAvatar16 } from '@carbon/icons-react';
import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
import withResponsive from '../../../../.storybook/decorators';

import { ListModule } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(ListModule),
  component: ListModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
  decorators: [withResponsive],
};

export const Default = () => (
  <ListModule>
    {({ getLayoutProps }) => (
      <>
        <Bee16 {...getLayoutProps()} />
        <UserAvatar16 {...getLayoutProps()} />

        {ListModule.name}
      </>
    )}
  </ListModule>
);
