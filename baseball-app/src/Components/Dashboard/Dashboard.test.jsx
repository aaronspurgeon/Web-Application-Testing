import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

   afterEach(rtl.cleanup);

   it('renders the button text', () => {
       const wrapper = rtl.render(
           <Dashboard />
       );
       const element = wrapper.queryByText(/Set a player to bat!/i);
       expect(element).toBeVisible();
   })