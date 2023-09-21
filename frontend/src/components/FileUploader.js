import Resizer from "react-image-file-resizer";

const FileUploader = ({ formData, setFormData }) => {
    const handleInput = (e) => {
        Resizer.imageFileResizer(
            e.target.files[0],
            300, // Width
            300, // Height
            "JPEG", // Format
            100, // Quality
            0, // Rotation (0 means no rotation)
            (uri) => {
                const newImages = [...formData.images, uri];
                setFormData((prev) => ({ ...prev, images: newImages }));
            },
            "base64"
        );
        e.target.value = null;
    };

    // const handleInput = (e) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         const newImages = [...formData.images, reader.result];
    //         setFormData((prev) => ({ ...prev, images: newImages }));
    //     };
    //     reader.onerror = (error) => {
    //         console.log(error);
    //     };
    // };

    const handleDelete = (image) => {
        const updatedImages = formData.images.filter((img) => img !== image);
        setFormData((prev) => ({ ...prev, images: updatedImages }));
    };

    return (
        <div className="uploader-images">
            <p className="uploader-title">Uploaded images:</p>
            <div className="uploader-files">
                {formData?.images &&
                    formData.images.map((image, index) => (
                        <div
                            className="upload-img"
                            onClick={() => {
                                handleDelete(image);
                            }}
                        >
                            <img src={image} alt="hero" key={index} />
                        </div>
                    ))}
                <label htmlFor="img" className="uploader-lable">
                    +
                </label>
                <input
                    id="img"
                    type="file"
                    accept="image/*"
                    onChange={handleInput}
                />
            </div>
        </div>
    );
};

export default FileUploader;
