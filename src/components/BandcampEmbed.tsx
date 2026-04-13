import React from 'react';

interface BandcampEmbedProps {
  url?: string;
  embedId: string;
  embedType: 'album' | 'track';
  width?: number;
  height?: number;
  tracklist?: boolean;
}

const BandcampEmbed: React.FC<BandcampEmbedProps> = ({
  url,
  embedId,
  embedType,
  width = 350,
  height = 470,
  tracklist = true,
}) => {
  const iframeSrc = `https://bandcamp.com/EmbeddedPlayer/${embedType}=${embedId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=${tracklist}/transparent=true/`;
  return (
    <iframe
      style={{ border: 0, width, height }}
      src={iframeSrc}
      seamless
      title={`Bandcamp ${embedType} player`}
    >
      {url ? <a href={url}>Listen on Bandcamp</a> : null}
    </iframe>
  );
};

export default BandcampEmbed;
