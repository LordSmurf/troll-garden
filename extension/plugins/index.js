import RandomDiscordNotification from './background/RandomDiscordNotification.js';
import RandomSlackNotification from './background/RandomSlackNotification.js';
import AllLinksRickRoll from './content/AllLinksRickRoll.js';
import ComicSans from './content/ComicSans.js';
import TextHighlight from './content/TextHighlight.js';
import PageBlur from './content/PageBlur.js';
import AcceptOurPies from './content/AcceptOurPies.js';

export default [
  new RandomDiscordNotification(),
  new RandomSlackNotification(),
  new AllLinksRickRoll(),
  new PageBlur(),
  new AcceptOurPies(),
  new ComicSans(),
  new TextHighlight(),
];
