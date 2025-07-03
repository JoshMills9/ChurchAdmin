/*import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const setObject = (key: string, value: object) => {
    storage.set(key, JSON.stringify(value));
    console.log(value)
}

export const getObject = (key: string) => {
    const val = storage.getString(key);
    console.log(val)
    return val ? JSON.parse(val) : null;
}*/

import AsyncStorage from '@react-native-async-storage/async-storage';

export const setObject = async (key: string, value: object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
      
    } catch (error) {
        console.error('Error storing object', error);
    }
}

export const getObject = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);

        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error('Error retrieving object', error);
        return null;
    }
}
