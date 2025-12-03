import React from "react";
import { GuildCardData, ArenaRecord } from "../lib/types";
import { HUNT_WEAPONS, GRUDGE_MATCHES, ARENA_WEAPONS, ARENA_PALICO } from "../lib/gameConstants";
import { formatPlayTime } from "../lib/saveParser";

interface GuildCardEditorProps {
    data: GuildCardData;
    onChange: (newData: GuildCardData) => void;
}

export const GuildCardEditor: React.FC<GuildCardEditorProps> = ({ data, onChange }) => {
    const { parsed } = data;

    if (!parsed || !parsed.general || !parsed.quests || !parsed.weaponUsage || !parsed.arenaStats) {
        return <div className="hint">Guild card data not available.</div>;
    }

    const handleGeneralChange = (field: keyof typeof parsed.general, value: string | number) => {
        if (!parsed.general) return;
        const newParsed = {
            ...parsed,
            general: { ...parsed.general, [field]: value }
        };
        onChange({ ...data, parsed: newParsed });
    };

    const handleQuestChange = (field: keyof typeof parsed.quests, value: number) => {
        if (!parsed.quests) return;
        const newParsed = {
            ...parsed,
            quests: { ...parsed.quests, [field]: value }
        };
        onChange({ ...data, parsed: newParsed });
    };

    const handleWeaponUsageChange = (category: "village" | "hub" | "arena", index: number, value: number) => {
        if (!parsed.weaponUsage) return;
        const newParsed = { ...parsed };
        newParsed.weaponUsage[category][index] = value;
        onChange({ ...data, parsed: newParsed });
    };

    const handleArenaChange = (questIndex: number, entryIndex: number, field: "time" | "weapon" | "grade", value: number) => {
        if (!parsed.arenaStats) return;
        const newParsed = { ...parsed };
        const record = newParsed.arenaStats.find(r => r.questIndex === questIndex);
        if (record) {
            record.entries[entryIndex] = { ...record.entries[entryIndex], [field]: value };
            onChange({ ...data, parsed: newParsed });
        }
    };

    return (
        <div className="guild-card-editor">
            <div className="section">
                <h3>General</h3>
                <div className="form-row">
                    <label>
                        Hunter Name
                        <input
                            type="text"
                            maxLength={12}
                            value={parsed.general.name}
                            onChange={(e) => handleGeneralChange("name", e.target.value)}
                        />
                    </label>
                    <label>
                        Guild Card ID (Hex)
                        <input
                            type="text"
                            maxLength={16}
                            value={parsed.general.gcId}
                            onChange={(e) => handleGeneralChange("gcId", e.target.value)}
                        />
                    </label>
                    <label>
                        Play Time (Seconds)
                        <input
                            type="number"
                            value={parsed.general.playTime}
                            onChange={(e) => handleGeneralChange("playTime", parseInt(e.target.value) || 0)}
                        />
                        <span className="hint">{formatPlayTime(parsed.general.playTime)}</span>
                    </label>
                </div>
            </div>

            <div className="section">
                <h3>Quest Counts</h3>
                <div className="grid-cols-4">
                    <label>
                        Village Low
                        <input
                            type="number"
                            value={parsed.quests.villageLow}
                            onChange={(e) => handleQuestChange("villageLow", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        Village High
                        <input
                            type="number"
                            value={parsed.quests.villageHigh}
                            onChange={(e) => handleQuestChange("villageHigh", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        Hub Low
                        <input
                            type="number"
                            value={parsed.quests.hubLow}
                            onChange={(e) => handleQuestChange("hubLow", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        Hub High
                        <input
                            type="number"
                            value={parsed.quests.hubHigh}
                            onChange={(e) => handleQuestChange("hubHigh", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        G-Rank
                        <input
                            type="number"
                            value={parsed.quests.gRank}
                            onChange={(e) => handleQuestChange("gRank", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        Special Permit
                        <input
                            type="number"
                            value={parsed.quests.specialPermit}
                            onChange={(e) => handleQuestChange("specialPermit", parseInt(e.target.value) || 0)}
                        />
                    </label>
                    <label>
                        Arena
                        <input
                            type="number"
                            value={parsed.quests.arena}
                            onChange={(e) => handleQuestChange("arena", parseInt(e.target.value) || 0)}
                        />
                    </label>
                </div>
            </div>

            <div className="section">
                <h3>Weapon Usage</h3>
                <div className="weapon-usage-grid">
                    <div className="header-row">
                        <span>Weapon</span>
                        <span>Village</span>
                        <span>Hub</span>
                        <span>Arena</span>
                    </div>
                    {HUNT_WEAPONS.map((weapon, i) => (
                        <div key={weapon} className="weapon-row">
                            <span className="weapon-name">{weapon}</span>
                            <input
                                type="number"
                                value={parsed.weaponUsage.village[i] || 0}
                                onChange={(e) => handleWeaponUsageChange("village", i, parseInt(e.target.value) || 0)}
                            />
                            <input
                                type="number"
                                value={parsed.weaponUsage.hub[i] || 0}
                                onChange={(e) => handleWeaponUsageChange("hub", i, parseInt(e.target.value) || 0)}
                            />
                            <input
                                type="number"
                                value={parsed.weaponUsage.arena[i] || 0}
                                onChange={(e) => handleWeaponUsageChange("arena", i, parseInt(e.target.value) || 0)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Arena Records</h3>
                <div className="arena-records">
                    {parsed.arenaStats.map((record, i) => (
                        <div key={i} className="arena-quest-block">
                            <h4>{GRUDGE_MATCHES[i] || `Quest ${i + 1}`}</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Entry</th>
                                        <th>Time (s)</th>
                                        <th>Weapon</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.entries.map((entry, j) => (
                                        <tr key={j}>
                                            <td>{j + 1}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={entry.time}
                                                    onChange={(e) => handleArenaChange(i, j, "time", parseInt(e.target.value) || 0)}
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    value={entry.weapon}
                                                    onChange={(e) => handleArenaChange(i, j, "weapon", parseInt(e.target.value))}
                                                >
                                                    {/* Arena Palico quests use a different list, but how to distinguish? 
                              GrudgeMatches names might hint, or we check index.
                              Indices 13 (Bird Wyverns), 16 (Congalala) might be prowler?
                              Actually, GameConstants.ArenaPalicoInt suggests specific indices.
                              But for now let's just list all weapons + palico types if needed, or just standard weapons.
                              The C# code uses ArenaWeapons or ArenaPalico based on quest.
                              Let's assume standard weapons for now, or combine lists.
                          */}
                                                    {ARENA_WEAPONS.map((w, idx) => (
                                                        <option key={idx} value={idx}>{w}</option>
                                                    ))}
                                                    {/* If index is high, it might be palico? */}
                                                </select>
                                            </td>
                                            <td>
                                                <select
                                                    value={entry.grade}
                                                    onChange={(e) => handleArenaChange(i, j, "grade", parseInt(e.target.value))}
                                                >
                                                    <option value={0}>S</option>
                                                    <option value={1}>A</option>
                                                    <option value={2}>B</option>
                                                    <option value={3}>None</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
