use Website;
create Table Card(
CardNumber INT PRIMARY KEY ,
ExpirationDate DATE NOT NULL,
SecurityCode INT NOT NULL,
UserName NVARCHAR(100) NOT NULL FOREIGN KEY (UserName) REFERENCES [User](UserName)
);
select * from Card