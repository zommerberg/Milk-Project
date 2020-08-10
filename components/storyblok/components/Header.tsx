import SbEditable from 'storyblok-react'

const Header = ({ blok }: { blok: any }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='relative flex justify-center'>
        <div
          className='w-full h-56 bg-center bg-no-repeat bg-cover'
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${blok.image.filename})`,
          }}
        ></div>

        <div
          className='absolute z-20 w-full px-2 text-center md:px-3'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <h1
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            className='self-center mb-2 text-4xl leading-none text-white md:font-bold md:text-4.5size'
          >
            {blok.title}
          </h1>

          <p
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            className='self-center text-xl leading-tight text-white md:text-2xl'
          >
            {blok.subtitle}
          </p>
        </div>
      </div>
    </SbEditable>
  )
}

export default Header
