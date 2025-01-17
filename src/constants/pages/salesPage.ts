import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export const SALES_STAT = [
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$1,234,567',
        color: '#6366f1',
    },
    {
        name: 'Avg. Order Value',
        icon: ShoppingCart,
        value: '$78.90',
        color: '#10b981',
    },
    {
        name: 'Conversion Rate',
        icon: TrendingUp,
        value: '43.67%',
        color: '#f59e0b',
    },
    {
        name: 'Sales Growth',
        icon: CreditCard,
        value: '59.3%',
        color: '#ef4444',
    },
];

export const OVERVIEW_SALES_DATA = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
    { month: 'Jul', sales: 7000 },
];

export const SALES_BY_CATEGORY_DATA = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Home & Garden', value: 200 },
    { name: 'Books', value: 100 },
    { name: 'Others', value: 160 },
];

export const SALES_BY_CATEGORY_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

export const DAILY_SALES_TREND_DATA = [
    { name: 'Mon', sales: 800 },
    { name: 'Tue', sales: 1250 },
    { name: 'Wed', sales: 500 },
    { name: 'Thu', sales: 1000 },
    { name: 'Fri', sales: 1300 },
    { name: 'Sat', sales: 1550 },
    { name: 'Sun', sales: 1150 },
];
