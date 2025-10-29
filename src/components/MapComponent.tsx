"use client";
import React from "react";

interface MapProps {
    lat: number;
    lng: number;
    zoom?: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng, zoom = 14 }) => {
    // Google Maps URL with red marker at the given coordinates
    const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&t=&output=embed&hl=en&markers=color:red%7C${lat},${lng}`;

    return (
        <div className="aspect-video w-full rounded-md overflow-hidden border">
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapComponent;
