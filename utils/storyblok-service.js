import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.devMode = true // Always loads draft
    this.token = 'h8TKgPUa1In519bvFoKQkAtt'
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory',
      },
    })

    this.query = {}
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  get(slug, params) {
    params = params || {}

    if (
      this.getQuery('_storyblok') ||
      this.devMode ||
      (typeof window !== 'undefined' && window.storyblok)
    ) {
      params.version = 'draft'
    }

    if (
      typeof window !== 'undefined' &&
      typeof window.StoryblokCacheVersion !== 'undefined'
    ) {
      params.cv = window.StoryblokCacheVersion
    }

    return this.client.get(slug, params)
  }

  initEditor(content, setContent, dataLink) {
    if (window.storyblok) {
      window.storyblok.init()

      window.storyblok.pingEditor(() => {
        if (window.storyblok.isInEditor()) {
          this.get(dataLink, null).then(e => setContent(e.data.story.content))
        }
      })
      // this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)
      window.storyblok.on('input', event => {
        if (event.story.content._uid === content._uid) {
          setContent(event.story.content)
        }
      })
    }
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query[param]
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance
