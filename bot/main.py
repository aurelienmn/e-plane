from datetime import datetime
import requests

# config
ADSB_LIST_URL = "http://localhost:3000/adsb_list"
API_LIST_URL = "http://localhost:3000/external_api"
FLIGHTS_LIST_URL = "http://localhost:3000/flights_at_update"

def fetch_data(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"Erreur lors de la récupération {url}: {e}")
        return None

def process_flight(flight, api_config):
    flight_id = flight["id"]
    flight_iata = flight["iata"]

    base_url = api_config["base_url"]  #  Maintenant, c'est un dictionnaire
    endpoints = api_config.get("mappings", [])  #  Correspond à "mappings"

    for endpoint in endpoints:
        api_path = endpoint["api_path"]  # Correction pour récupérer le chemin API



def main():
    print("Starting script...", datetime.now())

    adsb_reciever = fetch_data
    api_configs = fetch_data(API_LIST_URL)
    flights_list = fetch_data(FLIGHTS_LIST_URL)

    if not api_configs:
        print("Impossible de récupérer la configuration des APIs.")
        return
    if not flights_list:
        print("Impossible de récupérer la liste des vols à mettre à jour.")
        return
       
    # 🔥 Boucler sur chaque API pour traiter les vols
    print("Il y a ", len(api_configs), "disponible")
    for api_config in api_configs:
        print("name:", api_config['name_api'], "url:", api_config['base_url'])
        for flight in flights_list:
            process_flight(flight, api_config)


if __name__ == "__main__":
    main()
