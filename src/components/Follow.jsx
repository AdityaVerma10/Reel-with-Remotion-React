import React from 'react';
import { interpolate, useCurrentFrame,useVideoConfig } from 'remotion';
import girlLogo from "../../public/images/girlLogo.png"

function Follow() {
    const frame =useCurrentFrame();
	const fadeInOpacity = interpolate(frame, [0, 0 + 20], [0, 1]);
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
			<div
				style={{
					backgroundColor: 'white',
					objectFit: 'cover',
					padding: '20px',
					borderRadius: '120px',
					width: '75%',
					height: '80%',
					color: 'rgb(90, 90, 217)',
					fontSize: '45px',
					fontFamily: 'Arial, sans-serif',
					display: 'flex',
					gap: '6rem',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
                    opacity: fadeInOpacity,
				}}
			>
                <h2 style={{
                    textAlign:'center'
                }}>Follow us for more styling tips</h2>


                <img src={girlLogo} alt=""
                style={
                    {
                        width:'500px',
                        height:'500px'
                    }
                } />

                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <img src="https://peppyhop.com/_next/image?url=%2Fimages%2Flogo-t-s.webp&w=48&q=75" alt="" style={{
                    width:'200px',
                    height:'200px'
                }} />
                <h1 style={{
                    color:'black'
                }}>Peppyhop</h1>
                </div>
            </div>
		</div>
	);
}

export default Follow;
