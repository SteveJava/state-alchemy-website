import React from 'react';

interface BandcampEmbedProps {
  url: string;
  width?: number;
  height?: number;
  tracklist?: boolean;
}

const BandcampEmbed: React.FC<BandcampEmbedProps> = ({
  url,
  width = 350,
  height = 470,
  tracklist = false,
}) => {
  // For now, you can hardcode the ID for testing
  const isAlbum = url.includes('/album/');
  const type = isAlbum ? 'album' : 'track';
  const id = '3220687225'; // Replace with actual embed ID for each release

  const iframeSrc = `https://bandcamp.com/EmbeddedPlayer/${type}=${id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=${tracklist}/transparent=true/`;

  return (
    <iframe
      style={{ border: 0, width, height }}
      src={iframeSrc}
      seamless
      title={`Bandcamp ${type} player`}
    >
      <a href={url}>Listen on Bandcamp</a>
    </iframe>
  );
};

export default BandcampEmbed;
