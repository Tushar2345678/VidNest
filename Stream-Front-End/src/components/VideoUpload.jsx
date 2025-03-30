import React, { use, useState } from "react";
import videoLogo from "../assets/video-posting.png";
import {Button, 
        Card, 
        Label, 
        Textarea, 
        TextInput,
        Progress, 
        Alert} from "flowbite-react";
import axios from 'axios';
import toast from "react-hot-toast";
const VideoUpload= () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [meta,setMeta] = useState({
    title: "",
    description: "",
  })
  const [progress,setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    console.log(event.target.files[0]); 
    setSelectedFile(event.target.files[0]);
  }

  function formFieldChange(event) {
    setMeta({
      ...meta,
      [event.target.name]: event.target.value,
    });
  }

  function handleForm(formEvent)  {
    formEvent.preventDefault();
    if(!selectedFile) {

      alert("Please select a file");
      return;
    }

    //submit the file to server
    saveVideoToServer(selectedFile, meta);
  }

  function resetForm(){
    setMeta({
      title: "",
      description: "",
    })
    setSelectedFile(null);
    setUploading(false);
  }
  
  //submit file to server
  async function saveVideoToServer(video, VideoMetaData) {
    setUploading(true);

    //api call

    try {

      let formData = new FormData();
      formData.append("title", VideoMetaData.title);
      formData.append("description", VideoMetaData.description);
      formData.append("file", selectedFile);

      let response =  await axios.post('http://localhost:8080/api/v1/videos', 
        formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
        );
          console.log(progress);
          setProgress(progress);
        },
      });
      
      console.log(response);
      setProgress(0);

      setMessage("File uploaded"+ response.data.videoId);
      setUploading(false);
      toast.success("File uploaded successfully !!");
      resetForm();

    } catch (error) {
      console.log(error);
      setMessage("Error in uploading file");
      setUploading(false);
      toast.error("File not uploaded !!");
    }
  }


    return <div className='text-white py-7'>
   <Card className='flex flex-col items-center justify-center'>
    <h1 className="  text-gray-700 dark:text-gray-100 flex gap-1 justify-center"  >
    Upload Videos
    </h1>
    <div>
    <form 
      noValidate
      onSubmit={handleForm}
      className="flex flex-col space-y-5">

    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Video Title" />
      </div>
      <TextInput
       value={meta.title}
       onChange={formFieldChange} 
       name="title"
       placeholder="Enter title" />
    </div>

    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Video Description" />
      </div>
      <Textarea 
      value={meta.description}
      onChange={formFieldChange}
      name="description"
      id="comment" 
      placeholder="write video description..." 
      required rows={4} />
    </div>
    
    
    <div className='flex items-center space-x-5 justify-center'>
    <div className="shrink-0">
      <img className="h-16 w-16 object-cover " src={videoLogo} alt="Current profile photo" />
    </div>
    <label className="block">
      <span className="sr-only">Choose Video</span>
      <input
        name="file"
        onChange={handleFileChange}
        type="file" 
        className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
    </label>
    </div>

    <div className="">
     {uploading && (
      <Progress
        color="green"
        progress={progress} 
        textLabel="Uploading" 
        size="lg" 
        labelProgress 
        labelText />
      )}
    </div>
      
    <div className="">
    {message && (
      <Alert color={"success"}
      rounded 
      withBorderAccent 
      onDismiss={() => {}} 
      >
      <span className="font-medium">Success alert! </span> 
      {message}
      </Alert>
    )}
    </div>

    <div className='flex justify-center'>
        <Button disabled={uploading} type="submit">
          Submit
        </Button>
    </div>
  </form>
    </div>
    
   </Card>
  </div>
    
}

export default VideoUpload;