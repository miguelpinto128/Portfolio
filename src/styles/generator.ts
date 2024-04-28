import { margin, padding } from 'polished';

export const generator = {
  namedProps: [],

  spaceProps: [
    { prop: 'padding', units: 'rem' },
    { prop: 'margin', units: 'rem' }
  ],

  variableProps: [
    { name: 'opacity', cssProp: 'opacity' },
    { name: 'tAlign', cssProp: 'text-align' },
    { name: 'tTransform', cssProp: 'text-transform' },
    { name: 'bottom', cssProp: 'bottom' },
    { name: 'top', cssProp: 'top' },
    { name: 'maxH', cssProp: 'max-height', units: 'rem' },
    { name: 'maxW', cssProp: 'max-width', units: 'rem' },
    { name: 'minH', cssProp: 'min-height', units: 'rem' },
    { name: 'minW', cssProp: 'min-width', units: 'rem' },
    { name: 'h', cssProp: 'height', units: 'rem' },
    { name: 'w', cssProp: 'width', units: 'rem' },
    { name: 'display', cssProp: 'display' },
    { name: 'fDirection', cssProp: 'flex-direction' },
    { name: 'fJustify', cssProp: 'justify-content' },
    { name: 'fAlign', cssProp: 'align-items' },
    { name: 'fShrink', cssProp: 'flex-shrink' },
    { name: 'fGrow', cssProp: 'flex-grow' },
    { name: 'fWrap', cssProp: 'flex-wrap' },
    { name: 'order', cssProp: 'order' },
    { name: 'fWeight', cssProp: 'font-weight' },
    { name: 'fSize', cssProp: 'font-size', units: 'rem' },
    { name: 'lHeight', cssProp: 'line-height', units: 'rem' },
    { name: 'fStyle', cssProp: 'font-style' },
    { name: 'color', cssProp: 'color' },
    { name: 'bgColor', cssProp: 'background-color' },
    { name: 'position', cssProp: 'position' },
    { name: 'top', cssProp: 'top', units: 'rem' },
    { name: 'bottom', cssProp: 'bottom', units: 'rem' },
    { name: 'left', cssProp: 'left', units: 'rem' },
    { name: 'right', cssProp: 'right', units: 'rem' },
    { name: 'overflow', cssProp: 'overflow' },
    { name: 'overflowX', cssProp: 'overflow-x' },
    { name: 'overflowY', cssProp: 'overflow-y' },
    { name: 'zIndex', cssProp: 'z-index' },
    { name: 'cursor', cssProp: 'cursor' },
    { name: 'margin', helperFn: margin, units: 'rem' },
    { name: 'padding', helperFn: padding, units: 'rem' },
    { name: 'bRadius', cssProp: 'border-radius', units: 'rem' },
    { name: 'bTopLeftRadius', cssProp: 'border-top-left-radius', units: 'rem' },
    { name: 'bTopRightRadius', cssProp: 'border-top-right-radius', units: 'rem' },
    { name: 'bBottomLeftRadius', cssProp: 'border-bottom-left-radius', units: 'rem' },
    { name: 'bBottomRightRadius', cssProp: 'border-bottom-right-radius', units: 'rem' },
    { name: 'wSpace', cssProp: 'white-space' },
    { name: 'letterSpaccing', cssProp: 'letter-spacing', units: 'rem' },
    { name: 'gap', cssProp: 'gap', units: 'rem' },
  ]
};
 