import React from 'react';

import Democratic from '../components/containers/meetingViews/Democratic';


export default {
    title:'Demotratic',
    component: Democratic
}

const Template = (args) => <Democratic {...args} />;


export const Primary = Template.bind({});


Primary.args = {
    advancedMode: false, 
    boxes: 10,
    spotlightsPeers: [1,2,3,4,5,6],
    toolbarsVisible: false,
    hideSelfView: false,
    buttonControlBar: false,
    toolAreaOpen: false,
    aspectRatio: 1.333,
    permanentTopBar: false
};