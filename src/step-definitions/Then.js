import { Then } from '@cucumber/cucumber';

import checkContainsText from '../support/check/checkContainsText';
import compareText from '../support/check/compareText';

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);