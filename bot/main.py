from datetime import datetime
import requests

# config
ADSB_LIST_URL = "http://localhost:5252/adsb_list"
API_LIST_URL = "http://localhost:5252/external_api"
FLIGHTS_LIST_URL = "http://localhost:5252/flights_at_update"

def fetch_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data if data else False
    except requests.RequestException as e:
        print(f"Erreur lors de la récupération {url}: {e}")
        return False

def main():
    print("Starting script...", datetime.now())

    adsb_reciever = fetch_data(ADSB_LIST_URL)
    api_configs = fetch_data(API_LIST_URL)
    flights_list = fetch_data(FLIGHTS_LIST_URL)

    for service, message in [
        (adsb_reciever, "Impossible de récupérer la liste des récepteurs."),
        (api_configs, "Impossible de récupérer la configuration des APIs."),
        (flights_list, "Impossible de récupérer la liste des vols à mettre à jour.")
    ]:
        if service is False:
            print(message)
    
    return
    
if __name__ == "__main__":
    main()
