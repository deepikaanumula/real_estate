
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyManagement = ({ token }) => {
    const [properties, setProperties] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '', image: '' });

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/properties', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/properties', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProperties(); 
            setFormData({ title: '', description: '', image: '' }); 
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/properties/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProperties(); 
        } catch (error) {
            console.error('Error deleting property:', error);
        }
    };

    return (
        <div>
            <h2>Property Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <button type="submit">Add Property</button>
            </form>
            <ul>
                {properties.map((property) => (
                    <li key={property._id}>
                        {property.title}
                        <button onClick={() => handleDelete(property._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyManagement;
