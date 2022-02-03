import React from 'react';
import IconButton from '../UI/IconButton';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-container'>
        <svg
          className='navbar__logo'
          viewBox='0 0 48 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.377 9.155H4.522V12.651L6.137 12.765C6.175 12.841 6.16867 13.012 6.118 13.278C6.004 13.7593 5.72533 14 5.282 14H0.76V13.848C0.76 13.1513 1.03867 12.7777 1.596 12.727L2.147 12.689V2.296L0.76 2.182C0.747333 1.86533 0.804333 1.58667 0.931 1.346C1.05767 1.10533 1.24767 0.984999 1.501 0.984999H5.947C7.49233 0.984999 8.69567 1.31433 9.557 1.973C10.4183 2.619 10.849 3.52467 10.849 4.69C10.849 6.096 10.3677 7.19167 9.405 7.977C8.44233 8.76233 7.09967 9.155 5.377 9.155ZM4.522 7.977H5.13C6.14333 7.977 6.935 7.69833 7.505 7.141C8.08767 6.58367 8.379 5.84267 8.379 4.918C8.379 3.98067 8.151 3.27767 7.695 2.809C7.239 2.34033 6.59933 2.11867 5.776 2.144L4.522 2.182V7.977ZM16.0706 14H11.8336V13.848C11.8336 13.1513 12.1123 12.7777 12.6696 12.727L13.2586 12.689V5.792L12.5176 5.716C11.9983 5.66533 11.7639 5.27267 11.8146 4.538L15.5766 4.12V12.651L16.9256 12.765C17.0016 13.5883 16.7166 14 16.0706 14ZM15.6716 1.859C15.6716 2.25167 15.5386 2.58733 15.2726 2.866C15.0066 3.132 14.6709 3.265 14.2656 3.265C13.8729 3.265 13.5373 3.132 13.2586 2.866C12.9926 2.58733 12.8596 2.25167 12.8596 1.859C12.8596 1.46633 12.9926 1.137 13.2586 0.870999C13.5373 0.592332 13.8729 0.452999 14.2656 0.452999C14.6583 0.452999 14.9876 0.592332 15.2536 0.870999C15.5323 1.137 15.6716 1.46633 15.6716 1.859ZM22.689 4.12C23.601 4.12 24.342 4.31633 24.912 4.709C25.4946 5.089 25.786 5.57667 25.786 6.172C25.786 6.76733 25.6086 7.18533 25.254 7.426C24.8993 7.66667 24.5256 7.76167 24.133 7.711C24.1203 7.16633 23.9746 6.69133 23.696 6.286C23.4173 5.88067 22.9676 5.678 22.347 5.678C21.739 5.678 21.2576 5.97567 20.903 6.571C20.5483 7.15367 20.371 7.977 20.371 9.041C20.371 11.397 21.2766 12.575 23.088 12.575C23.9366 12.575 24.7473 12.233 25.52 11.549C25.6466 11.625 25.748 11.7517 25.824 11.929C25.9 12.1063 25.938 12.2583 25.938 12.385C25.938 12.7903 25.5643 13.2083 24.817 13.639C24.0823 14.0697 23.2336 14.285 22.271 14.285C20.9283 14.285 19.8706 13.8543 19.098 12.993C18.338 12.119 17.958 10.8967 17.958 9.326C17.958 7.75533 18.3886 6.495 19.25 5.545C20.1113 4.595 21.2576 4.12 22.689 4.12ZM33.0569 4.405H36.4579V4.557C36.4579 5.25367 36.1792 5.62733 35.6219 5.678L35.2039 5.697L32.8859 8.319L36.0019 12.651L37.2749 12.765C37.3129 13.1197 37.2369 13.4173 37.0469 13.658C36.8569 13.886 36.6162 14 36.3249 14H34.2919L31.4419 9.953L30.6059 10.884V12.651L31.9739 12.765C32.0119 12.841 32.0055 13.012 31.9549 13.278C31.8409 13.7593 31.5622 14 31.1189 14H26.8819V13.848C26.8819 13.1513 27.1605 12.7777 27.7179 12.727L28.2879 12.689V2.087L27.5469 2.011C27.0275 1.96033 26.7932 1.56767 26.8439 0.833L30.6059 0.414999V8.927L33.2849 5.754L32.2019 5.64C32.1639 5.564 32.1702 5.393 32.2209 5.127C32.3349 4.64567 32.6135 4.405 33.0569 4.405ZM44.0567 6.59C43.702 5.91867 43.1954 5.583 42.5367 5.583C41.878 5.583 41.365 5.91233 40.9977 6.571C40.643 7.22967 40.4657 8.129 40.4657 9.269C40.4657 10.3963 40.643 11.2767 40.9977 11.91C41.365 12.5307 41.878 12.841 42.5367 12.841C43.1954 12.841 43.702 12.537 44.0567 11.929C44.424 11.3083 44.6077 10.4343 44.6077 9.307C44.6077 8.167 44.424 7.26133 44.0567 6.59ZM38.0527 9.364C38.0527 7.74267 38.4517 6.46333 39.2497 5.526C40.0604 4.58867 41.1814 4.12 42.6127 4.12C44.044 4.12 45.1334 4.56967 45.8807 5.469C46.6407 6.36833 47.0207 7.616 47.0207 9.212C47.0207 10.7953 46.6154 12.0367 45.8047 12.936C44.994 13.8353 43.8604 14.285 42.4037 14.285C40.9597 14.285 39.8704 13.867 39.1357 13.031C38.4137 12.195 38.0527 10.9727 38.0527 9.364Z'
            fill='url(#paint0_linear_2_6)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_2_6'
              x1='0'
              y1='10.5'
              x2='48'
              y2='10.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#03A4FF' />
              <stop offset='1' stop-color='#CC00FF' stop-opacity='0.8' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='navbar__controls'>
        <IconButton icon='ri:notification-4-line' />
        <IconButton icon='ant-design:message-outlined' />
      </div>
    </nav>
  );
};

export default Navbar;
