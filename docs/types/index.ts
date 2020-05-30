export enum SectionType {
    BORDER = 'border',
    BREAKPOINTS = 'breakpoints',
    COLOR = 'color',
    DISPLAY = 'display',
    FLEXBOX = 'flexbox',
    FLOAT = 'float',
    FONT_WEIGHT = 'font-weight',
    GRID = 'grid',
    HEIGHT = 'height',
    MAX_WIDTH = 'max-width',
    OPACITY = 'opacity',
    POSITION = 'position',
    RADIUS = 'radius',
    SHADOW = 'shadow',
    SPACING = 'spacing',
    TEXT_ALIGN = 'text-align',
    TEXT_DECORATION = 'text-decoration',
    TEXT_TRANSFORM = 'text-transform',
    TYPOGRAPHY = 'typography',
    WIDTH = 'width',
}

export enum VariableType {
    BREAKPOINTS,
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    GRID,
    LINE_HEIGHT,
    SHADOWS,
}

export interface NavigationItem {
    displayName: string;
}
