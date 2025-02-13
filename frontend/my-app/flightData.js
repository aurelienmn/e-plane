const flightsData = [
    { flightNumber: "AF123", departure: "Paris (CDG)", arrival: "New York (JFK)", time: "14:30", status: "À l'heure" },
    { flightNumber: "LH456", departure: "Berlin (BER)", arrival: "Tokyo (NRT)", time: "16:00", status: "Retardé" },
    { flightNumber: "BA789", departure: "Londres (LHR)", arrival: "Dubaï (DXB)", time: "18:45", status: "Annulé" },
    { flightNumber: "EK202", departure: "Dubaï (DXB)", arrival: "Sydney (SYD)", time: "21:10", status: "À l'heure" }
];

// Fonction pour insérer les vols dans le tableau
function loadFlights() {
    const tableBody = document.querySelector("#flightsTable tbody");

    flightsData.forEach(flight => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${flight.departure}</td>
            <td>${flight.arrival}</td>
            <td>${flight.time}</td>
            <td>${flight.status}</td>
        `;

        // Appliquer une couleur différente en fonction du statut du vol
        if (flight.status === "Retardé") {
            row.style.color = "orange";
        } else if (flight.status === "Annulé") {
            row.style.color = "red";
        } else {
            row.style.color = "green";
        }

        tableBody.appendChild(row);
    });
}

// Charger les vols après chargement de la page
document.addEventListener("DOMContentLoaded", loadFlights);