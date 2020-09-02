/**
 * @file Story information.
 * @copyright IBM Security 2019 - 2020
 */

import { patterns } from '../../../../.storybook';
import { namespace } from '../LayoutModules/LayoutModule';

export default `In combination with ['Grid' components](https://react.carbondesignsystem.com/?path=/story/grid--auto-columns), leverage 'LayoutModules' components as a foundation for horizontal layout. Spacing classes provide additional customisation to margin and padding, for example \`${namespace}--layout-01--pt\`

- [Learn more](https://www.carbondesignsystem.com/guidelines/spacing/overview#spacing-scale) about Carbon and additional values for spacing classes`;

export const getTitle = ({ displayName, name }) =>
  patterns(`UNSTABLE Layout Modules/${displayName || name}`);
