import React from 'react';

import L1 from '../components/containers/meetingViews/L1';


export default {
    title:'L1',
    component: L1
}

const Template = (args) => <L1 {...args} />;


export const Primary = Template.bind({});


Primary.args = {
    advancedMode: false, 
    boxes: 5,
    spotlightsPeers: [0,1,2,3],
    toolbarsVisible: false,
    hideSelfView: false,
    buttonControlBar: false,
    toolAreaOpen: false,
    aspectRatio: 1.333,
    permanentTopBar: false
};