import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VisualizationPage from './pages/VisualizationPage';
import CompanyPage from './pages/CompanyPage'; 
import { fetchData } from './services/api';
import './styles/App.css';

const App: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/visualization" element={<VisualizationPage data={data} />} />
                    <Route path="/company/:id" element={<CompanyPage />} /> 
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;