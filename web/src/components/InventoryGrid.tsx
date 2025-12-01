import React from 'react';
import { ItemSlot } from '../lib/types';
import { ITEM_NAMES } from '../lib/data/items';
import itemIcons from '../lib/data/itemIcons.json';
import itemColors from '../lib/data/itemColors.json';

interface InventoryGridProps {
    items: ItemSlot[];
    onItemClick: (item: ItemSlot, index: number) => void;
    selectedIndex: number | null;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({ items, onItemClick, selectedIndex }) => {
    // MH inventory is typically 10 columns wide
    // We'll display all items in a flex/grid container

    const getIconPath = (itemId: number) => {
        // @ts-ignore
        const iconName = itemIcons[itemId];
        if (iconName) {
            return `/icons/items/${iconName}.png`;
        }
        return null; // Or a default icon
    };

    const getIconColor = (itemId: number) => {
        // @ts-ignore
        const colorCode = itemColors[itemId];
        if (colorCode) {
            // Map color codes to hex colors
            const colorMap: Record<number, string> = {
                1: '#FFFFFF', // White
                2: '#90EE90', // Light Green
                3: '#FFD700', // Gold/Yellow
                4: '#FFA500', // Orange
                5: '#FF6B6B', // Red/Pink
                6: '#87CEEB', // Light Blue
                7: '#9370DB', // Purple
                8: '#A0522D', // Brown
                9: '#808080', // Gray
                10: '#C0C0C0', // Silver
                11: '#FFE4B5', // Beige/Tan
                12: '#98FB98', // Pale Green
                13: '#F0E68C', // Khaki
                14: '#DDA0DD', // Plum
                15: '#FF69B4', // Hot Pink
                16: '#00CED1', // Dark Turquoise
            };
            return colorMap[colorCode] || null;
        }
        return null;
    };

    return (
        <div className="inventory-grid">
            {items.map((item, index) => {
                const iconPath = getIconPath(item.id);
                const iconColor = getIconColor(item.id);
                const isSelected = index === selectedIndex;

                return (
                    <div
                        key={`${index}-${item.id}`}
                        className={`inventory-slot ${isSelected ? 'selected' : ''}`}
                        onClick={() => onItemClick(item, index)}
                        title={ITEM_NAMES[item.id] || `Item ${item.id}`}
                    >
                        {iconPath ? (
                            <div
                                className="item-icon-container"
                                style={iconColor ? {
                                    '--icon-color': iconColor
                                } as React.CSSProperties : {}}
                            >
                                <img
                                    src={iconPath}
                                    alt={ITEM_NAMES[item.id]}
                                    className="item-icon"
                                />
                            </div>
                        ) : (
                            <div className="item-placeholder">?</div>
                        )}
                        <span className="item-count">{item.count}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default InventoryGrid;
