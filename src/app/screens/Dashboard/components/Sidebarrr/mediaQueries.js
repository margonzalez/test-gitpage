import ScreenSizes from './screenSizes';

export default {
  small_and_down: `@media screen and (max-width: ${ScreenSizes.width.medium - 1}px)`,
  small_and_up: `@media screen and (min-width: ${ScreenSizes.width.small}px)`,
  medium_and_up: `@media screen and (min-width: ${ScreenSizes.width.medium}px)`,
  large_and_up: `@media screen and (min-width: ${ScreenSizes.width.large}px)`,
  extralarge_and_up: `@media screen and (min-width: ${ScreenSizes.width.extralarge}px)`
};
