'use client'
import { useRouter } from 'next/router';
import PhotoModal from '../components/PhotoModal';

const photos = [ /* Array of photo objects */ ];

const PhotoDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const photo = photos.find(photo => photo.id === id);

  if (!photo) {
    return <p>Loading...</p>;
  }

  return (
    <PhotoModal photo={photo} onClose={() => router.push('/')} />
  );
};

export default PhotoDetails;
