import React, { useState, useEffect } from 'react'

import Component from '../components/storyblok/core/index'
import SbEditable from 'storyblok-react'

import StoryblokService from '../utils/storyblok-service'

export default function IndexPage({ body }) {
  let [content, setContent] = useState(body.data.story.content)

  useEffect(() => {
    //initially we pass the state to the storyblok editor. With this we are able to change the state from storyBlok and see the changes as we write them.
    //to test this you can remove this part and you will see that when you udpate the text in storyblok it will not be udpated.
    StoryblokService.initEditor(content, setContent, 'cdn/stories/home')
  }, [])

  return (
    <SbEditable content={content.body}>
      <main>
        {content.body.map(blok => (
          <Component blok={blok} key={blok._uid} />
        ))}
      </main>
    </SbEditable>
  )
}

//getStaticProps runs on build in order to prerender the pages.(in production)
export async function getStaticProps() {
  return {
    props: {
      body: await StoryblokService.get('cdn/stories/home', null),
    }, // will be passed to the page component as props
  }
}
