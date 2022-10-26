import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import AppNavigation from '~navigation/AppNavigation';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <RecoilNexus />
        <AppNavigation />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
