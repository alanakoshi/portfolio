'use client'
import { useState } from "react"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const getSrc = (item) => {
    if (!item) return '';
    return typeof item === 'string' ? item : item.src;
};

const getCaption = (item) => {
    if (!item) return '';
    const src = getSrc(item);
    return src.split('/').pop().replace(/\.[^/.]+$/, '');
}
export default function Carousel({ images = [] }) {
    const [index, setIndex] = useState(0);
    const slides = images.length > 1 ? images.slice(1) : images;

    const prev = () => setIndex((index - 1 + slides.length) % slides.length);
    const next = () => setIndex((index + 1) % slides.length);

    const getSlide = (i) => slides.length ? slides[(i + slides.length) % slides.length] : null;

    const renderMedia = (item, className) => {
        const src = getSrc(item);
        return (
            <img
                src={src}
                className={`${className} object-contain transition-all duration-500 ease-in-out transform-gpu`}
            />
        );
    };

    return (
        <div className="">
            <div className="flex justify-center items-center h-[350px]">
                {slides.length > 1 && (
                    <div className="text-white p-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none" onClick={prev}>
                        <HiArrowLeft/>
                    </div>
                )}
                {/* carousel */}
                <div className="m-2 md:m-8">
                    <div className="flex transition-transform justify-center items-center transition-all duration-500 ease-in-out">
                        {[index - 1, index, index + 1].map((i, idx) => {
                            const slide = getSlide(i);
                            if (!slide) return null;
                            const isCenter = idx === 1;
                            const isSide = idx != 1;

                            return (
                                <div key={i} className={`transition-all duration-500 ease-in-out ${isCenter ? 'scale-120 z-20' : 'scale-110 opacity-70 z-10'} transform-gpu`}>
                                    {renderMedia(slide, isCenter ? 'h-72 w-auto' : 'h-60 w-auto')}
                                </div>
                            )
                        })}
                    </div>
                </div>
                {images.length > 1 && (
                    <div className="text-white p-1 inline-block rounded-xl bg-[#c87377] hover:scale-120 select-none" onClick={next}>
                        <HiArrowRight/>
                    </div>
                )}
            </div>
            {slides.length > 1 && (
                <div className="text-center italic">
                    {getCaption(getSlide(index))} 
                </div>
            )}
            {/* dots */}
            <div>

            </div>
        </div>
    )
}