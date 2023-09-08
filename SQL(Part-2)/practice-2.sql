-- QUESTION NO 1-- 

CREATE TABLE Student_info(
Roll_no INT PRIMARY KEY,
Name VARCHAR(30) NOT NULL,
City VARCHAR(50),
Marks INT
);

INSERT INTO Student_info
(Roll_no, Name, City, Marks)
VALUES
(110, "Adam", "Delhi", 76),
(108, "Bob", "Mumbai", 65),
(124, "Casey", "Pune", 94),
(112, "Duke", "Pune", 80);

SELECT * FROM Student_info;

-- QUESTION NO 2-- 

-- (a) -- 
SELECT Roll_no, Name, City, Marks FROM Student_info
WHERE Marks > 75;

-- (b) --
-- Method 1 --
SELECT DISTINCT City FROM Student_info;

-- Method 2--
SELECT City FROM Student_info
GROUP BY City;

-- (c) --
SELECT City, MAX(marks) FROM Student_info
GROUP BY City;

-- (d) --
SELECT AVG(Marks) From Student_info;

-- (e) --
ALTER TABLE Student_info
ADD COLUMN Grade VARCHAR(2);

UPDATE Student_info
SET Grade = "O"
WHERE Marks >= 80;

UPDATE Student_info
SET Grade = "A"
WHERE Marks BETWEEN 69 AND 80;

UPDATE Student_info
SET Grade = "B"
WHERE Marks BETWEEN 59 AND 70;

UPDATE Student_info
SET Grade = "C"
WHERE Marks < 60;

SELECT * FROM Student_info;
