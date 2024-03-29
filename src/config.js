import ReactGA from 'react-ga';

export default {
    emailJsApiKey: process.env.REACT_APP_EMAIL_JS_KEY,
    googleAnalytics: process.env.REACT_APP_GA_TRAKING,
};

export const GAInit = (TrackingID) => {
    ReactGA.initialize(TrackingID);
};

export const contentful = {
    space: 'wz1fit8x1666',
    token: 'MYN03qokpkVPScdgWwonr6OFW-JiRwRrmBIndwE6VL0'
};

export const GAEvent = (category, action) => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRAKING);
    ReactGA.event({
        category,
        action,
    });
};
