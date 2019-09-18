import React from 'react';
import { Drawer } from 'react-native-ui-kitten';

const data = [
    { title: 'Test1' },
    { title: 'Test2' },
];

export const DrawerShowcase = (props) => (
    <Drawer data={data}/>
);
