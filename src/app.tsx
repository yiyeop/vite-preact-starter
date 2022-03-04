import { Link, Route } from 'wouter-preact';
import { css } from 'twind/css';
import { setup } from '@twind/preact';
import { tw } from 'twind';

import Page from './Page';

setup({
  props: {
    css: false,
    className: true,
  },
  plugins: {
    center: `flex items-center justify-center`,
  },
});

export function App() {
  return (
    <>
      <Route path='/'>
        <div className='center flex-col p-10'>
          <div className='font-bold'>hello</div>
          <Link href='/page/1'>
            <a
              // class='font-bold text-blue-700 bg-yellow-200 w-20 h-20 rounded-[8px] center'
              tw={tw([
                `font-bold text-blue-700 bg-yellow-200 w-20 h-10 rounded-[8px] center`,
                css`
                  margin: 40px;
                `,
              ])}
              // tw={css`
              //   color: red;
              // `}
            >
              To Page
            </a>
          </Link>
        </div>
      </Route>
      <Route path='/page/:id' component={Page} />
    </>
  );
}
