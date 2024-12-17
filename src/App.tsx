import 'react-toastify/dist/ReactToastify.css';
import 'rc-pagination/assets/index.css';
import './App.css';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <>
      <ImageGallery images={[
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-2.jpg',
      ]} />
    </>
  )
}

export default App
