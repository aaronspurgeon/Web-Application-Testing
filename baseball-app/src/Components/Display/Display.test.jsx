import React from 'react';
import Display from './Display';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

test("Render the strike text", () => {
    const wrapper = rtl.render(<Display />);

    const element = wrapper.getByText(/Number of strikes:/i);
    expect(element).toBeVisible();
})

test("Render the strike text", (props) => {
    const wrapper = rtl.render(<Display strikes={props.stikes}/>);

    const element = wrapper.getByText(/strikes/i)
    expect(element).toHaveValue(0);
})