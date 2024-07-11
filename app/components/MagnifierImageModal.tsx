"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useCallback, useState } from "react";

interface ModalProps {
  handleClose: () => void;
  images: string[];
  bigImage: any;
}

export default function MagnifierImageModal({
  handleClose,
  images,
  bigImage,
}: ModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <div className="h-screen absolute bg-[white] right-0 left-0 bottom-[-40rem] top-0 flex flex-col items-center">
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <Image
          alt="That wanaka tree, alone in the water near mountains"
          src={urlFor(bigImage).url()}
          width={1000}
          height={1000}
        />
      </ControlledZoom>

      <div className="w-[30%] flex gap-2">
        {images.map((image, idx) => (
          <Image
            src={urlFor(image).url()}
            alt="photo"
            width={50}
            height={20}
            className="h-full w-full object-cover object-center cursor-pointer"
            key={idx}
            onClick={() => {
              // Handle image click to change the bigImage if needed
            }}
          />
        ))}
      </div>
      <button className="absolute right-2 top-2" onClick={handleClose}>
        x
      </button>
    </div>
  );
}
