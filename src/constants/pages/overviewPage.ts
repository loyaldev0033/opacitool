import { Zap, Users, ShoppingBag, BarChart2 } from 'lucide-react';

export const OVERVIEW_STAT = [
    {
        name: 'Total Sales',
        icon: Zap,
        value: '$20,000',
        color: '#6366f1',
    },
    {
        name: 'New Users',
        icon: Users,
        value: '2,345',
        color: '#8b5cf6',
    },
    {
        name: 'Total Products',
        icon: ShoppingBag,
        value: '8,910',
        color: '#ec4899',
    },
    {
        name: 'Conversion Rate',
        icon: BarChart2,
        value: '18.5%',
        color: '#10b981',
    },
];

export const SALES_DATA = [
    { name: 'Jul', sales: 4200 },
    { name: 'Aug', sales: 3800 },
    { name: 'Sep', sales: 5100 },
    { name: 'Oct', sales: 4600 },
    { name: 'Nov', sales: 5400 },
    { name: 'Dec', sales: 7200 },
    { name: 'Jan', sales: 6100 },
    { name: 'Feb', sales: 5900 },
    { name: 'Mar', sales: 6800 },
    { name: 'Apr', sales: 6300 },
    { name: 'May', sales: 7100 },
    { name: 'Jun', sales: 7500 },
];

export const CATEGORY_DATA = [
    { name: 'Electronics', value: 4500 },
    { name: 'Clothing', value: 3200 },
    { name: 'Home & Garden', value: 2800 },
    { name: 'Books', value: 2100 },
    { name: 'Sports & Outdoors', value: 1900 },
];

export const CATEGORY_DATA_COLORS = ['#6366f1', '#8B5CF6', '#ec4899', '#10b981', '#f59e0b'];

export const SALES_CHANNEL_DATA = [
    { name: 'Website', value: 45600 },
    { name: 'Mobile App', value: 38200 },
    { name: 'Marketplace', value: 29800 },
    { name: 'Social Media', value: 18700 },
];

export const SALES_CHANNEL_DATA_COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];
