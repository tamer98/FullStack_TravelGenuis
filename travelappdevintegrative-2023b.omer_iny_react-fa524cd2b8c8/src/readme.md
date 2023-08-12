Travel Genius

Travel Genius is a travel budget planning application that helps users plan their trips by providing information on flights, hotels, and car rentals.

Features

Search for flights based on source and destination.
View detailed information about flights including pricing in USD.
Search for hotels in the chosen destination.
Add the selected hotel to a budget planner with pricing displayed in USD.


Installation

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/<your-username>/travel-genius.git
    ```
2. Navigate to the project directory:
    ```
    cd travel-genius
    ```
3. Install the dependencies (this includes `js-cookies` and `@material-ui/core`):
    ```
    npm install --legacy-peer-deps
    ```
4. make sure that the spring aplication is up and running

5. Start the development server:
    ```
    npm start
    ```


Usage

After running the spring application, you can search for flights, view hotel details, and add your preferred hotel to the budget planner.

known bugs/features:
the date slector chooses the date before the date you choose
when login if the username doesnt match it will login anyway this is because of the specs of the login in the usercontroller