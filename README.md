### `Full Stack team project dealing with travel super app, working in sprints`
- Front End Development - A web application is developed using React.js, following architecture that was designed before development began and divided into work phases. The system is implemented using the React.js library for building user interfaces.

- Back End Developer - The servers were developed using Spring Boot, and communication between the servers is done through REST APIs that implement CRUD operations. The servers use Spring Data MongoDB to interact with MongoDB databases, and Spring Data MongoDB provides object modeling for the data stored in the databases.
<br />



<img width="1139" alt="Screenshot 2023-08-13 at 1 56 53" src="https://github.com/tamer98/FullStack_TravelGenuis/assets/72464761/ecc8bd67-04c3-4b66-9d40-3e2e4900b1b1"><br />




## `Description `

The purpose of this software project is to develop a super app for travel that provides users with a comprehensive platform for planning and managing all aspects of their travel experience and budget. The app aims to simplify the travel planning process by integrating various services and information into a single, user-friendly platform.<br />



## `How It Works` 


https://github.com/tamer98/FullStack_TravelGenuis/assets/72464761/8879f6d1-07da-4f59-aba7-e5369809adb7 

## `Project Requirements Document` 

1.1 Purpose of System:

- The purpose of the super app for travel is to provide users with a one-stop-shop for all their travel needs. The app will enable users to search for and book flights, hotels, and other travel services, as well as provide them with travel information and recommendations. The ultimate goal of the app is to make travel planning easier, more convenient, and more enjoyable for users.

   1.2 Scope of System:

The super app for travel will include the following features and services:
- Flight booking: This mini-app would allow users to search for and book flights, utilizing
the Booking and Destination objects.
- Hotel booking: This mini-app would allow users to search for and book hotels, utilizing
the Booking and Destination objects.
- Budget planner: This mini-app would help users plan and manage their travel budget,
utilizing the Booking and Payment objects.

2. Actors and Goals
- Travelers: The primary actor of the system, travelers will use the app to search and book flights, hotels and manage their budget.
- Travel service providers: These actors will provide the travel services that are available on the app, such as airlines, hotels. Their goal is to reach a wider audience of potential customers through the app.
- Advertisers: These actors will use the app to advertise their products or services to users, based on their travel preferences and interests. Their goal is to increase brand awareness and drive sales.
- App administrators: These actors will be responsible for maintaining the app, managing user data and transactions, and ensuring the       security and privacy of user information. Their goal is to provide a reliable and secure platform for users and travel service providers.       
Each of these actors has a different set of goals and motivations for using the super app for travel, and the app's features and services will be designed to meet their respective needs.

3. Functional Requirements
- Order a flights from airlines suggestion list
- Order a hotel rooms from hotels suggestion list (booking , agoda)

   3.1 Use Case Diagram:

<img width="931" alt="Screenshot 2023-08-19 at 18 00 21" src="https://github.com/tamer98/FullStack_TravelGenuis/assets/72464761/7d9f9280-5df1-4465-8cda-5b1ea93c65c0">



## `Technologies and Tools`

- ### `Spring Boot`
The Spring Framework played a vital role in developing the backend infrastructure. It facilitated handling user requests, processing business logic, and integrating with various services such as flight and hotel providers, payment gateways, and customer management systems.

- ### `MongoDB`
Was employed as the primary data storage solution for the flight and hotel booking system. It offers high scalability, flexibility, and performance, making it suitable for managing large volumes of data. MongoDB was used to store booking details, customer information, flight schedules, hotel availability, and other related data. Its document-oriented approach allowed for easy retrieval and manipulation of data in a flexible manner.

- ### `ActiveMQ Artemis`
We integrated Artemis to facilitate asynchronous messaging and event-driven communication within our system. This allowed us to efficiently handle notifications, updates, and other real-time operations.

- ### `JMS`
In our project, JMS, along with Artemis, enabled reliable and asynchronous communication between different modules, ensuring smooth data flow and event handling.

- ### `Tomcat`
Apache Tomcat is a widely-used web server and servlet container for Java applications. We utilized Tomcat to deploy our backend services, providing the necessary environment for running and managing our Java-based server components.

