import i18next from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';

function getBrowserLink(browser) {
  if (browser.is('Firefox')) {
    return 'https://www.mozilla.org/en-US/firefox/new/';
  }
  if (browser.is('Safari')) {
    return 'https://support.apple.com/downloads/safari';
  }
  return 'https://www.google.com/chrome/browser/desktop/';
}

function BrowserError({browser}) {
  const browserName = browser.getBrowserName();

  return (
    <div className="unsupported-browser">
      <p>{i18next.t('bad-browser.message', {name: browserName})}</p>

      <p>
        <a href={getBrowserLink(browser)}>
          {i18next.t('bad-browser.download')}
        </a>
      </p>
    </div>
  );
}

BrowserError.propTypes = {
  browser: PropTypes.object.isRequired,
};

export default BrowserError;
