import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import styles from './Homes.module.css';


const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

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

    const handleImageClick = (property) => {
        setSelectedProperty(property);
        setShowModal(true);  
    };

    const closeModal = () => {
        setShowModal(false);  
        setSelectedProperty(null);  
    };

    const NextArrow = (props) => {
      const { onClick } = props;
      return (
          <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
            {'>'}
          </div>
      );
  };

  const PrevArrow = (props) => {
      const { onClick } = props;
      return (
          <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
              {'<'}
          </div>
      );
  };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <h1>Homes For You</h1>
            <p>Based on Your View History</p>
            {loading && <p>Loading...</p>}

            <Slider {...settings} className={styles.propertySlider}>
                {properties.map((property, index) => (
                    <div key={index} className={styles.propertyCard}>
                        {property.image && (
                            <img
                                src={`https://realestate-production-3d17.up.railway.app${property.image}`}
                                alt={property.title}
                                className={styles.propertyImage}
                                onClick={() => handleImageClick(property)} 
                            />
                        )}
                        {property.title && <h2 className={styles.propertyTitle}>{property.title}</h2>}
                        {property.location && (
                            <p className={styles.propertyLocation}>
                                <i className="fas fa-map-marker-alt"></i> {property.location}
                            </p>
                        )}
                    </div>
                ))}
            </Slider>

            
            {showModal && selectedProperty && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                        
                        {selectedProperty.size && selectedProperty.sizeUnit && (
                            <p><strong>Size:</strong> {selectedProperty.size} {selectedProperty.sizeUnit}</p>
                        )}
                        {selectedProperty.configuration && <p><strong>Configuration:</strong> {selectedProperty.configuration}</p>}
                        {selectedProperty.flats_per_floor && <p><strong>Flats per Floor:</strong> {selectedProperty.flats_per_floor}</p>}
                        {selectedProperty.facing && <p><strong>Facing:</strong> {selectedProperty.facing}</p>}
                        {selectedProperty.road_facing && <p><strong>Road Facing:</strong> {selectedProperty.road_facing}</p>}
                        {selectedProperty.amenities_cost && <p><strong>Amenities Cost:</strong> {selectedProperty.amenities_cost}</p>}
                        {selectedProperty.price_per_sqft && <p><strong>Price per Sq Ft:</strong> {selectedProperty.price_per_sqft}</p>}
                        {selectedProperty.handover_date && <p><strong>Handover Date:</strong> {selectedProperty.handover_date}</p>}
                        {selectedProperty.structure && <p><strong>Structure:</strong> {selectedProperty.structure}</p>}
                        {selectedProperty.developer && <p><strong>Developer:</strong> {selectedProperty.developer}</p>}
                        {selectedProperty.description && <p><strong>Description:</strong> {selectedProperty.description}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyList;
