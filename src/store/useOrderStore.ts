import { Order, ORDER_TABLE_DATA } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface OrderStore {
    orders: Order[];
    updateOrder: (id: string, status: string) => void;
}

export const useOrderStore = create(
    devtools(
        immer<OrderStore>((set) => ({
            orders: [...ORDER_TABLE_DATA],

            updateOrder: (id: string, status: string) =>
                set((state) => {
                    const order = state.orders.find((order) => order.id === id);
                    if (order) {
                        order.status = status;
                    }
                }),
        }))
    )
);
