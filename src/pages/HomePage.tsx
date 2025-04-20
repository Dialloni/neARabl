import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DataTable from '../components/DataTable';
import { fetchData } from '../services/api';

const HomePage: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchField, setSearchField] = useState<string>('');
    const [targetValue, setTargetValue] = useState<string>('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
                setFilteredData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    const handleSearch = (field: string, value: string) => {
        setSearchField(field);
        setTargetValue(value);

        if (value) {
            const filtered = data.filter(item =>
                item[field]?.toString().toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);

            // Navigate to the company route if a single company is found
            if (filtered.length === 1 && field === 'company_name') {
                navigate(`/company/${filtered[0].id}`, { state: { company: filtered[0] } });
            }
        } else {
            setFilteredData(data);
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>People Directory</h1>
                <Link
                    to="/visualization"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                    }}
                >
                    See Chart
                </Link>
            </div>
            <SearchBar onSearch={handleSearch} />
            <DataTable data={filteredData} searchField={searchField} targetValue={targetValue} />
        </div>
    );
};

export default HomePage;