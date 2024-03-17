use Website;
create Table Destination(
DestinationID INT PRIMARY KEY,
Name NVARCHAR(50) NOT NULL,
Description NVARCHAR(200) NOT NULL,
Location NVARCHAR(50) NOT NULL
)
select * from Destination