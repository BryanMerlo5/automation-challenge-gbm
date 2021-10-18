import { Given } from '@cucumber/cucumber';

import checkTitle from '../utils/checkTitle';
import checkUrl from '../utils/checkUrl';
import openWebsite from '../pageobjects/page';

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
