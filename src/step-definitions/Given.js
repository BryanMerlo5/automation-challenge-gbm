import { Given } from '@cucumber/cucumber';

import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import openWebsite from '../support/action/openWebsite';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
);
