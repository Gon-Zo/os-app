import React from 'react';
import {SafeAreaView} from 'react-navigation';
import { Drawer } from 'react-native-ui-kitten';

export default class DrawerNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.drawerData = props.items.map(this.createDrawerItem);
    }

    onRouteSelect = (index) => {
        const {[index]: route} = this.drawerData;
        this.props.navigation.navigate(route.title);
    };

    createDrawerItem = ({routeName}) => ({
        title: routeName,
    });

    render() {
        return (
            <SafeAreaView>
                <Drawer data={this.drawerData} onSelect={this.onRouteSelect}/>
            </SafeAreaView>
        );
    }
}
