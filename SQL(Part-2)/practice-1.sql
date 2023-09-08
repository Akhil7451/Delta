-- QUESTION NO 1-- 

CREATE DATABASE IF NOT EXISTS My_college;

USE My_college;

CREATE TABLE Teacher(
Id INT PRIMARY KEY,
Name VARCHAR(30) NOT NULL,
Subject VARCHAR(50),
Salary INT DEFAULT 0
);

INSERT INTO Teacher
(Id, Name, Subject, Salary)
VALUES
(23, "Ajay", "Maths", 50000),
(47, "Bharat", "English", 60000),
(18, "Chetan", "Chemistry", 45000),
(9, "Divya", "Physics", 75000);

SELECT * FROM Teacher;

-- QUESTION NO 2-- 

-- (a) -- 
SELECT Id, Name, Subject, Salary FROM Teacher
WHERE Salary > 55000;

-- (b) --
ALTER TABLE Teacher
CHANGE COLUMN Salary Ctc INT DEFAULT 0;

-- (c) --
UPDATE Teacher
SET Ctc = Ctc + Ctc*0.25;

-- (d) --
ALTER TABLE Teacher
ADD COLUMN City VARCHAR(25) DEFAULT "Gurgaon";

-- (e) --
ALTER TABLE Teacher
DROP COLUMN Ctc;