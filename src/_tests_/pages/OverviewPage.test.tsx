import { CategoryDistributionChart, SalesChannelChart, SalesOverviewChart } from '@components';
import { OverviewPage } from '@pages';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { describe, expect } from 'vitest';

describe('status cards', () => {
    it('should render all cards with respective title', () => {
        render(<OverviewPage />);
        expect(screen.getByText('Total Sales')).toBeInTheDocument();
        expect(screen.getByText('New Users')).toBeInTheDocument();
        expect(screen.getByText('Total Products')).toBeInTheDocument();
        expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
    });
});

describe('charts', () => {
    it('should render line chart with title', () => {
        render(<SalesOverviewChart />);
        expect(screen.getByText('Sales Overview')).toBeInTheDocument();
    });
    it('should render pie chart with title', () => {
        render(<CategoryDistributionChart />);
        expect(screen.getByText('Category Distribution')).toBeInTheDocument();
    });
    it('should render bar chart with title', () => {
        render(<SalesChannelChart />);
        expect(screen.getByText('Sales By Channel')).toBeInTheDocument();
    });
});
