import React from 'react';
import { ProjectHero as ProjectHeroType } from '../data/projects/types';
import { Image } from './Image';

interface ProjectHeroProps {
  hero?: ProjectHeroType;
  fallbackImage?: string;
  title: string;
}

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const ProjectHero = ({ hero, fallbackImage, title }: ProjectHeroProps) => {
  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  if (!hero && !fallbackImage) return null;

  if (hero?.type === 'youtube' || (hero?.type === 'video' && hero?.videoType === 'youtube')) {
    const videoId = hero.youtubeId || getYouTubeId(hero.src);
    if (!videoId) return null;

    return (
      <div className="px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&color=white&iv_load_policy=3`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    );
  }

  if (hero?.type === 'video') {
    return (
      <div className="px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <video
            src={hero.src}
            className="w-full h-[600px] object-cover"
            autoPlay={hero.autoplay}
            muted={hero.muted}
            loop={hero.loop}
            playsInline={hero.playsInline}
            controls={hero.controls}
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={preventRightClick}
          >
            <track kind="captions" />
          </video>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 mb-8">
      <div className="max-w-6xl mx-auto">
        <Image 
          src={hero?.src || fallbackImage!}
          alt={title}
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
};
