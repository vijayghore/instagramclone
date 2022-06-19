import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Stories from './components/Stories';

function App() {
  return (

    <>
      <Navbar />
      {/* <Stories /> */}

      <Post address="https://images.hindustantimes.com/img/2021/09/15/1600x900/Apple_launch_meme_fest_1631685010141_1631685013898.jpg" />
      <Post address="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hpR5DranfYmZtsfPfGzXmWpkqmfcRRrNng&usqp=CAU" />
      <Post address="https://cdn.vox-cdn.com/thumbor/-5QeCxdkh-7dEypKEonW8KEIvX0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13207789/hey.jpg" />
      <Post address="https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s1100-c50.jpg"/>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  ); 
}

export default App;
