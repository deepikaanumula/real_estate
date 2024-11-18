import React, { useEffect, useState } from 'react';
import styles from './PropertyManagement.module.css';

const PropertyManagement = () => {
    const [properties, setProperties] = useState([]);
    const [property, setProperty] = useState({
        title: '',
        location: '',
        size: '',
        sizeUnit: 'sqft',
        configuration: '',
        flats_per_floor: '',
        facing: '',
        road_facing: '',
        amenities_cost: '',
        price_per_sqft: '',
        handover_date: '',
        structure: '',
        developer: '',
        description: '',
        image: null
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('authToken');

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://realestate-production-3d17.up.railway.app/api/properties', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setProperties(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching properties:', error);
            setMessage('Failed to fetch properties. Please try again later.');
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProperty(prev => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        for (let key in property) {
            formData.append(key, property[key]);
        }

        const url = editMode
            ? `https://realestate-production-3d17.up.railway.app/api/properties/${editId}`
            : 'https://realestate-production-3d17.up.railway.app/api/properties';
        const method = editMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            if (response.ok) {
                setMessage(editMode ? 'Property updated successfully!' : 'Property added successfully!');
                setProperty({
                    title: '',
                    location: '',
                    size: '',
                    sizeUnit: 'sqft',
                    configuration: '',
                    flats_per_floor: '',
                    facing: '',
                    road_facing: '',
                    amenities_cost: '',
                    price_per_sqft: '',
                    handover_date: '',
                    structure: '',
                    developer: '',
                    description: '',
                    image: null
                });
                setEditMode(false);
                setEditId(null);
                fetchProperties();
            } else {
                setMessage('Failed to save property.');
            }
        } catch (error) {
            console.error('Error saving property:', error);
            setMessage('Error connecting to server.');
        }
        setLoading(false);
    };

    const handleEdit = (property) => {
        setEditMode(true);
        setEditId(property._id);
        setProperty({
            title: property.title,
            location: property.location,
            size: property.size || '',
            sizeUnit: property.sizeUnit || 'sqft',
            configuration: property.configuration || '',
            flats_per_floor: property.flats_per_floor || '',
            facing: property.facing || '',
            road_facing: property.road_facing || '',
            amenities_cost: property.amenities_cost || '',
            price_per_sqft: property.price_per_sqft || '',
            handover_date: property.handover_date || '',
            structure: property.structure || '',
            developer: property.developer || '',
            description: property.description || '',
            image: null
        });
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditId(null);
        setProperty({
            title: '',
            location: '',
            size: '',
            sizeUnit: 'sqft',
            configuration: '',
            flats_per_floor: '',
            facing: '',
            road_facing: '',
            amenities_cost: '',
            price_per_sqft: '',
            handover_date: '',
            structure: '',
            developer: '',
            description: '',
            image: null
        });
        setMessage('');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this property?')) return;

        setLoading(true);

        try {
            const response = await fetch(`https://realestate-production-3d17.up.railway.app/api/properties/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setMessage('Property deleted successfully!');
                setProperties(properties.filter(property => property._id !== id)); 
            } else {
                const data = await response.json();
                setMessage(data.message || 'Failed to delete property.');
            }
        } catch (error) {
            console.error('Error deleting property:', error);
            setMessage('Error connecting to server.');
        }

        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <h1>Property Management</h1>
            {message && <p className={styles.message}>{message}</p>}
            {loading && <p className={styles.loading}>Loading...</p>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>{editMode ? 'Edit Property' : 'Add New Property'}</h2>
                <input type="text" name="title" placeholder="Title" value={property.title} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={property.location} onChange={handleChange} required />
                <div className={styles.sizeContainer}>
                    <input
                        type="number"
                        name="size"
                        placeholder="Size"
                        value={property.size}
                        onChange={handleChange}
                        className={styles.sizeInput}
                    />
                    <select
                        name="sizeUnit"
                        value={property.sizeUnit}
                        onChange={handleChange}
                        className={styles.sizeUnitDropdown}
                    >
                        <option value="sqft">sqft</option>
                        <option value="acre">acre</option>
                    </select>
                </div>
                <input type="text" name="configuration" placeholder="Configuration" value={property.configuration} onChange={handleChange} />
                <input type="number" name="flats_per_floor" placeholder="Flats per Floor" value={property.flats_per_floor} onChange={handleChange} />
                <input type="text" name="facing" placeholder="Facing" value={property.facing} onChange={handleChange} />
                <input type="text" name="road_facing" placeholder="Road Facing" value={property.road_facing} onChange={handleChange} />
                <input type="number" name="amenities_cost" placeholder="Amenities Cost" value={property.amenities_cost} onChange={handleChange} />
                <input type="number" name="price_per_sqft" placeholder="Price per Sqft" value={property.price_per_sqft} onChange={handleChange} />
                <input type="text" name="handover_date" placeholder="Handover Date" value={property.handover_date} onChange={handleChange} />
                <input type="text" name="structure" placeholder="Structure" value={property.structure} onChange={handleChange} />
                <input type="text" name="developer" placeholder="Developer" value={property.developer} onChange={handleChange} />
                <textarea name="description" placeholder="Description" value={property.description} onChange={handleChange}></textarea>
                <input type="file" name="image" accept="image/*" onChange={handleChange} />
                <button type="submit" disabled={loading}>{editMode ? 'Update Property' : 'Add Property'}</button>

                {editMode && (
                    <button type="button" onClick={handleCancel} className={styles.cancelButton}>
                        Cancel
                    </button>
                )}
            </form>

            <div className={styles.propertyList}>
                <h2 className={styles.heading}>Existing Properties</h2>
                {properties.map((property, index) => (
                    <div key={index} className={styles.propertyCard}>
                        {property.title && <h3 className={styles.propertyTitle}>{property.title}</h3>}
                        {property.location && <p>Location: {property.location}</p>}
                        {property.size && property.sizeUnit && (
                            <p>Size: {property.size} {property.sizeUnit}</p>
                        )}
                        {property.configuration && <p>Configuration: {property.configuration}</p>}
                        {property.flats_per_floor && <p>Flats per Floor: {property.flats_per_floor}</p>}
                        {property.facing && <p>Facing: {property.facing}</p>}
                        {property.road_facing && <p>Road Facing: {property.road_facing}</p>}
                        {property.amenities_cost && <p>Amenities Cost: {property.amenities_cost}</p>}
                        {property.price_per_sqft && <p>Price per Sq Ft: {property.price_per_sqft}</p>}
                        {property.handover_date && <p>Handover Date: {property.handover_date}</p>}
                        {property.structure && <p>Structure: {property.structure}</p>}
                        {property.developer && <p>Developer: {property.developer}</p>}
                        {property.description && <p>Description: {property.description}</p>}

                        <div className={styles.cardButtons}>
                            <button onClick={() => handleEdit(property)} className={styles.editButton}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(property._id)} className={styles.deleteButton}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyManagement;
