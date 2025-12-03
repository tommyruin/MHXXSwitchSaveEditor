import React from "react";
import { MonsterLogData } from "../lib/types";

interface MonsterLogsEditorProps {
    data: MonsterLogData;
    onChange: (newData: MonsterLogData) => void;
}

export const MonsterLogsEditor: React.FC<MonsterLogsEditorProps> = ({ data, onChange }) => {
    const { parsed } = data;

    if (!parsed || !Array.isArray(parsed)) {
        return <div className="hint">Monster logs data not available.</div>;
    }

    const handleChange = (index: number, field: "killed" | "captured" | "sizeSmall" | "sizeLarge", value: number) => {
        if (!Array.isArray(parsed) || !parsed[index]) return;
        const newParsed = [...parsed];
        newParsed[index] = { ...newParsed[index], [field]: value };
        onChange({ ...data, parsed: newParsed });
    };

    return (
        <div className="monster-logs-editor">
            <div className="monster-list">
                <div className="header-row">
                    <span className="name-col">Monster</span>
                    <span>Killed</span>
                    <span>Captured</span>
                    <span>Smallest</span>
                    <span>Largest</span>
                </div>
                {parsed.map((entry, i) => (
                    <div key={i} className="monster-row">
                        <span className="name-col">{entry.name}</span>
                        <input
                            type="number"
                            value={entry.killed}
                            onChange={(e) => handleChange(i, "killed", parseInt(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            value={entry.captured}
                            onChange={(e) => handleChange(i, "captured", parseInt(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            value={entry.sizeSmall}
                            onChange={(e) => handleChange(i, "sizeSmall", parseInt(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            value={entry.sizeLarge}
                            onChange={(e) => handleChange(i, "sizeLarge", parseInt(e.target.value) || 0)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
