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

    // Helper to sanitize display value - remove any embedded null bytes for display
    const sanitizeForDisplay = (text: string): string => {
        return text.replace(/\0/g, '');
    };

    const handleManualChange = (index: number, value: string) => {
        if (!parsed.manual) return;
        const newParsed = { ...parsed };
        // Remove any null bytes from user input
        newParsed.manual[index] = value.replace(/\0/g, '');
        onChange({ ...data, parsed: newParsed });
    };

    const handleAutomaticChange = (index: number, value: string) => {
        if (!parsed.automatic) return;
        const newParsed = { ...parsed };
        // Remove any null bytes from user input
        newParsed.automatic[index] = value.replace(/\0/g, '');
        onChange({ ...data, parsed: newParsed });
    };

    return (
        <div className="shoutouts-editor">
            <div className="section">
                <h3>Manual Shoutouts</h3>
                <div className="shoutouts-list">
                    {parsed.manual.map((text, i) => (
                        <label key={`manual-${i}`} className="field">
                            <div className="field-top">
                                <span>#{i + 1}</span>
                            </div>
                            <input
                                type="text"
                                maxLength={60}
                                value={sanitizeForDisplay(text)}
                                onChange={(e) => handleManualChange(i, e.target.value)}
                                placeholder={`Manual shoutout ${i + 1}`}
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Automatic Shoutouts</h3>
                <div className="shoutouts-list">
                    {parsed.automatic.map((text, i) => (
                        <label key={`auto-${i}`} className="field">
                            <div className="field-top">
                                <span>#{i + 1}</span>
                            </div>
                            <input
                                type="text"
                                maxLength={60}
                                value={sanitizeForDisplay(text)}
                                onChange={(e) => handleAutomaticChange(i, e.target.value)}
                                placeholder={`Automatic shoutout ${i + 1}`}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};
