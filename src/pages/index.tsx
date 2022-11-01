import { twMerge } from 'tailwind-merge';
import DefaultLayout from 'components/Layout/DefaultLayout';
import { useScreen } from 'hooks/useScreen';
import { NextSeo } from 'next-seo';
import { Page } from 'types/page';

const IndexPage: Page = () => {
  const { breakpoints, currentBreakpoint, width, height } = useScreen();
  return (
    <>
      <NextSeo title="Index Page" />

      <div className="flex h-screen flex-col items-center justify-center gap-y-5">
        <div className="text-2xl">Hello, world!</div>
        <div className="flex gap-5">
          {Object.keys(breakpoints).map(bp => {
            if (!breakpoints[bp as Breakpoint]) return null;
            return (
              <span
                key={bp}
                className={twMerge(currentBreakpoint === bp && 'font-bold')}
              >
                {bp}
              </span>
            );
          })}
        </div>
        <div className="text-base">
          Window: {width} <small>X</small> {height}
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = DefaultLayout;

export default IndexPage;
