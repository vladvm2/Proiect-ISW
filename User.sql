use Website;
create Table [User](
UserID INT IDENTITY PRIMARY KEY,
UserName NVARCHAR(100) NOT NULL UNIQUE,
Password NVARCHAR(50) NOT NULL,
Email  NVARCHAR(40) NOT NULL,
FirstName NVARCHAR(40) NOT NULL,
LastName NVARCHAR(40) NOT NULL,
PhoneNumber NVARCHAR(40) NOT NULL,
DateofBirth DATE NOT NULL,
Address NVARCHAR(40) NOT NULL,
);
select * from [User]
