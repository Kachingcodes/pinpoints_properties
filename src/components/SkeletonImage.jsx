import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonImage({ src, alt = '', height = 200, width = '100%', style = {}, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton
          height={height}
          width={width}
          borderRadius="0.5rem"
          style={style}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`rounded-lg shadow transition duration-300 transform hover:scale-105 ${
          loaded ? className : 'hidden'
        }`}
        loading="lazy"
      />
    </>
  );
}

export default SkeletonImage;
