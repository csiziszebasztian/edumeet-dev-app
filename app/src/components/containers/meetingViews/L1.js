/*import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { videoBoxesSelector } from "../Selectors";
import { withRoomContext } from "../../RoomContext";
import Me from "../Containers/Me";
import Peer from "../Containers/Peer";
import SpeakerPeer from "../Containers/SpeakerPeer";
import Grid from "@material-ui/core/Grid";*/

import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import Me from "../Video/Me";
import Peer from "../Video/Peer";
import { withStyles } from "@material-ui/core/styles";

const PADDING_V = 64;
const L1_PADDING_V = 0;
const L1_PADDING_H = 10;

const FILL_RATE = 0.95;

const styles = () => ({
  root: {
    height: "100%",
    width: "100%",
    display: "grid",
    overflow: "hidden",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
	backgroundColor: "aqua",
    border: "5px solid blueviolet",
    padding: "10px"
  },
  speaker: {
    gridArea: "1 / 2 / 3 / 4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  L1Item: {
    display: "flex",
    border: "var(--peer-border)",
    "&.selected": {
      borderColor: "var(--selected-peer-border-color)"
    },
    "&.active": {
      borderColor: "var(--selected-peer-border-color)"
    }
  },
  hiddenToolBar: {
    paddingTop: 0,
    transition: "padding .5s"
  },
  showingToolBar: {
    paddingTop: PADDING_V,
    transition: "padding .5s"
  }
});


class L1 extends React.PureComponent
{
	constructor(props)
	{
		super(props);

		this.resizeTimeout = null;

		this.rootContainer = React.createRef();

		this.activePeerContainer = React.createRef();

		this.L1Container = React.createRef();
	}

	state = {
		lastSpeaker : null
	};

	// Find the name of the peer which is currently speaking. This is either
	// the latest active speaker, or the manually selected peer, or, if no
	// person has spoken yet, the first peer in the list of peers.
	/*getActivePeerId = () =>
	{
		const {
			selectedPeerId,
			peers
		} = this.props;

		const { lastSpeaker } = this.state;

		if (selectedPeerId && peers[selectedPeerId])
		{
			return this.props.selectedPeerId;
		}

		if (lastSpeaker && peers[lastSpeaker])
		{
			return this.state.lastSpeaker;
		}

		const peerIds = Object.keys(peers);

		if (peerIds.length > 0)
		{
			return peerIds[0];
		}
	};*/

	/*isSharingCamera = (peerId) => this.props.peers[peerId] &&
		this.props.peers[peerId].consumers.some((consumer) =>
			this.props.consumers[consumer].source === 'screen');*/

	updateDimensions = () =>
	{
		const {
			toolbarsVisible,
			permanentTopBar,
			boxes,
			aspectRatio
		} = this.props;

		const newState = {};

		const root = this.rootContainer.current;

		if (!root)
			return;

		const availableWidth = root.clientWidth;
		console.log("availableWidth: " + availableWidth);
		console.log("availableHeight: " + root.clientHeight);

		const availableSpeakerHeight = (root.clientHeight * 0.8)  -
			(toolbarsVisible || permanentTopBar ? PADDING_V : 0);

		console.log("availableSpeakerHeight: " + availableSpeakerHeight);	
		

		const availableL1Height = root.clientHeight;

		const speaker = this.activePeerContainer.current;

		if (speaker)
		{
			let speakerWidth = availableWidth;	
			let speakerHeight = speakerWidth / aspectRatio;

			/*if (this.isSharingCamera(this.getActivePeerId()))
			{
				speakerWidth /= 2;
				speakerHeight = speakerWidth / aspectRatio;
			}*/

			if (speakerHeight > availableSpeakerHeight)
			{
				speakerHeight = availableSpeakerHeight;
				speakerWidth = speakerHeight * aspectRatio;
			}

			newState.speakerWidth = speakerWidth;
			newState.speakerHeight = speakerHeight;

			console.log("speakerWidth: " + speakerWidth);	
			console.log("speakerHeight: " + speakerHeight);	

		}

		/*const l1 = this.L1Container.current;
		console.log(l1);*/

		/*if (l1)*/
		{
			let L1Height = availableL1Height - L1_PADDING_V;

			let L1Width = L1Height * aspectRatio;

			if (
				(L1Width * boxes) >
				(availableWidth - L1_PADDING_H)
			)
			{
				L1Width = (availableWidth - L1_PADDING_H) /
					boxes;
				L1Height = L1Width / aspectRatio;
			}

			newState.L1Width = L1Width * FILL_RATE;
			newState.L1Height = L1Height * FILL_RATE;
		}

		this.setState({
			...newState
		});
	};

