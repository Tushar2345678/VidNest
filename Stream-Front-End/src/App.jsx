import React from 'react'
import { useState } from 'react'
import './App.css'
import VideoUpload from './components/VideoUpload'
import { Toaster } from 'react-hot-toast'
import VideoPlayer from './components/VideoPlayer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [fieldValue,setFieldvalue]=useState(null);
  const [videoId, setVideoId] = useState(
    "54a77840-5636-45fb-a823-ef0a09a34493",
  );
  function playVideo(videoId) {
    setVideoId(videoId);
  }

  function playVideo(videoId){
    setVideoId(videoId)
  }
  return (  
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        {/* <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100 flex gap-1 justify-center">
          <img src={VidNestLogo} className='w-10 '/>
          VidNest
        </h1> */}
        <div className='flex flex-col w-full px-0'>
        <Navbar>
        </Navbar>
        </div>

        <div className="flex mt-14 w-full space-x-5  justify-between">
          <div className="w-full">
            <h1 className="text-white text-center mt-2">Playing Video</h1>

            {/* <video
              style={{
                width: "100%",
              }}
              // src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}
              src="http://localhost:8080/api/v1/videos/f6e21144-c462-459b-af96-1cde95621710/master.m3u8"
              controls
            ></video> */}

            <div>
              <VideoPlayer
                src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`}
              ></VideoPlayer>
            </div>

            {/* <video
              id="my-video"
              class="video-js"
              controls
              preload="auto"
              width="640"
              height="264"
              data-setup="{}"
            >
              <source
                src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}
                type="video/mp4"
              />

              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                  href="https://videojs.com/html5-video-support/"
                  target="_blank"
                >
                  supports HTML5 video
                </a>
              </p>
            </video>  */}
          </div>

          <div className="w-full">
            <VideoUpload />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;