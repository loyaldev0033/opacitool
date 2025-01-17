import { Product, PRODUCT_TABLE_DATA } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ProductStore {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (id: string, editedItems: Partial<Product>) => void;
    removeProduct: (id: string) => void;
}

export const useProductStore = create(
    devtools(
        immer<ProductStore>((set) => ({
            products: [...PRODUCT_TABLE_DATA],

            addProduct: (product: Product) =>
                set((state) => {
                    state.products.unshift(product);
                }),
            updateProduct: (id: string, updatedItems: Partial<Product>) =>
                set((state) => {
                    const product = state.products.find((product) => product.id === id);
                    console.log(updatedItems);
                    if (product) {
                        Object.assign(product, updatedItems);
                    }
                }),
            removeProduct: (id: string) =>
                set((state) => ({
                    products: state.products.filter((product) => product.id !== id),
                })),
        }))
    )
);
