import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import * as jestmock from 'jest-fetch-mock';
(global as any).fetch = jestmock;
Enzyme.configure({ adapter: new Adapter() });

