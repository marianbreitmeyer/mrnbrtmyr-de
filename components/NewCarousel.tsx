'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, type PanInfo } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Picture from '@/components/Picture';
import { cn } from '@/utils/cn';
import useResize from '@/hooks/useResize';

const START_INDEX = 0;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 509;

const articles = [
  {
    title:
      'Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion',
    url: 'https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f',
  },
  {
    title:
      'Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript',
    url: 'https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450',
  },
  {
    title: 'Handling Forms in NextJS with busboy, ReactHookForm and TypeScript',
    url: 'https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3',
  },
  {
    title: 'Handling Forms in NextJS with busboy, ReactHookForm and TypeScript',
    url: 'https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3',
  },
  {
    title: 'Handling Forms in NextJS with busboy, ReactHookForm and TypeScript',
    url: 'https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3',
  },
];

export default function NewCarousel() {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const [itemWidth, setItemWidth] = useState(FALLBACK_WIDTH);
  const [width] = useResize();
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  useEffect(() => {
    setItemWidth(itemsRef.current[0]?.offsetWidth ?? FALLBACK_WIDTH);
  }, [width]);

  useEffect(() => {
    const activeOffset = -itemWidth * activeSlide;
    offsetX.set(activeOffset);
  }, [itemWidth]);

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    //stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    //snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    /*
      - start searching from currently active slide in the direction of the drag
      - check if the drag offset is greater than the width of the current item
      - if it is, add/subtract the width of the next/prev item to the offsetWidth
      - if it isn't, snap to the next/prev item
    */
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && //dragging left
          dragOffset > offsetWidth + itemOffset && //dragged past item
          i > 1) || //not the first/second item
        (dragOffset < 0 && //dragging right
          dragOffset < offsetWidth + -itemOffset && //dragged past item
          i < itemsRef.current.length - 2) //not the last/second to last item
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        //prev
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        //next
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }
  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  return (
    <>
      <div className="w-full h-auto border-t-[1px] border-b-[1px] border-stone-200 dark:border-stone-700">
        <div className="overflow-hidden wrapper-no-p border-l-[1px] border-r-[1px] border-stone-200 dark:border-stone-700 grid grid-cols-8 py-12 md:py-24">
          <div className="relative col-span-8 col-start-1 md:col-span-5 md:col-start-4">
            <motion.ul
              className="flex items-center"
              style={{
                x: animatedX,
              }}
              drag="x"
              dragConstraints={{
                left: -(itemWidth * (articles.length - 1)),
                right: itemWidth,
              }}
              onDragEnd={handleDragSnap}
            >
              {articles.map((article, index) => {
                const active = index === activeSlide;
                return (
                  <motion.li
                    layout
                    key={index}
                    ref={(el) => {
                      if (el) itemsRef.current[index] = el;
                    }}
                    className={cn(
                      'group relative shrink-0 select-none px-6 md:px-10 basis-full',
                      !active && 'opacity-20'
                    )}
                    transition={{
                      type: 'spring',
                      bounce: 0.1,
                      duration: 0.7,
                    }}
                    // style={{
                    //   flexBasis: active ? '100%' : '80%',
                    // }}
                  >
                    <div className="block" draggable={false}>
                      <Picture imageSrc="/mb.jpg" altText="just text" />
                      {/* <div
                        className={cn(
                          'grid place-content-center overflow-hidden rounded-lg bg-gray-900',
                          active ? 'aspect-[4/3]' : 'aspect-[4/3]'
                        )}
                      >
                        <span
                          className={cn(
                            'text-xl font-bold',
                            active && 'text-lime-300'
                          )}
                        >
                          {index}
                        </span>
                      </div> */}
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
            <button
              type="button"
              className="bg-stone-200 disabled:opacity-50 rounded-lg group absolute left-0 top-1/2 -translate-y-10 z-20 p-3"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeftIcon />
              <span className="sr-only">Previous Guide</span>
            </button>
            <button
              type="button"
              className="bg-stone-200 rounded-lg disabled:opacity-50 group absolute left-0 top-1/2 translate-y-10 z-20 text-stone-600 p-3"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRightIcon />
              <span className="sr-only">Next Guide</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
