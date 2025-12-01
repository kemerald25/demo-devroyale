import './globals.css';
import { headers } from 'next/headers';
import ContextProvider from '@/context';
import { OnchainKitWrapper } from '@/components/OnchainKitProvider';
import { MiniappReady } from '@/components/MiniappReady';

export const metadata = {
  title: 'Roy',
  description: 'Demo for Dev Royale CLI',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0B0D] text-white antialiased">
        <MiniappReady />
        <ContextProvider cookies={cookies}>
          <OnchainKitWrapper>
            {children}
          </OnchainKitWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
