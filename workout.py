import requests
import pandas
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import json
import webbrowser

homeUrl = "http://localhost:8000/homepage.html"
submitUrl = "http://localhost:8000/workout.html"

#options = Options()
#driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

#chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe %s"
#webbrowser.get(chrome_path).open(homeUrl)
try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:8000/homepage.html")
    def local_storage_has_data(driver):
        return driver.execute_script("return localStorage.length > 0;")
    WebDriverWait(driver, 30).until(
        local_storage_has_data
        #lambda d: d.execute_script("return localStorage.length > 0;")
    )

    # Get the data from localStorage
    data = driver.execute_script(
        "data = []; for (let i = 0; i < localStorage.length; i++){data.push(localStorage.getItem(localStorage.key(i)))}; return data"
        )
    print(driver.current_url)
    print(data)

    # Convert from JSON string to Python dict
    #workout = json.loads(data)
    

finally:
    driver.quit()
