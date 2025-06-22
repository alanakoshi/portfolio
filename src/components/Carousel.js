'use client'
import { useState, useEffect } from "react"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion'

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
    const [landscapeMap, setLandscapeMap] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const slides = images.length > 1 ? images.slice(1) : images;

    const prev = () => setIndex((index - 1 + slides.length) % slides.length);
    const next = () => setIndex((index + 1) % slides.length);

    const getSlide = (i) => slides.length ? slides[(i + slides.length) % slides.length] : null;

    const handleLoad = (idx, e) => {
        const img = e.target;
        const isLandscape = img.naturalWidth > img.naturalHeight;
        setLandscapeMap(prev => ({ ...prev, [idx]: isLandscape }));
    }

    const renderMedia = (item, className, idx) => {
        const src = getSrc(item);
        return (
            <img
                src={src}
                onLoad={(e) => handleLoad(idx, e)}
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

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const isCurrentLandscape = landscapeMap[index];

    return (
        <div className="sm:m-8">
            <div className={`relative overflow-hidden flex justify-center items-center ${isCurrentLandscape ? 'h-[250px] sm:h-[375px]': isSmallScreen ? 'h-[300px]' : 'h-[450px]'}`}>
                {slides.length > 1 && (
                    <div className="text-white p-1 m-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none z-40" onClick={prev}>
                        <HiArrowLeft/>
                    </div>
                )}
                {/* Carousel */}
                <div className="flex justify-center items-center">
                    {[-1, 0, 1].map((offset) => {
                        const slideIndex = (index + offset + slides.length) % slides.length;
                        const isCenter = offset === 0;

                        return (
                            <motion.div
                                key={slideIndex}
                                animate={{
                                    scale: isCenter ? (isSmallScreen & landscapeMap[slideIndex] ? 1.1 : 1.5) : 1,
                                    opacity: isCenter ? 1: 0.6,
                                    zIndex: isCenter ? 30 : 10,
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut'}}
                                className={`transform-gpu ${isCurrentLandscape ? isSmallScreen ? 'mx-[-4rem]': '' : ''}`}
                            >
                                {renderMedia(getSlide(slideIndex), landscapeMap[slideIndex] ? 'h-60' : 'h-72', slideIndex)}
                            </motion.div>
                        );
                    })}
                </div>
                {slides.length > 1 && (
                    <div className="text-white p-1 m-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none z-40" onClick={next}>
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
                    <div className="flex flex-col">
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