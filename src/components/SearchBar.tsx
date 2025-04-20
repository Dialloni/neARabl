import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (field: string, value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [field, setField] = useState<string>('first_name');
    const [value, setValue] = useState<string>('');

    const handleSearch = () => {
        onSearch(field, value);
    };

    return (
        <div>
            <select value={field} onChange={(e) => setField(e.target.value)}>
                <option value="first_name">First Name</option>
                <option value="state">State</option>
                <option value="company_name">Company Name</option>
            </select>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;