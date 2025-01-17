import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';

export const Users_STAT = [
    {
        name: 'Total Users',
        icon: UserIcon,
        value: '1,150,320',
        color: '#6366f1',
    },
    {
        name: 'New Users Today',
        icon: UserPlus,
        value: '532',
        color: '#10b981',
    },
    {
        name: 'Active Users',
        icon: UserCheck,
        value: '35,876',
        color: '#f59e0b',
    },
    {
        name: 'Churn Rate',
        icon: UserX,
        value: '1.8%',
        color: '#ef4444',
    },
];

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
}

export const USER_TABLE_DATA = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Customer', status: 'Active' },
    { id: '3', name: 'Robert Brown', email: 'robert.brown@example.com', role: 'Customer', status: 'Inactive' },
    { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Moderator', status: 'Active' },
    { id: '5', name: 'Michael Clark', email: 'michael.clark@example.com', role: 'Customer', status: 'Active' },
    { id: '6', name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'Admin', status: 'Inactive' },
    { id: '7', name: 'David Johnson', email: 'david.johnson@example.com', role: 'Customer', status: 'Active' },
    { id: '8', name: 'Anna Taylor', email: 'anna.taylor@example.com', role: 'Admin', status: 'Active' },
    { id: '9', name: 'Chris Lee', email: 'chris.lee@example.com', role: 'Customer', status: 'Inactive' },
    { id: '10', name: 'Steven White', email: 'steven.white@example.com', role: 'Moderator', status: 'Active' },
    { id: '11', name: 'Olivia King', email: 'olivia.king@example.com', role: 'Customer', status: 'Active' },
    { id: '12', name: 'James Scott', email: 'james.scott@example.com', role: 'Customer', status: 'Inactive' },
    { id: '13', name: 'Daniel Harris', email: 'daniel.harris@example.com', role: 'Moderator', status: 'Active' },
    { id: '14', name: 'Charlotte Miller', email: 'charlotte.miller@example.com', role: 'Customer', status: 'Inactive' },
    { id: '15', name: 'William Walker', email: 'william.walker@example.com', role: 'Admin', status: 'Active' },
];

export const USER_TABLE_INPUT_FIELDS = [
    {
        label: 'User Name',
        type: 'text',
        placeholder: 'User Name',
        key: 'name',
    },
    {
        label: 'Email',
        type: 'text',
        placeholder: 'Email',
        key: 'email',
    },
    {
        label: 'Role',
        type: 'select',
        placeholder: 'Role',
        key: 'role',
        options: [
            { label: 'Admin', value: 'Admin' },
            { label: 'Customer', value: 'Customer' },
            { label: 'Moderator', value: 'Moderator' },
        ],
    },
    {
        label: 'Status',
        type: 'select',
        placeholder: 'Status',
        key: 'status',
        options: [
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
        ],
    },
];

export const USER_GROWTH_DATA = [
    { month: 'Jan', users: 1000 },
    { month: 'Feb', users: 1500 },
    { month: 'Mar', users: 2000 },
    { month: 'Apr', users: 3000 },
    { month: 'May', users: 4000 },
    { month: 'Jun', users: 5000 },
];

export const USER_ACTIVITY_DATA = [
    { name: 'Mon', '0-4': 20, '4-8': 40, '8-12': 60, '12-16': 80, '16-20': 100, '20-24': 30 },
    { name: 'Tue', '0-4': 30, '4-8': 50, '8-12': 70, '12-16': 90, '16-20': 110, '20-24': 40 },
    { name: 'Wed', '0-4': 40, '4-8': 60, '8-12': 80, '12-16': 100, '16-20': 120, '20-24': 50 },
    { name: 'Thu', '0-4': 50, '4-8': 70, '8-12': 90, '12-16': 110, '16-20': 130, '20-24': 60 },
    { name: 'Fri', '0-4': 60, '4-8': 80, '8-12': 100, '12-16': 120, '16-20': 140, '20-24': 70 },
    { name: 'Sat', '0-4': 70, '4-8': 90, '8-12': 110, '12-16': 130, '16-20': 150, '20-24': 80 },
    { name: 'Sun', '0-4': 80, '4-8': 100, '8-12': 120, '12-16': 140, '16-20': 160, '20-24': 90 },
];

export const STACKED_BARS = [
    { dataKey: '0-4', fill: '#5B82F7' },
    { dataKey: '4-8', fill: '#8B5CF6' },
    { dataKey: '8-12', fill: '#EC4899' },
    { dataKey: '12-16', fill: '#10B981' },
    { dataKey: '16-20', fill: '#F59E0B' },
    { dataKey: '20-24', fill: '#6EE7B7' },
];

export const USER_DEMOGRAPHIC_DATA = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 30 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 10 },
];

export const USER_DEMOGRAPHIC_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];
