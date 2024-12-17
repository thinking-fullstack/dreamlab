import { PropsWithChildren } from 'react';

import CharacterProvider from './character.context';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <CharacterProvider>
      {children}
    </CharacterProvider>
  )
}

export default AppProvider;
