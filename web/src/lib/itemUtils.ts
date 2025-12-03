import itemIcons from './data/itemIcons.json';
import itemColors from './data/itemColors.json';

export const getIconPath = (itemId: number) => {
    // @ts-ignore
    const iconName = itemIcons[itemId];
    if (iconName) {
        return `/icons/items/${iconName}.png`;
    }
    return null; // Or a default icon
};

export const getIconColor = (itemId: number) => {
    // @ts-ignore
    const colorCode = itemColors[itemId];
    if (colorCode) {
        // Map color codes to hex colors based on actual MHGU items
        // Verified with: Gunpowder, Mega Pickaxe, Maccao Hide, Honey, Mega Potion, Antidote
        const colorMap: Record<number, string> = {
            0: '#F5F5F5', // White
            1: '#E1505C', // Red
            2: '#69BF83', // Green
            3: '#9FBBFF', // Blue
            4: '#F7CF65', // Yellow
            5: '#C3A3D1', // Purple
            6: '#9BDFF0', // Light Blue
            7: '#F79A65', // Orange
            8: '#F8889D', // Pink
            9: '#ADD56D', // Light Green
            10: '#AAAAAA', // Gray
            11: '#C1972E', // Brown
            12: '#57EBC7', // Emerald
            13: '#55893B', // Moss
            14: '#990000', // Rose
            15: '#003399', // Dark Blue
            16: '#660066', // Dark Purple
        };
        // @ts-ignore
        return colorMap[colorCode] || null;
    }
    return null;
};
