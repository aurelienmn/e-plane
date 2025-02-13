import requests

def fetch_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data if data else False
    except requests.RequestException as e:
        print(f"Erreur lors de la récupération {url}: {e}")
        return False