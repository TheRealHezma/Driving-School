import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { thunkCreateCookie } from '../../redux/cookies';

function CreateCookieButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize the navigate function
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState(''); // New state for image URL
    const [urlError, setUrlError] = useState(''); // State to track URL validation error
    const [imageFile, setImageFile] = useState(null);


    // Function to validate URL format using regex
    const isValidUrl = (url) => {
        try {
            new URL(url); // Using the URL constructor to validate
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = '';

        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);

            const res = await fetch('/api/cookies/upload-image', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (res.ok) {
                imageUrl = data.url;
            } else {
                alert("Image upload failed");
                return;
            }
        }

        const newCookie = {
            name,
            description,
            price: parseFloat(price),
            url: imageUrl
        };

        await dispatch(thunkCreateCookie(newCookie));
        navigate('/cookies');
    };

    const handleCancel = () => {
        // Navigate to the previous page or reset form
        navigate('/cookies');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    required
                />
            </div>

            <button
                type="submit"
                style={{ backgroundColor: 'lightblue', border: 'none', padding: '10px', margin: '5px' }}
                disabled={!url || urlError} // Disable if URL is invalid
            >
                Create Cookie
            </button>
            <button
                type="button"
                onClick={handleCancel}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px', margin: '5px' }}
            >
                Cancel
            </button>
        </form>
    );
}

export default CreateCookieButton;
