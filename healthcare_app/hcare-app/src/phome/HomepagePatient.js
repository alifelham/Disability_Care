import React from 'react';
import './HomepagePatient.css';

function HomepagePatient() {
  return React.createElement(
    'div',
    { className: 'bg' },
    React.createElement('meta', { charSet: 'UTF-8' }),
    React.createElement(
      'title',
      null,
      'Homepage Patient'
    ),
    React.createElement('link', { rel: 'stylesheet', href: './HomepagePatient.css' }),
    React.createElement('meta', { charSet: 'utf-8' }),
    React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }),
    React.createElement(
      'title',
      null,
      'homepage'
    ),
    React.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed', rel: 'stylesheet' }),
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('p', { style: { backgroundImage: 'url("https://i.postimg.cc/zBHgmGvK/bg.png")' } }),
      React.createElement(
        'div',
        { className: 'responsive-bar' },
        React.createElement(
          'h6',
          { className: 'brand' },
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { className: 'logo', src: 'https://i.postimg.cc/Y2RVP2ch/logo.png' })
          )
        ),
        React.createElement(
          'h4',
          { className: 'menu' },
          React.createElement('img', { classname: 'nav', src: 'https://i.postimg.cc/J499N6Vq/nav.png' })
        ),
        React.createElement('div', { style: { clear: 'both' } })
      ),
      React.createElement(
        'nav',
        null,
        React.createElement(
          'h6',
          { className: 'brand' },
          React.createElement(
            'a',
            { href: '#' },
            React.createElement('img', { src: 'https://i.postimg.cc/Y2RVP2ch/logo.png' })
          )
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Home'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Medicine'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Tests'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Appointments'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Profile'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#' },
              'Logout'
            )
          )
        ),
        React.createElement('div', { style: { clear: 'both' } })
      ),
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'content-inner' },
          React.createElement(
            'button',
            { className: 'voice', href: '#' },
            React.createElement('img', { src: 'https://i.postimg.cc/44pLCJrz/voice.png' })
          )
        ),
        React.createElement(
          'button',
          { className: 'emergency', href: '#' },
          React.createElement(
            'p',
            null,
            'Emergency'
          )
        )
      )
    )
  );
}

export default HomepagePatient;

