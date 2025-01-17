import {
    BarChart2,
    DollarSign,
    LucideIcon,
    Settings,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
    Users,
} from 'lucide-react';

interface SidebarItems {
    name: string;
    icon: LucideIcon;
    color: string;
    href: string;
}

export const SIDEBAR_ITEMS: SidebarItems[] = [
    { name: 'Introduction', icon: BarChart2, color: '#6366f1', href: '/' },
    { name: 'Emission Types & Controls', icon: ShoppingBag, color: '#8B5CF6', href: '/' },
    { name: 'Method 9 Observation Procedures', icon: Users, color: '#EC4899', href: '/' },
    { name: 'Method 9 Documentation Procedures', icon: DollarSign, color: '#10B981', href: '/' },
    { name: 'Special Observation Situations', icon: ShoppingCart, color: '#F59E0B', href: '/' },
    { name: 'Alternative Test Methods', icon: TrendingUp, color: '#3B82F6', href: '/' },
    { name: 'EPA Method 22', icon: Settings, color: '#6EE7B7', href: '/' },
    { name: 'History of Emission Observations', icon: Settings, color: '#6EE7B7', href: '/' },
    { name: 'Frequently Asked Questions', icon: Settings, color: '#6EE7B7', href: '/' },
    { name: 'Resources & Downloads', icon: Settings, color: '#6EE7B7', href: '/' },
];
