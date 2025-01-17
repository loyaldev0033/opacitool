import { Order, Product, User } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type ModalStatus = 'ADD' | 'EDIT' | 'VIEW' | 'CLOSE';

interface ModalState {
    data?: Product | User | Order | null;
    active: boolean;
    status: ModalStatus;
}

interface ModalStore {
    modal: ModalState;
    openModal: (status: ModalStatus, data?: Product | User | Order) => void;
    closeModal: () => void;
}

const initialModalState: ModalState = {
    data: null,
    active: false,
    status: 'CLOSE',
};

export const useModalStore = create(
    devtools(
        immer<ModalStore>((set) => ({
            modal: initialModalState,
            openModal: (status: ModalStatus, data) =>
                set((state) => {
                    state.modal = { data, active: true, status };
                }),
            closeModal: () =>
                set((state) => {
                    state.modal = initialModalState;
                }),
        }))
    )
);
