import { DollarSign, Eye, ShoppingBag, TrendingUp, Users } from 'lucide-react';

export const ANALYTICS_STAT = [
    { name: 'Revenue', value: '$1,234,567', change: 12.5, icon: DollarSign },
    { name: 'Users', value: '45,678', change: 8.3, icon: Users },
    { name: 'Orders', value: '9,876', change: -6.9, icon: ShoppingBag },
    { name: 'Page Views', value: '2,345,678', change: 19.4, icon: Eye },
];

export const ANALYTICS_DATA = [
    { month: 'Jan', revenue: 4200, target: 5000 },
    { month: 'Feb', revenue: 3000, target: 3200 },
    { month: 'Mar', revenue: 5500, target: 4500 },
    { month: 'Apr', revenue: 4500, target: 4200 },
    { month: 'May', revenue: 5500, target: 6000 },
    { month: 'Jun', revenue: 4500, target: 4800 },
    { month: 'Jul', revenue: 7000, target: 6500 },
];

export const CHANNEL_DATA = [
    { name: 'Organic Search', value: 4500 },
    { name: 'Paid Search', value: 3000 },
    { name: 'Direct', value: 2500 },
    { name: 'Social Media', value: 2700 },
    { name: 'Referral', value: 1800 },
    { name: 'Email', value: 2400 },
];

export const CHANNEL_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

export const PRODUCT_PERFORMANCE_DATA = [
    { name: 'Product A', sales: 4000, revenue: 2650, profit: 2200 },
    { name: 'Product B', sales: 3000, revenue: 1398, profit: 2210 },
    { name: 'Product C', sales: 2000, revenue: 5500, profit: 2290 },
    { name: 'Product D', sales: 2780, revenue: 3908, profit: 2000 },
    { name: 'Product E', sales: 1890, revenue: 4800, profit: 2181 },
];

export const USER_RETENTION_DATA = [
    { name: 'Week 1', retention: 100 },
    { name: 'Week 2', retention: 76 },
    { name: 'Week 3', retention: 60 },
    { name: 'Week 4', retention: 50 },
    { name: 'Week 5', retention: 45 },
    { name: 'Week 6', retention: 40 },
    { name: 'Week 7', retention: 35 },
    { name: 'Week 8', retention: 30 },
];

export const CUSTOMER_SEGMENTATION_DATA = [
    { subject: 'Engagement', A: 120, B: 110, fullMark: 150 },
    { subject: 'Loyalty', A: 98, B: 130, fullMark: 150 },
    { subject: 'Satisfaction', A: 86, B: 130, fullMark: 150 },
    { subject: 'Spend', A: 99, B: 100, fullMark: 150 },
    { subject: 'Frequency', A: 85, B: 90, fullMark: 150 },
    { subject: 'Recency', A: 65, B: 85, fullMark: 150 },
];

export const INSIGHTS = [
    {
        icon: TrendingUp,
        color: 'text-green-500',
        insight: 'Revenue is up 15% compared to last month, driven primarily by a successful email campaign.',
    },
    {
        icon: Users,
        color: 'text-blue-500',
        insight: 'Customer retention has improved by 8% following the launch of the new loyalty program.',
    },
    {
        icon: ShoppingBag,
        color: 'text-purple-500',
        insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
    },
    {
        icon: DollarSign,
        color: 'text-yellow-500',
        insight: 'Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.',
    },
];