	componentDidMount()
	{
		// window.resize event listener
		window.addEventListener('resize', () =>
		{
			// clear the timeout
			clearTimeout(this.resizeTimeout);

			// start timing for event "completion"
			this.resizeTimeout = setTimeout(() => this.updateDimensions(), 250);
		});

		this.updateDimensions();
	}

	componentWillUnmount()
	{
		window.removeEventListener('resize', this.updateDimensions);
	}

	/*componentDidUpdate(prevProps)
	{
		if (prevProps !== this.props)
		{
			if (
				this.props.activeSpeakerId != null &&
				this.props.activeSpeakerId !== this.props.myId
			)
			{
				// eslint-disable-next-line react/no-did-update-set-state
				this.setState({
					lastSpeaker : this.props.activeSpeakerId
				});
			}

			this.updateDimensions();
		}
	}*/

	render()
	{
		const {
			// roomClient,
			peers,
			myId,
			advancedMode,
			spotlightsPeers,
			toolbarsVisible,
			permanentTopBar,
			hideSelfView,
			classes
		} = this.props;

		//const activePeerId = this.getActivePeerId();

		let positionNumber = hideSelfView ? 0 : 1;

		const gridAreas= [
		'1 / 1 / 2 / 2',
		'2 / 1 / 3 / 2',
		'3 / 1 / 4 / 2', 
		'3 / 2 / 4 / 3',
		'3 / 3 / 4 / 4'
		];

		const speakerStyle =
		{
			width  : this.state.speakerWidth,
			height : this.state.speakerHeight,
	
		};

		const mePeer =
		{
			width  : this.state.L1Width,
			height : this.state.L1Height,
			gridArea : gridAreas[0]
		};

		return (
			<div
				className={classnames(
					classes.root,
					toolbarsVisible || permanentTopBar ?
						classes.showingToolBar : classes.hiddenToolBar
				)}
				ref={this.rootContainer}
			>
				<div className={classes.speaker} ref={this.activePeerContainer}>
					<Peer
						style={speakerStyle}
						value={1}
					/>
				</div>
				{ !hideSelfView &&
				<Me
				   advancedMode={advancedMode}
				   style={mePeer}
				   value={2}
				/>
				}
                { spotlightsPeers.map((peer) =>
				{
			
					const peerStyle =
					{
						width  : this.state.L1Width,
						height : this.state.L1Height,
						gridArea : gridAreas[positionNumber]
					};

					positionNumber++;

					return (
						<Peer
							key={peer}
							advancedMode={advancedMode}
							id={peer}
							style={peerStyle}
							value={positionNumber+1}
						/>
					);
				})}
			</div>
		);
	}
}


L1.propTypes = {
	// roomClient      : PropTypes.any.isRequired,
	advancedMode     : PropTypes.bool,
	boxes            : PropTypes.number,
	spotlightsPeers  : PropTypes.array.isRequired,
	toolbarsVisible  : PropTypes.bool.isRequired,
	hideSelfView     : PropTypes.bool.isRequired,
	permanentTopBar  : PropTypes.bool.isRequired,
	buttonControlBar : PropTypes.bool.isRequired,
	toolAreaOpen     : PropTypes.bool.isRequired,
	aspectRatio      : PropTypes.number.isRequired,
	classes          : PropTypes.object.isRequired
};

export default withStyles(styles)(L1);