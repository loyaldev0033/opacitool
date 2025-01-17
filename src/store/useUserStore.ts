import { User, USER_TABLE_DATA } from '@constants';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UserStore {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (id: string, editedItems: Partial<User>) => void;
    removeUser: (id: string) => void;
}

export const useUserStore = create(
    devtools(
        immer<UserStore>((set) => ({
            users: [...USER_TABLE_DATA],

            addUser: (user: User) =>
                set((state) => {
                    state.users.unshift(user);
                }),
            updateUser: (id: string, updatedItems: Partial<User>) =>
                set((state) => {
                    const user = state.users.find((user) => user.id === id);
                    console.log(updatedItems);
                    if (user) {
                        Object.assign(user, updatedItems);
                    }
                }),
            removeUser: (id: string) =>
                set((state) => ({
                    users: state.users.filter((user) => user.id !== id),
                })),
        }))
    )
);
