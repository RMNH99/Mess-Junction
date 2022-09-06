import { useState } from "react";
 
const Tp = () => {
     
    const [selectedImage, setSelectedImage] = useState();
 
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
     
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };
 
  return (
    <>
      <div className="container" >
        <h1> ReactJS Show Image Preview before Uploading </h1>
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                <button type="submit" className="btn btn-success" >Upload File</button>
            </form>
 
        {selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage}>
              Remove This Image
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};
 
export default Tp;