import React, { useEffect, useState } from "react";

class ProgressLineProps {
    label: string;
    backgroundColor?: string;
    visualParts: [{
        percentage: string,
        color: string
    }];
}

const ProgressLine = ({ label, backgroundColor = "#e5e5e5", visualParts = [{ percentage: "0", color: "white" }] }: ProgressLineProps) => {
    const [widths, setWidths] = useState(visualParts.map(() => "0"));

    useEffect(() => {
        requestAnimationFrame(() => {
            setWidths(
                visualParts.map(item => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);

    return (
        <>
            <div className="progressLabel h-4">{label}</div>
            <div className="flex h-4 mb-4 mt-2 shadow" style={{ backgroundColor }}>
                {visualParts.map((_, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: widths[index]
                            }}
                            className="progressVisualPart h-4"
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProgressLine;