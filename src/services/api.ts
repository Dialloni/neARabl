import axios from 'axios';
import Papa from 'papaparse';

const API_URL = 'https://raw.githubusercontent.com/jinchen003/Nearabl.Sample.Data/main/us-500.csv';

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);

        const parsed = Papa.parse(response.data, {
            header: true, // Automatically use the first row as headers
            skipEmptyLines: true,
        });
        return parsed.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const parseCSV = (data: string) => {
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Skip empty lines
    if (lines.length < 2) {
        console.error('CSV data is empty or malformed');
        return [];
    }

    const headers = lines[0].split(',').map(header => header.trim()); // Trim headers
    const result: any[] = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',').map(value => value.trim()); // Trim values
        if (currentLine.length !== headers.length) {
            console.warn(`Skipping malformed line: ${lines[i]}`);
            continue;
        }

        const obj: any = {};
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj);
    }

    return result;
};