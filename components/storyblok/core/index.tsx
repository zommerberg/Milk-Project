import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import Title_And_Description from '../components/Title_And_Description'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
//here we define all of the storybloc components. They represent a real component we have in the code
const Components = {
  header: Header,
  testimonial: Testimonial,
  title_and_description: Title_And_Description,
  hero: Hero,
  pricing: Pricing,
}

const Component = ({ blok }: { blok: any }) => {
  //if the component we created in storyblok is created , then try to find this component in the code
  if (
    blok &&
    blok.component &&
    typeof Components[blok.component] !== 'undefined'
  ) {
    //we pass the data of the component to the component this way
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  //if there is no component that matches the blok name show a message that the component is not created (or show nothing in the future)
  return <div>The component has not been created yet.</div>
}

export default Component
