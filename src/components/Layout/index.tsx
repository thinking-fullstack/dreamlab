import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full">
      <header className="p-4 border-b shadow-lg">
        <h1 className="text-2xl font-semibold">
          <span className="text-green-600 font-bold">Dreamlabs</span> Code Challenge
        </h1>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout;
