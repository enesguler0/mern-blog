import React from 'react';

const Footer = () => {
    return (
        <div className="border-t dark:border-white border-black px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide dark:text-white text-gray-800 uppercase">
                  Esas Hukuk & Avukatlık
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm ">
                <p className="text-sm dark:text-white text-gray-800">
                Esas Hukuk ve Avukatlık Bürosu, hukuki ihtiyaçlarınıza çözüm odaklı yaklaşımıyla destek sağlar. 
                Avukatlarımızla birlikte, sizlere güvenilir ve etkili hukuki danışmanlık sunarız. 
                </p>
                <p className="mt-4 text-sm dark:text-white text-gray-800">
                Hizmetlerimiz hakkında daha fazla bilgi almak veya randevu ayarlamak için bizimle iletişime geçmekten çekinmeyin.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-800 dark:text-gray-200">
                İletişim
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-500">Tel:</p>
                <a
                  href="tel:00905326571614"
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  +90 552 6571 1614
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-500">Email:</p>
                <a
                  href="mailto:esashukukbolu@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  esashukukbolu@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-500">Adres:</p>
                <a
                  href="https://maps.app.goo.gl/6Hs7v5fTRsdnXx1L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Borazanlar, 406. Sk. Ata Konutları D:1. Kısım B Blok No:1/5, 14100 Merkez/Bolu
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer;
