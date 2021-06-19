import React from "react";
import Democratic from "./meetingViews/Democratic";
import L1 from "./meetingViews/L1";


const TestData = [
  {
    advancedMode: false, 
    boxes: 10,
    spotlightsPeers: [1,2,3,4,5,6],
    toolbarsVisible: false,
    hideSelfView: false,
    buttonControlBar: false,
    toolAreaOpen: false,
    aspectRatio: 1.333,
    permanentTopBar: false
  },
  {
    advancedMode: false, 
    boxes: 10,
    spotlightsPeers: [1,2,3,4,5,6],
    toolbarsVisible: false,
    hideSelfView: false,
    buttonControlBar: false,
    toolAreaOpen: false,
    aspectRatio: 1.333,
    permanentTopBar: false
  },
  /*{	
    activeSpeakerId : "0",
    advancedMode    : false,
    peers           : PropTypes.object.isRequired,
    consumers       : PropTypes.object.isRequired,
    myId            : PropTypes.string.isRequired,
    selectedPeerId  : PropTypes.string,
    spotlights      : PropTypes.array.isRequired,
    boxes           : PropTypes.number,
    toolbarsVisible : PropTypes.bool.isRequired,
    hideSelfView    : PropTypes.bool.isRequired,
    toolAreaOpen    : PropTypes.bool.isRequired,
    permanentTopBar : PropTypes.bool.isRequired,
    aspectRatio     : PropTypes.number.isRequired,
    classes         : PropTypes.object.isRequired
  }*/
];
  
  const ViewContainer = ({viewType}) => {
    
    let view= <h1>Empty</h1>;
    let viewData;

    switch(viewType){
        case "democratic":
            viewData = TestData[0];
            view = <Democratic
                    advancedMode={viewData.advancedMode}
                    boxes={viewData.boxes}
                    spotlightsPeers={viewData.spotlightsPeers}
                    toolbarsVisible={viewData.toolbarsVisible}
                    hideSelfView={viewData.hideSelfView}
                    permanentTopBar  = {viewData.permanentTopBar}
                    buttonControlBar = {viewData.buttonControlBar}
                    toolAreaOpen  = {viewData.toolAreaOpen}
                    aspectRatio   = {viewData.aspectRatio}
                    />
              break;
        case "L1":
            viewData = TestData[1];
            view = <L1
                  advancedMode={viewData.advancedMode}
                  boxes={viewData.boxes}
                  spotlightsPeers={viewData.spotlightsPeers}
                  toolbarsVisible={viewData.toolbarsVisible}
                  hideSelfView={viewData.hideSelfView}
                  permanentTopBar  = {viewData.permanentTopBar}
                  buttonControlBar = {viewData.buttonControlBar}
                  toolAreaOpen  = {viewData.toolAreaOpen}
                  aspectRatio   = {viewData.aspectRatio}
                  />
              break; 
        default:
          console.log("Wrong");
    }

    return view;



  };
  



  export default ViewContainer;