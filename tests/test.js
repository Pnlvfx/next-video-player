import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import { Video } from '../src';
describe('Common render', () => {
    it('renders without crashing', () => {
        render(React.createElement(Video, null));
    });
});
//# sourceMappingURL=test.js.map