import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';

export const ORDERS_STAT = [
    {
        name: 'Total Orders',
        icon: ShoppingBag,
        value: '2,521',
        color: '#6366f1',
    },
    {
        name: 'Pending Orders',
        icon: Clock,
        value: '341',
        color: '#10b981',
    },
    {
        name: 'Completed Orders',
        icon: CheckCircle,
        value: '2,180',
        color: '#f59e0b',
    },
    {
        name: 'Total Revenue',
        icon: DollarSign,
        value: '$98,765',
        color: '#ef4444',
    },
];

export const ORDERS_DATA = [
    { date: '07/01', orders: 48 },
    { date: '07/02', orders: 42 },
    { date: '07/03', orders: 49 },
    { date: '07/04', orders: 62 },
    { date: '07/05', orders: 55 },
    { date: '07/06', orders: 52 },
    { date: '07/07', orders: 62 },
];

export const STATUS_DISTRIBUTION_DATA = [
    { name: 'Pending', value: 60 },
    { name: 'Processing', value: 105 },
    { name: 'Shipped', value: 80 },
    { name: 'Delivered', value: 210 },
];

export const STATUS_DISTRIBUTION_COLORS = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#fed766', '#2ab7ca'];

export interface Order {
    id: string;
    customer: string;
    total: number;
    status: string;
    date: string;
}

export const ORDER_TABLE_DATA: Order[] = [
    { id: 'ORD001', customer: 'John', total: 320.5, status: 'Delivered', date: '2023-08-01' },
    { id: 'ORD002', customer: 'Emma', total: 540.2, status: 'Processing', date: '2023-08-02' },
    { id: 'ORD003', customer: 'Sophia', total: 185.3, status: 'Shipped', date: '2023-08-03' },
    { id: 'ORD004', customer: 'Liam', total: 830.0, status: 'Pending', date: '2023-08-04' },
    { id: 'ORD005', customer: 'Olivia', total: 115.6, status: 'Delivered', date: '2023-08-05' },
    { id: 'ORD006', customer: 'Ava', total: 380.5, status: 'Processing', date: '2023-08-06' },
    { id: 'ORD007', customer: 'Mason', total: 615.4, status: 'Shipped', date: '2023-08-07' },
    { id: 'ORD008', customer: 'James', total: 205.7, status: 'Delivered', date: '2023-08-08' },
    { id: 'ORD009', customer: 'Isabella', total: 720.3, status: 'Pending', date: '2023-08-09' },
    { id: 'ORD010', customer: 'Charlotte', total: 310.4, status: 'Delivered', date: '2023-08-10' },
    { id: 'ORD011', customer: 'Amelia', total: 355.7, status: 'Processing', date: '2023-08-11' },
    { id: 'ORD012', customer: 'Harper', total: 520.0, status: 'Shipped', date: '2023-08-12' },
    { id: 'ORD013', customer: 'Evelyn', total: 600.8, status: 'Delivered', date: '2023-08-13' },
    { id: 'ORD014', customer: 'Abigail', total: 410.6, status: 'Pending', date: '2023-08-14' },
    { id: 'ORD015', customer: 'Ella', total: 795.4, status: 'Processing', date: '2023-08-15' },
    { id: 'ORD016', customer: 'Zoe', total: 465.2, status: 'Shipped', date: '2023-08-16' },
    { id: 'ORD017', customer: 'Aria', total: 290.3, status: 'Delivered', date: '2023-08-17' },
    { id: 'ORD018', customer: 'Scarlett', total: 640.7, status: 'Pending', date: '2023-08-18' },
];
