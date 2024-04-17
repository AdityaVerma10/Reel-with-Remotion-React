import {useState, useEffect} from 'react';
import {
	staticFile,
	Img,
	useCurrentFrame,
	startFadeOutFrame,
	useVideoConfig,
	interpolate,
	Sequence,
	Audio,
	spring,
} from 'remotion';
import Tips from './components/Tips';
import Follow from './components/Follow';

const BackgroundImage = ({src}) => {
	return (
		<Img
			src={staticFile(`images/${src}`)}
			style={{width: '100%', height: '100%', objectFit: 'cover'}}
		/>
	);
};

const TypingText = ({text, height, startFadeOutFrame}) => {
	const [currtext, setCurrText] = useState('');
	const [indx, setIndx] = useState(0);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const videoConfig = useVideoConfig();
	const visibleLength = Math.floor(
		interpolate(frame, [0, 80], [0, text.length], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		})
	);

	const textEnteringSpring = spring({
		frame: frame,
		fps: fps,
		config: {
			damping: 200,
		},
		from: 0,
		to: 1,
		durationInFrames: 30,
	});

	const opacity = interpolate(
		frame,
		[startFadeOutFrame, startFadeOutFrame + 20],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				color: 'white',
				backgroundColor: 'rgb(87, 53, 176)',
				fontSize: '85px',
				padding: '45px',
				width: '100%',
				height: `${height}px`,
				borderRadius: '5px',
				position: 'absolute',
				paddingTop: 0,
				bottom: '20%',
				left: '50%',
				transform: `translateX(-50%) scale(${textEnteringSpring})`,
				fontFamily: 'monospace',
				opacity: opacity,
			}}
		>
			{text.substring(0, visibleLength)}
		</div>
	);
};

export const MyVideo = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={150}>
				<BackgroundImage src={'saree1.jpg'} />
				<TypingText
					text="Surbhi was seen wearing a Neon not saree by Sabyasachi last diwali"
					height={'500'}
					startFadeOutFrame={120}
				/>
			</Sequence>
			<Sequence from={150} durationInFrames={300}>
				<BackgroundImage src={'saree2.jpg'} />
				<TypingText
					text="YET it's still one of the 'LEAST' sought after fabric for the fear of being burnt/crushed easily"
					height={'600'}
					startFadeOutFrame={120}
				/>
			</Sequence>
			<Sequence from={320} durationInFrames={450}>
				<BackgroundImage src={'saree3.jpg'} />
				<TypingText
					text="So, here are some tips that will rejoice your love with sheer NET again!"
					height={'500'}
					startFadeOutFrame={120}
				/>
			</Sequence>
			<Sequence from={480} durationInFrames={600}>
				<Tips />
			</Sequence>

			<Sequence from={620} durationInFrames={700}>
				<Follow/>
			</Sequence>

			<Audio
				src={staticFile('audio/audio.mp3')}
				startFrom={0}
				endAt={700}
				volume={1.0}
			/>
		</>
	);
};
