import React from 'react';
import {
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	spring,
} from 'remotion';

import {FaHandsWash} from 'react-icons/fa';
import {PiWavesBold} from 'react-icons/pi';
import {MdIron} from 'react-icons/md';
import {GiScrollUnfurled} from 'react-icons/gi';


function Tips() {
	const frame = useCurrentFrame();
	console.log(frame)
	const fadeInOpacity = interpolate(frame, [0, 30], [0, 1]);

	const item1Opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
	const item2Opacity = interpolate(frame, [20, 40], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
	const item3Opacity = interpolate(frame, [40, 60], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
	const item4Opacity = interpolate(frame, [60, 80], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

	const containerStyle = {
		backgroundColor: 'white',
		objectFit: 'cover',
		padding: '20px',
		borderRadius: '120px',
		width: '75%',
		height: '80%',
		color: 'darkblue',
		fontSize: '50px',
		fontFamily: 'Arial, sans-serif',
		display: 'flex',
		gap: '10rem',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	};

	const itemStyle = {
		marginBottom: '10px',
		width: '85%',
		display: 'flex',
		gap: '5rem',
		textAlign: 'left',
	};

	const iconStyle = {
		marginRight: '10px',
	};

	const textStyle = {
		flex: 1,
	};
	const {width, height} = useVideoConfig();
	return (
		<div
			style={{
				width: `${width}px`,
				height: `${height}px`,
				background: '#7D3C98',
				display: 'flex',
				justifyContent: 'center',
				objectFit: 'cover',
				alignItems: 'center',
				opacity: fadeInOpacity,
			
			}}
		>
			<div style={containerStyle}>
				<div style={{...itemStyle,opacity:item4Opacity}}>
					<FaHandsWash color="black" size={'110px'} />
					<div style={textStyle}>
						Hand wash using gentle detergent & cool water
					</div>
				</div>
				<div style={{...itemStyle,opacity:item3Opacity}}>
					<PiWavesBold size={'110px'} color="black" />
					<div style={textStyle}>
						Lay it flat on a clean towel and air dry it
					</div>
				</div>
				<div style={{...itemStyle,opacity:item2Opacity}}>
					<MdIron size={'110px'} color="black" />
					<div style={textStyle}>
						Never expose it to a direct heat source. Always place a cotton
						material on top of the fabric
					</div>
				</div>
				<div style={{...itemStyle,opacity:item1Opacity}}>
					<GiScrollUnfurled size={'110px'} color="black" />

					<div style={textStyle}>
						Roll it up to avoid crushing of the fabric
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tips;
