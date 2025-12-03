import React from 'react';
import { PalicoRosterEntry } from '../lib/types';
import {
  getPalicoEquipmentName,
  getPalicoEquipmentIcon,
  getForteName,
  isPalicoRosterEntryEmpty,
  PALICO_EQUIPMENT_TYPES
} from '../lib/palicoEquipmentUtils';

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
    <div className="equipment-grid">
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
            className={`equipment-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(entry, entry.slot - 1)}
          >
            <div className="equipment-card__top">
              <span className="pill small">Slot {entry.slot}</span>
              <span className="pill small">{getForteName(entry.forte)}</span>
            </div>
            <div className="equipment-card__body">
              <div style={{ flex: 1 }}>
                <p className="label">{entry.name}</p>
                <p className="meta">Level {entry.level}</p>
              </div>
            </div>
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src={weaponIcon} alt="Weapon" style={{ width: '16px', height: '16px' }} />
                <p className="meta" style={{ margin: 0 }}>{weaponName}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src={helmetIcon} alt="Helmet" style={{ width: '16px', height: '16px' }} />
                <p className="meta" style={{ margin: 0 }}>{helmetName}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img src={bodyIcon} alt="Armor" style={{ width: '16px', height: '16px' }} />
                <p className="meta" style={{ margin: 0 }}>{bodyName}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PalicoRosterGrid;
