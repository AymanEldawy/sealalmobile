import React from 'react'

const ShareIcon = ({ ...props }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.60999 8.74953C6.19929 8.74886 6.7829 8.8647 7.32727 9.09037C7.87164 9.31605 8.36602 9.64711 8.78199 10.0645C8.96537 10.25 9.13264 10.4507 9.28199 10.6645L16.362 7.71953C16.1316 7.17161 16.0139 6.58291 16.016 5.98853C16.0139 4.94934 16.3722 3.94156 17.0299 3.13698C17.6876 2.33239 18.6039 1.78079 19.6228 1.57619C20.6416 1.37159 21.6999 1.52666 22.6172 2.01496C23.5346 2.50326 24.2542 3.29457 24.6534 4.25402C25.0526 5.21348 25.1067 6.28168 24.8065 7.27657C24.5064 8.27147 23.8704 9.13147 23.0072 9.71C22.1439 10.2885 21.1067 10.5498 20.0724 10.4492C19.0381 10.3487 18.0707 9.89251 17.335 9.15853C17.1951 9.01845 17.0648 8.86911 16.945 8.71153L9.82099 11.6755C10.0085 12.1746 10.1043 12.7034 10.104 13.2365C10.1037 13.5687 10.0678 13.9 9.99699 14.2245L17.115 17.5605C17.1817 17.4785 17.2573 17.3969 17.342 17.3155C18.0756 16.5829 19.0405 16.1273 20.0724 16.0263C21.1042 15.9254 22.1392 16.1852 23.0009 16.7616C23.8627 17.3381 24.498 18.1954 24.7985 19.1877C25.0991 20.18 25.0464 21.2457 24.6493 22.2035C24.2523 23.1612 23.5355 23.9517 22.621 24.4402C21.7066 24.9288 20.651 25.0852 19.6342 24.8828C18.6173 24.6805 17.7021 24.1318 17.0444 23.3304C16.3867 22.529 16.0271 21.5243 16.027 20.4875C16.0249 19.8041 16.1821 19.1296 16.486 18.5175L9.61199 15.2995C9.40038 15.712 9.12423 16.0881 8.79399 16.4135C8.2718 16.9338 7.62944 17.3173 6.92374 17.5303C6.21804 17.7432 5.47075 17.779 4.74794 17.6344C4.02513 17.4898 3.34909 17.1693 2.77961 16.7013C2.21012 16.2333 1.76473 15.6322 1.48284 14.9511C1.20095 14.27 1.09123 13.5299 1.1634 12.7963C1.23556 12.0627 1.48739 11.3582 1.8966 10.7451C2.30581 10.132 2.8598 9.62921 3.50957 9.28115C4.15934 8.93308 4.88487 8.75049 5.62199 8.74953H5.60999ZM22.866 3.62053C22.3185 3.0744 21.5987 2.73494 20.8291 2.65998C20.0594 2.58502 19.2876 2.77919 18.6451 3.20942C18.0025 3.63965 17.529 4.27932 17.3051 5.01949C17.0813 5.75966 17.1209 6.55454 17.4174 7.26874C17.7138 7.98295 18.2487 8.5723 18.9308 8.93643C19.613 9.30055 20.4003 9.41691 21.1587 9.2657C21.917 9.11449 22.5995 8.70506 23.0899 8.10714C23.5802 7.50923 23.8482 6.7598 23.848 5.98653C23.8481 5.54693 23.7614 5.11163 23.5929 4.70561C23.4244 4.29959 23.1774 3.93084 22.866 3.62053ZM22.866 18.1145C22.3185 17.5684 21.5987 17.2289 20.8291 17.154C20.0594 17.079 19.2876 17.2732 18.6451 17.7034C18.0025 18.1336 17.529 18.7733 17.3051 19.5135C17.0813 20.2537 17.1209 21.0485 17.4174 21.7627C17.7138 22.4769 18.2487 23.0663 18.9308 23.4304C19.613 23.7945 20.4003 23.9109 21.1587 23.7597C21.917 23.6085 22.5995 23.1991 23.0899 22.6011C23.5802 22.0032 23.8482 21.2538 23.848 20.4805C23.8481 20.0409 23.7614 19.6056 23.5929 19.1996C23.4244 18.7936 23.1774 18.4248 22.866 18.1145ZM7.97599 10.8645C7.42854 10.3184 6.7087 9.97894 5.93906 9.90398C5.16942 9.82902 4.3976 10.0232 3.75506 10.4534C3.11251 10.8836 2.63899 11.5233 2.41513 12.2635C2.19128 13.0037 2.23095 13.7985 2.52737 14.5127C2.8238 15.2269 3.35866 15.8163 4.04084 16.1804C4.72303 16.5445 5.51035 16.6609 6.2687 16.5097C7.02705 16.3585 7.70952 15.9491 8.19988 15.3511C8.69024 14.7532 8.95816 14.0038 8.95799 13.2305C8.95812 12.7909 8.87144 12.3556 8.70292 11.9496C8.5344 11.5436 8.28737 11.1748 7.97599 10.8645Z" fill="currentcolor" stroke="currentcolor" />
    </svg>
  )
}

export default ShareIcon