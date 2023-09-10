import ContentLoader from 'react-content-loader'
import './customstyles.css'

const ContentLoaderItems = () => {
  return (
    <section className='custom-cale'>
   <ContentLoader 
    speed={2}
    width={600}
    height={600}
    viewBox="0 0 600 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-18" y="4" rx="0" ry="0" width="131" height="115" /> 
    <rect x="119" y="3" rx="0" ry="0" width="131" height="115" /> 
    <rect x="352" y="3" rx="0" ry="0" width="131" height="115" /> 
    <rect x="489" y="2" rx="0" ry="0" width="131" height="115" /> 
    <rect x="-18" y="132" rx="0" ry="0" width="131" height="115" /> 
    <rect x="119" y="131" rx="0" ry="0" width="131" height="115" /> 
    <rect x="355" y="132" rx="0" ry="0" width="131" height="115" /> 
    <rect x="492" y="131" rx="0" ry="0" width="131" height="115" />
  </ContentLoader>
    </section>


  )
}

export default ContentLoaderItems