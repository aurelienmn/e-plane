from datetime import datetime
from config import ADSB_LIST_URL, API_LIST_URL, FLIGHTS_LIST_URL
from services import fetch_data


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
