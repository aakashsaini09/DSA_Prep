import { atom } from 'recoil';

// Helper to load from localStorage
const loadFromLocalStorage = (key: any) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : "";
};

// Atom with persistence effect
export const UserName = atom({
    key: 'UserName',
    default: loadFromLocalStorage('UserName'), // Load initial state from localStorage
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('UserName', JSON.stringify(newValue));
            });
        }
    ]
});

export const UserEmail = atom({
    key: 'UserEmail',
    default: loadFromLocalStorage('UserEmail'),
    effects: [
        ({ onSet }) => {
            onSet(newValue => {
                localStorage.setItem('UserEmail', JSON.stringify(newValue));
            });
        }
    ]
});
