// src/components/Production/StatusBadge.js

import React from 'react';

const StatusBadge = ({ status }) => {
    let badgeColor;

    switch (status) {
        case 'Ready to Dispatch':
            badgeColor = 'bg-green-500';
            break;
        case 'Dispatched':
            badgeColor = 'bg-blue-500';
            break;
        case 'Canceled':
            badgeColor = 'bg-red-500';
            break;
        case 'Workstarted':
            badgeColor = 'bg-yellow-500';
            break;
        case 'Payment Done':
            badgeColor = 'bg-gray-500';
            break;
        case 'Site Clearance':
            badgeColor = 'bg-orange-500';
            break;
        default:
            badgeColor = 'bg-gray-300';
            break;
    }

    return (
        <span className={`inline-flex px-2 py-1 text-xs font-medium text-white rounded-full ${badgeColor}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
