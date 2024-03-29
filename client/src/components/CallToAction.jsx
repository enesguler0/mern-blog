import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-3xl'>
            Hukuki Sorunlarınız İçin Yanınızdayız
            </h2>
            <p className='text-gray-500 my-2'>
            Hukuk alanında uzman avukatlarımız size yardımcı olmaktan mutluluk duyar.
            </p>
            <Link to="/contact" className='items-center mx-auto'>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                          İletişim      
            </Button>
            </Link>
            
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.uvocorp.com/freelancewriting/wp-content/uploads/2016/07/Becoming-a-Freelance-Article-Writer.jpg" />
        </div>
    </div>
  )
}