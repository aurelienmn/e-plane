import socketio
import requests
import time

# Configuration
DUMP1090_URL = "http://localhost:8080/data.json"
SOCKET_SERVER_URL = "http://localhost:6569"
INTERVAL = 5  # Intervalle en secondes entre les envois

# Initialisation du client socket.io
sio = socketio.Client()

def connect_to_socket():
    try:
        sio.connect(SOCKET_SERVER_URL)
        print(f"Connecté au serveur {SOCKET_SERVER_URL}")
    except Exception as e:
        print(f"Erreur de connexion au serveur Socket.IO: {e}")

def fetch_adsb_data():
    try:
        response = requests.get(DUMP1090_URL)
        if response.status_code == 200:
            data = response.json()
            print(f"{len(data)} avions détectés")
            return data
        else:
            print(f"Erreur HTTP {response.status_code} en récupérant les données ADS-B")
            return []
    except Exception as e:
        print(f"Erreur lors de la récupération des données ADS-B : {e}")
        return []

def send_data_to_socket(data):
    try:
        sio.emit('adsbData', data)
        print("Données envoyées au serveur Socket.IO")
    except Exception as e:
        print(f"Erreur lors de l'envoi des données : {e}")

def main():
    connect_to_socket()
    while True:
        data = fetch_adsb_data()
        if data:
            send_data_to_socket(data)
        time.sleep(INTERVAL)

if __name__ == "__main__":
    main()
