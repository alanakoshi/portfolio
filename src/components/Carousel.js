'use client'
import { useState, useEffect } from "react"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const getSrc = (item) => {
    if (!item) return '';
    return typeof item === 'string' ? item : item.src;
};

const getCaption = (item) => {
    if (!item) return '';
    const src = getSrc(item);
    return src.split('/').pop().replace(/\.[^/.]+$/, '');
};

export default function Carousel({ images = [] }) {
    const [index, setIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = images.length > 1 ? images.slice(1) : images;

    const prev = () => setIndex((index - 1 + slides.length) % slides.length);
    const next = () => setIndex((index + 1) % slides.length);

    const getSlide = (i) => slides.length ? slides[(i + slides.length) % slides.length] : null;

    const renderMedia = (item, className, idx = 0) => {
        const src = getSrc(item);
        return (
            <img
                src={src}
                className={`${className} object-contain transition-all duration-500 ease-in-out transform-gpu cursor-zoom-in`}
                onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                }}
            />
        );
    };

    {/* Esc and Arrow Keys */}
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setLightboxOpen(false);
            } else if (e.key === 'ArrowRight') {
                setLightboxIndex((lightboxIndex + 1) % slides.length);
            } else if (e.key === 'ArrowLeft') {
                setLightboxIndex((lightboxIndex - 1 + slides.length) % slides.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, slides.length]);

    return (
        <div className="">
            <div className="relative overflow-hidden flex justify-center items-center h-[350px]">
                {slides.length > 1 && (
                    <div className="text-white p-1 m-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none z-30" onClick={prev}>
                        <HiArrowLeft/>
                    </div>
                )}
                {/* Carousel */}
                <div className="m-2 md:m-8">
                    <div className="flex transition-transform justify-center items-center transition-all duration-500 ease-in-out">
                        {[index - 1, index, index + 1].map((i, idx) => {
                            const slide = getSlide(i);
                            if (!slide) return null;
                            const isCenter = idx === 1;

                            return (
                                <div key={i} className={`transition-all duration-500 ease-in-out mx-[-1rem] ${isCenter ? 'scale-120 z-20' : 'scale-90 opacity-70 z-10'} transform-gpu`}>
                                    {renderMedia(slide, isCenter ? 'h-72 w-auto' : 'h-60 w-auto')}
                                </div>
                            )
                        })}
                    </div>
                </div>
                {images.length > 1 && (
                    <div className="text-white p-1 m-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none z-30" onClick={next}>
                        <HiArrowRight/>
                    </div>
                )}
            </div>
            {slides.length > 1 && (
                <div className="text-center italic">
                    {getCaption(getSlide(index))} 
                </div>
            )}

            {/* Lightbox*/}
            {lightboxOpen && (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <button
                    className="absolute top-4 right-4 text-white text-4xl z-50 p-2 hover:scale-110"
                    onClick={() => setLightboxOpen(false)}
                >
                    &times;
                </button>
                <div>
                    <img
                        src={getSrc(getSlide(lightboxIndex))}
                        className="max-w-[90vw] max-h-[80vh] object-contain shadow-lg"
                    />
                    <div className="flex justify-center items-center">
                        <button
                            className="text-white text-2xl z-50 p-2 hover:scale-110 select-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((lightboxIndex - 1 + slides.length) % slides.length);
                            }}>
                            <HiArrowLeft/>
                        </button>
                        {slides.length > 1 && (
                            <div className="text-center text-white italic p-2">
                                {getCaption(getSlide(lightboxIndex))} 
                            </div>
                        )}
                        <button
                            className="text-white text-2xl z-50 p-2 hover:scale-110 select-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((lightboxIndex + 1) % slides.length);
                            }}>
                            <HiArrowRight/>
                        </button>
                    </div>
                    
                </div>
            </div>
        )}
        </div>
    )
}