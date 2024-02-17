import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">İletişim</h1>
        <div className="mb-6">
        <div className="space-y-2 lg:text-lg text-sm m-4">
              
              <div className="flex">
                <p className="mr-1 text-gray-500">Tel: </p>
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
                <p className="mr-1 text-gray-500">Email: </p>
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
                <p className="mr-1 text-gray-500">Adres: </p>
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
        <div className="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.3924904927553!2d31.58658460688476!3d40.73138835877158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3fd82c8bdb63%3A0x30cb3b07a6359916!2sEsas%20Hukuk%20%26%20Avukatl%C4%B1k%20B%C3%BCrosu%20Av.%20Emre%20G%C3%9CLER%20-%20Av.%20Sefa%20YAMAN%20-%20Bo%C5%9Fanma%2C%20%C4%B0%C5%9F%2C%20Ceza%20Avukat%C4%B1%20Bolu!5e0!3m2!1str!2str!4v1708118999874!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  )
}
