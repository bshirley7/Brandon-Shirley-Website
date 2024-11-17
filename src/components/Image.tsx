import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  caption, 
  className,
  objectFit = 'cover',
  ...props 
}) => {
  // Ensure the src path starts with a forward slash for local files
  const imageSrc = src.startsWith('http') ? src : src.startsWith('/') ? src : `/${src}`;
  
  // Add debugging log
  console.log('Loading image:', { originalSrc: src, processedSrc: imageSrc });
  
  return (
    <figure className={className}>
      <img
        src={imageSrc}
        alt={alt || ''}
        className={`w-full h-full object-${objectFit}`}
        onError={() => console.error('Image failed to load:', imageSrc)}
        {...props}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
