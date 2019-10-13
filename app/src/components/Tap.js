import React, {Component} from 'react';
import {Layout, TabView, Tab, Text, ViewPager} from "react-native-ui-kitten";


export default class DetailTapScreen extends Component {
    render() {
        return (
            <Layout
                style={{
                    width: '100%',
                    height: 400,
                    backgroundColor: '#ff0',
                    marginBottom: 30
                }}
            >
                <Tap/>
            </Layout>
        )
    }
}

class Tap extends Component {

    state = {
        selectedIndex: 0,
    };

    onSelect = (selectedIndex) => {
        this.setState({selectedIndex});
    };

    render() {
        return (
            <TabView
                selectedIndex={this.state.selectedIndex}
                onSelect={this.onSelect}>
                <Tab title='Review'>
                    <ReviewView/>
                </Tab>
                <Tab title='Question'>
                    <QuestionView/>
                </Tab>
            </TabView>
        );
    }

}

class ReviewView extends Component {
    render() {
        return (
            <ViewPager>
                <Text>Review</Text>
            </ViewPager>
        );
    }
}

class QuestionView extends Component {
    render() {
        return (
            <ViewPager>
                <Text>Question</Text>
            </ViewPager>
        );
    }
}
