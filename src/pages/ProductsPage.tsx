import { CategoryDistributionChart, ProductTable, SalesTrendChart, StatCard } from '@components';
import { PRODUCTS_STAT } from '@constants';
import { SlideUp } from '@ui';

const ProductsPage = () => {
    return (
        <>
            <SlideUp className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7' initial={30} duration={1}>
                {PRODUCTS_STAT.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </SlideUp>
            <ProductTable />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <SalesTrendChart />
                <CategoryDistributionChart />
            </div>
        </>
    );
};

export default ProductsPage;
