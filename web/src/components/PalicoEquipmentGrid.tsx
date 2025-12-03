import React from 'react';
import { PalicoEquipmentSlot } from '../lib/types';
import {
  getPalicoEquipmentEntry,
  getPalicoEquipmentName,
  getPalicoEquipmentIcon,
  getPalicoSlotRarityColor,
  isPalicoEquipmentSlotEmpty
} from '../lib/palicoEquipmentUtils';

interface PalicoEquipmentGridProps {
  entries: PalicoEquipmentSlot[];
  onSelect: (entry: PalicoEquipmentSlot, index: number) => void;
  selectedIndex: number | null;
}

const PalicoEquipmentGrid: React.FC<PalicoEquipmentGridProps> = ({
  entries,
  onSelect,
  selectedIndex
}) => {
  // Filter out empty slots
  const filled = entries.filter((entry) => !isPalicoEquipmentSlotEmpty(entry));

  if (filled.length === 0) {
    return <p className="hint">No palico equipment in box. Add items from the catalog on the left.</p>;
  }

  return (
    <div className="inventory-grid">
      {filled.map((entry) => {
        const icon = getPalicoEquipmentIcon(entry.type);
        const name = getPalicoEquipmentName(entry.type, entry.equipId);
        const catalogEntry = getPalicoEquipmentEntry(entry.type, entry.equipId);
        const rarityColor = getPalicoSlotRarityColor(entry);
        const isSelected = selectedIndex === entry.slot - 1;

        return (
          <div
            key={entry.slot}
            className={`inventory-slot ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(entry, entry.slot - 1)}
            title={`${name} • Rare ${catalogEntry?.rarity ?? '?'}`}
          >
            <div
              className="item-icon-container"
              style={
                rarityColor
                  ? ({
                      '--icon-color': rarityColor,
                      '--icon-url': `url(${icon})`
                    } as React.CSSProperties)
                  : {}
              }
            >
              <img src={icon} alt={name} className="item-icon" />
            </div>
            <span className="item-count">{catalogEntry?.rarity ?? '?'}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PalicoEquipmentGrid;
