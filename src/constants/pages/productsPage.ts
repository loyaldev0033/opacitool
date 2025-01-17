import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';

export const PRODUCTS_STAT = [
    {
        name: 'Total Products',
        icon: Package,
        value: '1500',
        color: '#6366f1',
    },
    {
        name: 'Top Selling',
        icon: TrendingUp,
        value: '120',
        color: '#10b981',
    },
    {
        name: 'Low Stock',
        icon: AlertTriangle,
        value: '56',
        color: '#f59e0b',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$876,543',
        color: '#ef4444',
    },
];

export const SALES_TREND_DATA = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
];

export const PRODUCT_TABLE_HEADING = ['Name', 'Category', 'Price', 'Stock', 'Sales', 'Actions'];

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    sales: number;
}

export const PRODUCT_TABLE_DATA: Product[] = [
    { id: '1', name: 'Bluetooth Headphones', category: 'Electronics', price: 99.99, stock: 160, sales: 1300 },
    { id: '2', name: 'Canvas Backpack', category: 'Accessories', price: 49.99, stock: 100, sales: 1100 },
    { id: '3', name: 'Fitness Tracker', category: 'Electronics', price: 199.99, stock: 70, sales: 800 },
    { id: '4', name: 'Foam Roller', category: 'Fitness', price: 59.99, stock: 250, sales: 1050 },
    { id: '5', name: 'Espresso Machine', category: 'Home Usage', price: 89.99, stock: 210, sales: 850 },
    { id: '6', name: 'Sports Sneakers', category: 'Footwear', price: 109.99, stock: 140, sales: 550 },
    { id: '7', name: 'Virtual Reality Headset', category: 'Electronics', price: 199.99, stock: 80, sales: 950 },
    { id: '8', name: 'Knife Set', category: 'Kitchen', price: 149.99, stock: 60, sales: 740 },
    { id: '9', name: 'Wireless Speaker', category: 'Electronics', price: 49.99, stock: 250, sales: 1300 },
    { id: '10', name: 'Air Purifier', category: 'Home Appliances', price: 199.99, stock: 40, sales: 420 },
    { id: '11', name: 'Portable Power Bank', category: 'Electronics', price: 29.99, stock: 320, sales: 1600 },
    { id: '12', name: 'Stand Mixer', category: 'Kitchen', price: 99.99, stock: 60, sales: 320 },
    { id: '13', name: 'Water Flosser', category: 'Personal Care', price: 109.99, stock: 90, sales: 710 },
    { id: '14', name: 'Ergonomic Chair', category: 'Office Supplies', price: 149.99, stock: 150, sales: 420 },
    { id: '15', name: 'Table Lamp', category: 'Home Decor', price: 59.99, stock: 130, sales: 380 },
];

export const PRODUCT_TABLE_INPUT_FIELDS = [
    {
        label: 'Product Name',
        type: 'text',
        placeholder: 'Product Name',
        key: 'name',
    },
    {
        label: 'Category',
        type: 'text',
        placeholder: 'Category',
        key: 'category',
    },
    {
        label: 'Price',
        type: 'number',
        placeholder: 'Price',
        key: 'price',
    },
    {
        label: 'Stock',
        type: 'number',
        placeholder: 'Stock',
        key: 'stock',
    },
    {
        label: 'Sales',
        type: 'number',
        placeholder: 'Sales',
        key: 'sales',
    },
];
