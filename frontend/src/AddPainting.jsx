import { useState, useEffect } from 'react';
import axios from 'axios';

const AddPainting = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [userId] = useState('123');
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSave = async () => {
    if (!title || !year || !description || !selectedFile) {
      alert('Please fill all fields and select an image');
      return;
    }

    if (year < 1500 || year > new Date().getFullYear()) {
      alert('Enter a valid year between 1500 and the current year');
      return;
    }

    setUploading(true);

    const data = new FormData();
    data.append('file', selectedFile);
    data.append('upload_preset', 'painting');

    try {
      const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/ddgugxfm4/upload', data);
      const imageUrl = uploadRes.data.secure_url;

      const painting = {
        title,
        year,
        description,
        imageUrl,
        userId,
      };

      await axios.post('http://localhost:8080/painting', painting);

      alert('Painting saved successfully!');
      setTitle('');
      setYear('');
      setDescription('');
      setSelectedFile(null);
      setImagePreview(null);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to save painting');
    } finally {
      setUploading(false);
    }
  };

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage:
      "url('https://cdn.dribbble.com/userupload/3898665/file/original-ecee4807d154f293a34a7e791e4c0ace.jpg?resize=1504x1128&vertical=center')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 2s ease',
    opacity: fadeIn ? 1 : 0,
    position: 'relative',
    padding: '20px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(200, 196, 196, 0.85)',
    zIndex: 0,
  };

  const formStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>

      <div style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Painting</h2>

        <div style={{ marginBottom: '15px' }}>
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Year</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Description</label>
          <textarea
            rows="3"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Select Painting</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {imagePreview && (
          <div style={{ marginBottom: '15px' }}>
            <label>Image Preview</label>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        )}

        <button
          className="btn btn-primary w-100"
          onClick={handleSave}
          disabled={uploading}
        >
          {uploading ? 'Saving...' : 'Show your painting to the world'}
        </button>
      </div>
    </div>
  );
};

export default AddPainting;
