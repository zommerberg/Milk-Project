import SbEditable from 'storyblok-react'

const Header = ({ blok }: { blok: any }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className='flex flex-col items-center py-12 max-w-3xl m-auto'>
        <h1 className='text-3xl'>{blok.title}</h1>
        <p className='text-xl text-center'>{blok.description}</p>
      </div>
    </SbEditable>
  )
}

export default Header
