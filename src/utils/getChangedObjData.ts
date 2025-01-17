import { isEqual, pickBy } from 'lodash-es';

export const getChangedObjData = (initialData: any, currentData: any) => {
    if (!initialData) return null;
    const changedData = pickBy(currentData, (value, key) => !isEqual(value, initialData[key]));
    return Object.keys(changedData).length > 0 ? changedData : null;
};
