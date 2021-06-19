import React from 'react';

import Round from '../components/containers/meetingViews/Round';


export default {
    title:'Round',
    component: Round
}

const Template = (args) => <Round {...args} />;


export const Primary = Template.bind({});


Primary.args = {
    advancedMode: false, 
    boxes: 10,
    spotlightsPeers: [0,1,2,3],
    toolbarsVisible: false,
    hideSelfView: false,
    buttonControlBar: false,
    toolAreaOpen: false,
    aspectRatio: 1.333,
    permanentTopBar: false
};