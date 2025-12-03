import React from "react";
import { HunterEquipmentEntry } from "../lib/types";
import { deriveRarityLabel, getEquipmentTypeName, getRarityColor, getEquipmentName, getEquipmentIcon } from "../lib/equipmentUtils";
import "./EquipmentGrid.css";

interface EquipmentGridProps {
  entries: HunterEquipmentEntry[];
  onSelect: (entry: HunterEquipmentEntry, index: number) => void;
  selectedIndex: number | null;
}

const isEmptyEntry = (entry: HunterEquipmentEntry) =>
  entry.type === 0 && entry.equipId === 0 && entry.transmogId === 0 && entry.deco1 === 0 && entry.deco2 === 0 && entry.deco3 === 0;

const EquipmentGrid: React.FC<EquipmentGridProps> = ({ entries, onSelect, selectedIndex }) => {
  const filled = entries.filter((entry) => !isEmptyEntry(entry));

  if (!filled.length) {
    return <p className="hint">No hunter equipment detected. Add one via the form below.</p>;
  }

  return (
    <div className="equipment-grid">
      {filled.map((entry) => {
        const rarityLabel = deriveRarityLabel(entry.levelBits);
        const color = getRarityColor(entry);
        const isSelected = selectedIndex === entry.slot - 1;
        const icon = getEquipmentIcon(entry.type);
        const name = getEquipmentName(entry.type, entry.equipId);

        return (
          <button
            key={entry.slot}
            type="button"
            className={`equipment-card ${isSelected ? "selected" : ""}`}
            onClick={() => onSelect(entry, entry.slot - 1)}
            style={{ borderColor: color }}
            title={`Slot ${entry.slot} • ${getEquipmentTypeName(entry.type)} • ID ${entry.equipId}`}
          >
            <div className="equipment-card__top">
              <span className="pill small">{`Slot ${entry.slot}`}</span>
              <span className="pill small" style={{ backgroundColor: color, color: "#0b0b0b" }}>
                {`Rare ${rarityLabel}`}
              </span>
            </div>
            <div className="equipment-card__body">
              <div
                className="equipment-icon-container"
                style={
                  color
                    ? ({
                        "--icon-color": color,
                        "--icon-url": `url(${icon})`
                      } as React.CSSProperties)
                    : {}
                }
              >
                <img src={icon} alt={name} className="equipment-icon" />
              </div>
              <div className="equipment-text">
                <p className="label small">{name}</p>
                <p className="meta">{getEquipmentTypeName(entry.type)}</p>
                <p className="meta">
                  ID {entry.equipId} · Transmog {entry.transmogId || "—"}
                </p>
              </div>
            </div>
            {(entry.deco1 || entry.deco2 || entry.deco3) && (
              <p className="meta deco">
                Deco: {entry.deco1 || "—"} / {entry.deco2 || "—"} / {entry.deco3 || "—"}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default EquipmentGrid;
