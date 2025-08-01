import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonImage({ src, alt = '', height = 200, width = '100%', style = {}, className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width, height }}>
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
        loading="lazy"
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow transition duration-300 transform hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
}

export default SkeletonImage;