import React from 'react';

interface CompanyDetailsProps {
    company: any;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ company }) => {
    return (
        <div className="company-details">
            <h2>{company.company_name}</h2>
            <p>Address: {company.address}, {company.city}, {company.state}, {company.zip}</p>
            <p>Phone: {company.phone}</p>
            <video controls width="400">
              <source src="../assets/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default CompanyDetails;