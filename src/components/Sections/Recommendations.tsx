import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {recommendation,SectionId} from '../../data/data';
import {Recommendation} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Recommendations: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {backgroundImage, recommendations} = recommendation;

  const resolveSrc = useMemo(() => {
    if (!backgroundImage) return undefined;
    return typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
  }, [backgroundImage]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setRecommendation = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === recommendations.length) {
      setRecommendation(0)();
    } else {
      setRecommendation(activeIndex + 1)();
    }
  }, [activeIndex, setRecommendation, recommendations.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 15_000);

  // If no recommendations, don't render the section
  if (!recommendations.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Recommendations}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !backgroundImage},
        )}
        style={{backgroundImage: `url(${resolveSrc}`}}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {recommendations.map((recommendation, index) => {
                const isActive = index === activeIndex;
                return (
                  <Recommendation
                    isActive={isActive}
                    key={`${recommendation.name}-${index}`}
                    recommendation={recommendation}
                  />
                );
              })}
            </div>
            {recommendations.length > 1 && (
              <div className="flex gap-x-4">
                {[...Array(recommendations.length)].map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      className={classNames(
                        'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                        isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                      )}
                      disabled={isActive}
                      key={`select-button-${index}`}
                      onClick={setRecommendation(index)}></button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
});

const Recommendation: FC<{recommendation: Recommendation; isActive: boolean}> = memo(
  ({recommendation: {texts, name}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
      <blockquote className="flex flex-col gap-y-4">
        {texts.map((text, index) => (
          <p className="prose prose-sm italic text-white md:prose-lg" key={`${text}-${index}`}>
            {text}
          </p>
        ))}
        <div className="text-xs text-sm text-white">&mdash; {name}</div>
      </blockquote>
    </div>
  ),
);

export default Recommendations;
