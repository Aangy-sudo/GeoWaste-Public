CREATE DATABASE GEOWASTE;
USE GEOWASTE;

CREATE TABLE geoUser (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    contactNumber VARCHAR(15),
    barangay VARCHAR(255),
    city VARCHAR(255),
    province VARCHAR(255),
    postalCode VARCHAR(10)
);

CREATE TABLE geoPetition (
    petitionID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    petitionStatus VARCHAR(50),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    details TEXT,
    FOREIGN KEY (userID) REFERENCES geoUser(userID)
);

CREATE TABLE geoLGU (
    lguID INT AUTO_INCREMENT PRIMARY KEY,
    officeAddress VARCHAR(255),
    email VARCHAR(255),
    collectionID INT,
    petitionID INT,
    FOREIGN KEY (collectionID) REFERENCES geoCollection(collectionID),
    FOREIGN KEY (petitionID) REFERENCES geoPetition(petitionID)
);

CREATE TABLE geoCollection (
    collectionID INT AUTO_INCREMENT PRIMARY KEY,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    assignedCollector VARCHAR(255),
    scheduleDate DATETIME,
    collectionStatus VARCHAR(50),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE geoFeedback (
    feedbackID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT NOT NULL,
    collectionID INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES geoUser(userID),
    FOREIGN KEY (collectionID) REFERENCES geoCollection(collectionID)
);

select * from geoUser;
select * from geoLGU;
select * from geoPetition;
select * from geoCollection;
select * from geoFeedback;