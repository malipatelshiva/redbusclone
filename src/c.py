import requests
import json

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-IN,en;q=0.9',
    'Connection': 'keep-alive',
    'Origin': 'https://www.1acre.in',
    'Referer': 'https://www.1acre.in/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
}

response = requests.get('https://prod-be.1acre.in/location/districts/', headers=headers)

# Check if the request was successful
if response.status_code == 200:
    # Parse the response as JSON
    data = response.json()

    # Write the JSON data to a file
    with open('response.json', 'w') as file:
        file.write(json.dumps(data))

    print("JSON response has been written to 'response.json'")
else:
    print("Failed to fetch data:", response.text)

# import requests
# import json

# headers = {
#     'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
#     'accept': 'application/json',
#     'Referer': 'https://www.ajio.com/?gad_source=1&gclid=CjwKCAjwuJ2xBhA3EiwAMVjkVNf3o50AfPsMSciH5ytA3Akq0D_haUiwZLfj8h9EalaPDX2XsgNwOxoCRFUQAvD_BwE',
#     'sec-ch-ua-mobile': '?0',
#     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
#     'sec-ch-ua-platform': '"Linux"',
# }

# params = {
#     'catstr': '',
#     'city': 'HYDERABAD',
#     'state': 'TELANGANA',
#     'zone': 'South',
#     'pincodeGroup': '',
#     'customerType': '',
#     'pageType': '',
#     'experiments': 'CMSABExp5',
#     'jioAdsEnabled': 'true',
# }

# response = requests.get('https://www.ajio.com/api/banner/getBanners', params=params, headers=headers)

# # Check if the request was successful
# if response.status_code == 200:
#     # Parse response as JSON
#     json_data = response.json()
    
#     # Save JSON data to a file
#     with open('ajio.json', 'w') as file:
#         json.dump(json_data, file)
# else:
#     print("Failed to fetch data:", response.status_code)
