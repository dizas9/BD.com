"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState, useCallback } from "react";
import MagnifierImageModal from "./MagnifierImageModal";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(images);

  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  const handleChangeImahe = (image: any) => {
    setBigImage(image);
  };
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-5">
        {/* small image gallery */}
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((image: any, index: any) => (
            <div className="overflow-hidden rounded-lg bg-gray-100" key={index}>
              <Image
                src={urlFor(image).url()}
                alt="photo"
                width={200}
                height={200}
                className="h-full w-full object-cover object-center cursor-pointer"
                onClick={() => handleChangeImahe(image)}
              />
            </div>
          ))}
        </div>

        {/* big image */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          {/* <Image
            src={urlFor(bigImage).url()}
            alt="Photo"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center"
          /> */}

          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <img
              alt="That wanaka tree, alone in the water near mountains"
              src={urlFor(bigImage).url()}
              width={2000}
              height={1000}
            />
          </ControlledZoom>
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            Sale
          </span>
        </div>
      </div>

      {/* {isModalOpen && (
        <MagnifierImageModal
          handleClose={handleModalClose}
          images={images}
          bigImage={bigImage}
        />
      )} */}
    </>
  );
}
