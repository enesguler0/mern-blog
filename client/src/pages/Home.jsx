import { Link } from 'react-router-dom';
import CallToActionArticles from '../components/CallToActionArticles';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Hero from '../components/Hero';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {/* <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Esas Hukuk & Avukatlık</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Hukuki ihtiyaçlarınız için doğru adrestesiniz. Bize ulaşın ve sizin için ne yapabileceğimizi öğrenin.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div> */}
      <Hero/>
      <div className='p-3 bg-stone-300 dark:bg-slate-600'>
        <CallToActionArticles />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Son Yazılarımız</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              Daha Fazlası...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}