- ### `React`
Was utilized for building the user interface of the flight and hotel booking system. With React, developers were able to create reusable UI components and efficiently manage the application state. The dynamic nature of React made it easier to handle real-time updates, search functionality, and user interactions, providing a smooth and interactive experience for customers when searching and booking flights and hotels.

- ### `Junit`
We employed JUnit to write and execute automated tests for our system's backend components, ensuring the correctness and reliability of critical functionalities.

- ### `Postman`
Postman is a collaboration platform used for testing and documenting APIs. In the flight and hotel booking system, Postman was employed during the
development phase to test and validate the API endpoints responsible for handling flight and hotel bookings. It allowed us to send requests, examine responses, and ensure the smooth functioning of the API services.

- ### `Spring Tool Suite`
We used Spring Tool Suite to write, debug, and manage the source code of our system, facilitating efficient development and collaboration among team members.

- ### `Git`
Git is a distributed version control system that allows multiple developers to collaborate on a project efficiently. It is commonly used in software development to track changes made to source code and manage different versions of the codebase.

- ### `RapidAPI`
RapidAPI is a platform that allows developers to discover, use, and manage APIs (Application Programming Interfaces) from various providers.
We used the following API: Tripadvisor, Booking, ExchangeRate API.

- ### `Axios`
Axios is a JavaScript library that simplifies sending HTTP requests from a browser. We employed Axios to facilitate seamless communication between the frontend and backend of our system, enabling data retrieval and updating.
Git is a distributed version control system that allows multiple developers to collaborate on a project efficiently. It is commonly used in software development to track changes made to source code and manage different versions of the codebase.


## `Steps for running the program` 

##### `MongoDB Compass`

- Introduction

MongoDB Compass is a graphical user interface (GUI) tool that allows you to interact with MongoDB databases. This README provides instructions on how to run MongoDB Compass on your system.

- Prerequisites

Before running MongoDB Compass, ensure that you have the following prerequisites installed on your system:

Operating System: MongoDB Compass is compatible with Windows, macOS, and Linux.
MongoDB: Install MongoDB Community Edition from the official MongoDB website (https://www.mongodb.com/try/download/community).
MongoDB Compass: Download the MongoDB Compass installation package for your operating system from the official MongoDB website (https://www.mongodb.com/try/download/compass).
Installation

Download the MongoDB Compass installation package for your operating system from the MongoDB website.
Run the downloaded installation package and follow the installation wizard instructions.
Once the installation is complete, MongoDB Compass will be installed on your system.
Running MongoDB Compass

- To run MongoDB Compass, follow these steps:

Windows:

Open the Windows Start menu.
Search for "MongoDB Compass" and click on the MongoDB Compass icon to launch the application.
MongoDB Compass will open, and you will see the connection screen.
macOS:
Open the Launchpad or go to the Applications folder.
Locate the MongoDB Compass application and click on it to launch.
MongoDB Compass will open, and you will see the connection screen.

- Connecting to MongoDB

Once MongoDB Compass is running, you can connect to a MongoDB database by following these steps:

In the MongoDB Compass connection screen, enter the connection details for your 

- MongoDB server:
Hostname: The hostname or IP address of your MongoDB server - localhost
Port: The port number on which MongoDB is running (default is 27017).
Authentication: If your MongoDB server requires authentication, check the "Authentication" box and provide the username and password.
SSL: If your MongoDB server is configured to use SSL, check the "SSL" box.
Click on the "Connect" button to establish a connection to the MongoDB server.
Once connected, you will see a list of available databases on the left sidebar. Click on a database to explore its collections and documents.
Conclusion

Congratulations! You have successfully installed and launched MongoDB Compass. You can now connect to your MongoDB server and interact with your databases using the graphical interface provided by MongoDB Compass. Enjoy exploring your data!


##### `React`


1. Navigate to the project directory:
   	cd travel-genius
    
2. Install the dependencies :
    	npm install --legacy-peer-deps
    
3. Make sure that the spring application is up and running

4. Start the development server:
    	npm start

## `Notes` 
- The project not finished 100% there is some work still need to done and fix
- updates will be ....






