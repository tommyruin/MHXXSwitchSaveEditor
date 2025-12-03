import React from "react";
import { ShoutoutData } from "../lib/types";

interface ShoutoutsEditorProps {
    data: ShoutoutData;
    onChange: (newData: ShoutoutData) => void;
}

export const ShoutoutsEditor: React.FC<ShoutoutsEditorProps> = ({ data, onChange }) => {
    const { parsed } = data;

    if (!parsed || !parsed.manual || !parsed.automatic) {
        return <div className="hint">Shoutouts data not available.</div>;
    }

    const handleManualChange = (index: number, value: string) => {
        if (!parsed.manual) return;
        const newParsed = { ...parsed };
        newParsed.manual[index] = value;
        onChange({ ...data, parsed: newParsed });
    };

    const handleAutomaticChange = (index: number, value: string) => {
        if (!parsed.automatic) return;
        const newParsed = { ...parsed };
        newParsed.automatic[index] = value;
        onChange({ ...data, parsed: newParsed });
    };

    return (
        <div className="shoutouts-editor">
            <div className="section">
                <h3>Manual Shoutouts</h3>
                <div className="shoutouts-grid">
                    {parsed.manual.map((text, i) => (
                        <div key={`manual-${i}`} className="shoutout-item">
                            <span className="index">{i + 1}</span>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => handleManualChange(i, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Automatic Shoutouts</h3>
                <div className="shoutouts-grid">
                    {parsed.automatic.map((text, i) => (
                        <div key={`auto-${i}`} className="shoutout-item">
                            <span className="index">{i + 1}</span>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => handleAutomaticChange(i, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
