import mixpanel from 'mixpanel-browser';

mixpanel.init('f30974166014d5ba6546aa81514e6723');

export default function track(eventName, options = {}) {
  console.log('data passed');
  return mixpanel.track(eventName, options);
}
