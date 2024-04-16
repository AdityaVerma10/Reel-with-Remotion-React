import { Composition } from 'remotion';
import { MyVideo } from './Video'; // Assume Video.tsx exports MyVideo

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={700}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};

