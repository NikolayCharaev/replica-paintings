import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { getCommand } from '@/lib/getCommand';

const TeamPhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getCommand().then((data) => {
      setPhotos(data);
    });
  }, []);

  return (
    <div className="team__photos">
      {photos.map((elem: any, index: number) => {
        return (
          <div key={index}>
            <Image src={elem.images} width={80} height={80} alt="photo" />
          </div>
        );
      })}
    </div>
  );
};

export default TeamPhotos;
