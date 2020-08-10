import SbEditable from 'storyblok-react'

const Testimonials = ({ blok }: { blok: any }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <section className='py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24'>
        <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative'>
            <blockquote className='mt-8'>
              <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
                <p>&ldquo;{blok.description}.&rdquo;</p>
              </div>
              <footer className='mt-8'>
                <div className='md:flex md:items-center md:justify-center'>
                  <div className='md:flex-shrink-0'>
                    <img
                      className='mx-auto h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                    <div className='text-base leading-6 font-medium text-gray-900'>
                      {blok.author}
                    </div>
                    <svg
                      className='hidden md:block mx-1 h-5 w-5 text-indigo-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M11 0h3L9 20H6l5-20z' />
                    </svg>
                    <div className='text-base leading-6 font-medium text-gray-500'>
                      {blok.author_role}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </SbEditable>
  )
}

export default Testimonials
