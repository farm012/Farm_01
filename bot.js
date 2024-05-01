import requests
import time

# Replace 'https://discord.com/api/webhooks/1235292044721782939/sJA4AKOgA9-Uze7FfvfLxsDQGos3eqfbPEOFuGGZKmT8KqL-lEjcnocvyUT1jhWJQElZ' with your actual Discord webhook URL
WEBHOOK_URL = 'YOUR_WEBHOOK_URL'

def send_message(message):
    """
    Function to send a message to the Discord webhook
    """
    data = {
        'content': message
    }
    response = requests.post(WEBHOOK_URL, json=data)
    if response.status_code == 204:
        print("Message sent successfully")
    else:
        print(f"Failed to send message. Status code: {response.status_code}")

def main():
    """
    Main function to send a message every hour
    """
    while True:
        # Replace 'Your message here' with your desired message
        send_message("Your message here")
        time.sleep(2)  # Send message every hour (3600 seconds)

if __name__ == "__main__":
    main()

