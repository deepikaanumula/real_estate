import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import styles from './RecentProperties.module.css';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://realestate-production-3d17.up.railway.app/api/properties');
            const data = await response.json();
            setProperties(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
        setLoading(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  
        slidesToScroll: 1,
        arrows: false,  
        autoplay: true,  
        autoplaySpeed: 3000,  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.head}>Recent Properties for Sale</h1>
           
            {loading && <p>Loading...</p>}

            <Slider {...settings} className={styles.propertySlider}>
                {properties.map((property, index) => (
                    <div key={index} className={styles.propertyCard}>
                        {property.image && (
                            <img
                                src={`https://realestate-production-3d17.up.railway.app${property.image}`}
                                alt={property.title}
                                className={styles.propertyImage}
                            />
                        )}
                        {property.title && <h2 className={styles.propertyTitle}>{property.title}</h2>}
                        {property.location && (
                            <p className={styles.propertyLocation}>
                                <i className="fas fa-map-marker-alt"></i> {property.location}
                            </p>
                        )}
                        {property.price_per_sqft && (
                            <p className={styles.propertyPrice}>
                                <strong>Price per Sq Ft:</strong> {property.price_per_sqft}
                            </p>
                        )}
                        {property.size && property.sizeUnit && (
                            <p className={styles.propertySize}>
                                <strong>Size:</strong> {property.size} {property.sizeUnit}
                            </p>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PropertyList;
