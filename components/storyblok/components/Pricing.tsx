import SbEditable from 'storyblok-react'

const Testimonials = ({ blok }: { blok: any }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='bg-gray-900'>
        <div className='pt-12 sm:pt-16 lg:pt-24'>
          <div className='max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto lg:max-w-none'>
              <p className='mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none'>
                {blok.title}
              </p>
              <p className='mt-2 text-xl leading-7 text-gray-300'>
                {blok.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
          <div className='relative'>
            <div className='absolute inset-0 h-3/4 bg-gray-900'></div>
            <div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='max-w-md mx-auto lg:max-w-5xl '>
                <div className='rounded-lg shadow-lg overflow-hidden'>
                  <div className='px-6 py-8 bg-white sm:p-10 sm:pb-6'>
                    <div></div>
                    <div className='mt-4 flex items-baseline text-6xl leading-none font-extrabold'>
                      ${blok.price}
                      <span className='ml-1 text-2xl leading-8 font-medium text-gray-500'>
                        /mo
                      </span>
                    </div>
                    <p className='mt-5 text-lg leading-7 text-gray-800'>
                      {blok.price_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  )
}

export default Testimonials
