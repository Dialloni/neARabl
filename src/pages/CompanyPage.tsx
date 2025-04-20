import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import videoFile from '../assets/videos/video.mp4'; // Import the video file

const CompanyPage: React.FC = () => {
    const location = useLocation();
    const company = location.state?.company;

    if (!company) {
        return <p>No company details available.</p>;
    }

    return (
        <div className="container">
            <h1>{company.company_name}</h1>
            <p>Address: {company.address}</p>
            <p>City: {company.city}</p>
            <p>State: {company.state}</p>
            <p>ZIP: {company.zip}</p>
            <p>Phone: {company.phone}</p>
            <video
                controls
                width="600"
                style={{ marginTop: '20px', borderRadius: '8px' }}
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{ marginTop: '20px' }}>
                <Link
                    to="/"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                    }}
                >
                    Homepage
                </Link>
            </div>
        </div>
    );
};

export default CompanyPage;