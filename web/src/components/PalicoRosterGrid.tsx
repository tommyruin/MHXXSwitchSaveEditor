import React from 'react';
import { PalicoRosterEntry } from '../lib/types';
import {
  getPalicoEquipmentName,
  getPalicoEquipmentIcon,
  getForteName,
  isPalicoRosterEntryEmpty,
  PALICO_EQUIPMENT_TYPES
} from '../lib/palicoEquipmentUtils';
import './PalicoRosterGrid.css';

interface PalicoRosterGridProps {
  entries: PalicoRosterEntry[];
  onSelect: (entry: PalicoRosterEntry, index: number) => void;
  selectedIndex: number | null;
}

const PalicoRosterGrid: React.FC<PalicoRosterGridProps> = ({
  entries,
  onSelect,
  selectedIndex
}) => {
  // Filter non-empty palicos (name not empty)
  const filled = entries.filter((entry) => !isPalicoRosterEntryEmpty(entry));

  if (filled.length === 0) {
    return <p className="hint">No palicos found in roster.</p>;
  }

  return (
    <div className="palico-roster-grid">
      {filled.map((entry) => {
        const isSelected = selectedIndex === entry.slot - 1;
        const weaponName = getPalicoEquipmentName(
          PALICO_EQUIPMENT_TYPES.WEAPON,
          entry.equippedWeaponId
        );
        const helmetName = getPalicoEquipmentName(
          PALICO_EQUIPMENT_TYPES.HELMET,
          entry.equippedHelmetId
        );
        const bodyName = getPalicoEquipmentName(
          PALICO_EQUIPMENT_TYPES.BODY,
          entry.equippedBodyId
        );

        const weaponIcon = getPalicoEquipmentIcon(PALICO_EQUIPMENT_TYPES.WEAPON);
        const helmetIcon = getPalicoEquipmentIcon(PALICO_EQUIPMENT_TYPES.HELMET);
        const bodyIcon = getPalicoEquipmentIcon(PALICO_EQUIPMENT_TYPES.BODY);

        return (
          <button
            key={entry.slot}
            type="button"
            className={`palico-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(entry, entry.slot - 1)}
          >
            <div className="palico-card__top">
              <span className="pill small">Slot {entry.slot}</span>
              <span className="pill small">{getForteName(entry.forte)}</span>
            </div>
            <div className="palico-card__body">
              <p className="label">{entry.name}</p>
              <p className="meta">Level {entry.level}</p>
            </div>
            <div className="palico-card__equipment">
              <div className="palico-equipment-item">
                <img src={weaponIcon} alt="Weapon" />
                <p className="meta">{weaponName}</p>
              </div>
              <div className="palico-equipment-item">
                <img src={helmetIcon} alt="Helmet" />
                <p className="meta">{helmetName}</p>
              </div>
              <div className="palico-equipment-item">
                <img src={bodyIcon} alt="Armor" />
                <p className="meta">{bodyName}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PalicoRosterGrid;
