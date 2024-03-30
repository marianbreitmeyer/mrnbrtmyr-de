import Image from 'next/image';
import ThemeSwitch from '@/components/theme-switch';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch />

      <div className="w-12 h-12 absolute bg-teal-400 dark:bg-orange-500 mt-8">
        Theme Test
      </div>
    </main>
  );
}
