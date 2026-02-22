'use client';

import Image from 'next/image';

interface ProductGalleryProps {
  image: string;
  title: string;
}

export function ProductGallery({ image, title }: ProductGalleryProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border">
      <Image
        src={image || '/placeholder.svg'}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
