import requests
import pandas
from selenium import webdriver
from selenium.webdriver.common.by import By #used to find HTMl element
import json
import time
import webbrowser

homeUrl = "http://localhost:8000/homepage.html"
submitUrl = "http://localhost:8000.workout.html"

chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe %s"
webbrowser.get(chrome_path).open(homeUrl)



response = requests.get(submitUrl)

driver = webdriver.Chrome()
driver.get(submitUrl)


# Get the data from localStorage
data = driver.execute_script(
    "for (let i = 0; i < localStorage.length; i++){console.log(localStorage.getItem(localStorage.key(i)))}"
    )

# Convert from JSON string to Python dict
workout = json.loads(data)
print(workout)

driver.quit()
