import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import AppNavigation from '~navigation/AppNavigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <AppNavigation />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
