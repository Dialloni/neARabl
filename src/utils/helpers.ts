export const filterByField = (data: any[], field: string, value: string) => {
    return data.filter(item => item[field]?.toLowerCase() === value.toLowerCase());
};

export const formatAddress = (address: string, city: string, state: string, zip: string) => {
    return `${address}, ${city}, ${state} ${zip}`;
};

export const getSummaryStats = (data: any[]) => {
    const stats: { [key: string]: number } = {};
    data.forEach(item => {
        const state = item.state;
        stats[state] = (stats[state] || 0) + 1;
    });
    return stats;
};