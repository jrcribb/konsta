import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListButtonClasses = (props, colors, classes) => {
  const { hairlines } = props;
  return {
    base: ``,
    button: {
      common: cls(
        positionClass('relative', classes),
        hairlines && 'hairline-b active:hairline-transparent',
        `flex items-center justify-center px-4 space-x-1 w-full duration-300 active:duration-0 focus:outline-none ${colors.touchRipple} overflow-hidden select-none`
      ),
      ios: cls('h-11', colors.textIos, colors.activeBgIos, colors.activeBgIos),
      material: cls(
        'h-12 font-medium',
        colors.textMaterial,
        colors.activeBgMaterial
      ),
    },
  };
};
