import { SectionType, NavigationItem } from '../types';

const navigation: Record<SectionType, NavigationItem> = {
    [SectionType.BORDER]: { displayName: 'Border' },
    [SectionType.BREAKPOINTS]: { displayName: 'Breakpoints' },
    [SectionType.COLOR]: { displayName: 'Color' },
    [SectionType.DISPLAY]: { displayName: 'Display' },
    [SectionType.FLEXBOX]: { displayName: 'Flex Box' },
    [SectionType.FLOAT]: { displayName: 'Float' },
    [SectionType.FONT_WEIGHT]: { displayName: 'Font Weight' },
    [SectionType.GRID]: { displayName: 'Grid' },
    [SectionType.HEIGHT]: { displayName: 'Height' },
    [SectionType.MAX_WIDTH]: { displayName: 'Max Width' },
    [SectionType.OPACITY]: { displayName: 'Opacity' },
    [SectionType.POSITION]: { displayName: 'Position' },
    [SectionType.RADIUS]: { displayName: 'Radius' },
    [SectionType.SHADOW]: { displayName: 'Shadow' },
    [SectionType.SPACING]: { displayName: 'Spacing' },
    [SectionType.TEXT_ALIGN]: { displayName: 'Text Align' },
    [SectionType.TEXT_DECORATION]: { displayName: 'Text Decoration' },
    [SectionType.TEXT_TRANSFORM]: { displayName: 'Text Transform' },
    [SectionType.TYPOGRAPHY]: { displayName: 'Typography' },
    [SectionType.WIDTH]: { displayName: 'Width' },
};

export default navigation;
