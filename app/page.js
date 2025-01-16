'use client'
import React, { useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import SearchBar from './components/SearchBar';import Image from "next/image";

export default function Home() {
  const photos = [
    {
      id: '1',
      url: '/images/gallery/kodak-colorplus-200/color200-1.webp',
      title: 'Sunset Over the Hills',
      description: 'A beautiful sunset over rolling hills.',
      tags: ['colorplus', 'nature', 'landscape']
    },
    {
      id: '2',
      url: '/images/gallery/kodak-colorplus-200/color200-2.webp',
      title: 'City Lights at Night',
      description: 'The city skyline illuminated at night.',
      tags: ['colorplus', 'night', 'lights']
    },
    {
      id: '3',
      url: '/images/gallery/kodak-gold-200/gold-200-1.webp',
      title: 'Forest Pathway',
      description: 'A serene path through a dense forest.',
      tags: ['kodak gold', 'path', 'nature']
    },
    {
      id: '4',
      url: '/images/gallery/kodak-gold-200/gold-200-2.webp',
      title: 'Mountain Peak',
      description: 'A towering mountain peak covered in snow.',
      tags: ['kodak gold', 'snow', 'adventure']
    },
    {
      id: '5',
      url: '/images/gallery/kodak-potra-400/potra-400-1.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '6',
      url: '/images/gallery/kodak-potra-400/potra-400-2.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '7',
      url: '/images/gallery/kodak-potra-400/potra-400-3.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '8',
      url: '/images/gallery/kodak-potra-400/potra-400-4.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '9',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-1.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '10',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-2.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '11',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-3.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '12',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-4.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '13',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-5.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
    {
      id: '14',
      url: '/images/gallery/kodak-ultramax-400/ultramax-400-6.webp',
      title: 'Ocean Waves',
      description: 'Waves crashing on the shore under a clear blue sky.',
      tags: ['ocean', 'waves', 'beach']
    },
  ];
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  const handleSearch = (query) => {
    const result = photos.filter(photo => photo.tags.includes(query));
    setFilteredPhotos(result);
  };

  return (
    <>
    <div>
    
      <PhotoGrid photos={filteredPhotos} />
    </div>
    </>
  );
}
