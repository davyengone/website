import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const GAScript = () => {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script> */}

      <Script strategy="lazyOnload" id="video-ask">
        {`
          window.VIDEOASK_EMBED_CONFIG = {
            kind: 'widget',
            url: 'https://www.videoask.com/fitxs0ezv',
            options: {
              widgetType: 'VideoThumbnailSmall',
              text: 'Talk to me',
              backgroundColor: '#FE0030',
              position: 'bottom-right',
              dismissible: false,
            },
          }
        `}
      </Script>
      <Script strategy="lazyOnload" src="https://www.videoask.com/embed/embed.js" />
      <Script strategy="lazyOnload" src="https://cdn.splitbee.io/sb.js" />
    </>
  )
}

export default GAScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
