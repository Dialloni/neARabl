import React from 'react';

interface UserDetailsProps {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
    };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    return (
        <div className="user-details">
            <h2>User Details</h2>
            <table className="user-details-table">
                <tbody>
                    <tr>
                        <th className="label-first-name">First Name</th>
                        <td>{user.first_name}</td>
                    </tr>
                    <tr>
                        <th className="label-last-name">Last Name</th>
                        <td>{user.last_name}</td>
                    </tr>
                    <tr>
                        <th className="label-email">Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th className="label-phone">Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;