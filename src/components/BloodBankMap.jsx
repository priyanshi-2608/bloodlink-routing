
import { useState } from "react";

import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps";

const bloodBanks = [
    {
        id: 1,
        name: "Blood Bank - Ahmedabad",
        city: "Ahmedabad",
        position: { lat: 23.0225, lng: 72.5714 },
        address: "Ahmedabad, Gujarat",
    },
    {
        id: 2,
        name: "Blood Bank - Surat",
        city: "Surat",
        position: { lat: 21.1702, lng: 72.8311 },
        address: "Surat, Gujarat",
    },
    {
        id: 3,
        name: "Blood Bank - Vadodara",
        city: "Vadodara",
        position: { lat: 22.3072, lng: 73.1812 },
        address: "Vadodara, Gujarat",
    },
];

function BloodBankMap() {
    const [selectedBank, setSelectedBank] = useState(null);

    return (
        <div className="card border-0 shadow-sm mt-4">
            <div className="card-body p-4">

                <h4 className="fw-bold mb-3">
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    Blood Bank Locations
                </h4>

                <p className="text-muted">
                    Click on a map marker to view location details.
                </p>

                <div
                    style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >
                    <APIProvider
                        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    >
                        <Map
                            defaultCenter={{ lat: 22.5, lng: 72.8 }}
                            defaultZoom={7}
                            mapId="DEMO_MAP_ID"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {bloodBanks.map((bank) => (
                                <AdvancedMarker
                                    key={bank.id}
                                    position={bank.position}
                                    title={`View ${bank.city} details`}
                                    onClick={() => setSelectedBank(bank)}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#dc3545",
                                            color: "#ffffff",
                                            padding: "9px 12px",
                                            borderRadius: "50%",
                                            border: "2px solid white",
                                            cursor: "pointer",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                </AdvancedMarker>
                            ))}

                            {selectedBank && (
                                <InfoWindow
                                    position={selectedBank.position}
                                    onCloseClick={() => setSelectedBank(null)}
                                >
                                    <div style={{ minWidth: "170px" }}>
                                        <h6 className="fw-bold mb-2">
                                            {selectedBank.name}
                                        </h6>

                                        <p className="mb-1">
                                            <strong>City:</strong>{" "}
                                            {selectedBank.city}
                                        </p>

                                        <p className="mb-0">
                                            <strong>Address:</strong>{" "}
                                            {selectedBank.address}
                                        </p>
                                    </div>
                                </InfoWindow>
                            )}
                        </Map>
                    </APIProvider>
                </div>

                <small className="text-muted d-block mt-3">
                    Map powered by Google Maps.
                </small>

            </div>
        </div>
    );
}

export default BloodBankMap;
