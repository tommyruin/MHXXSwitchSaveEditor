import React from 'react';
import { ItemSlot } from '../lib/types';
import { ITEM_NAMES } from '../lib/data/items';
import { getIconPath, getIconColor } from '../lib/itemUtils';

interface InventoryGridProps {
    items: ItemSlot[];
    onItemClick: (item: ItemSlot, index: number) => void;
    selectedIndex: number | null;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({ items, onItemClick, selectedIndex }) => {
    // MH inventory is typically 10 columns wide
    // We'll display all items in a flex/grid container


    return (
        <div className="inventory-grid">
            {items.map((item, index) => {
                const iconPath = getIconPath(item.id);
                const iconColor = getIconColor(item.id);
                const isSelected = index === selectedIndex;

                return (
                    <div
                        key={(item as any).slot || `${index}-${item.id}`}
                        className={`inventory-slot ${isSelected ? 'selected' : ''}`}
                        onClick={() => onItemClick(item, index)}
                        title={ITEM_NAMES[item.id] || `Item ${item.id}`}
                    >
                        {iconPath ? (
                            <div
                                className="item-icon-container"
                                style={iconColor ? {
                                    '--icon-color': iconColor,
                                    '--icon-url': `url(${iconPath})`
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
