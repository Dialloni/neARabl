import React from 'react';

interface SummaryStatsProps {
    data: any[];
}

const SummaryStats: React.FC<SummaryStatsProps> = ({ data }) => {
    const stateCounts = data.reduce((acc: { [key: string]: number }, item: any) => {
        acc[item.state] = (acc[item.state] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="summary-stats">
            <h2>Summary Statistics</h2>
            <ul>
                {Object.entries(stateCounts).map(([state, count]) => (
                    <li key={state}>
                        {state}: {count} people
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SummaryStats;