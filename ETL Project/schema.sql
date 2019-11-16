CREATE TABLE nba_stat (
    Player      VARCHAR(40)     NOT NULL,
    Tm  		VARCHAR(6)      NOT NULL,
    MP  		INT			    NOT NULL,
    TS   		FLOAT     		NOT NULL,
    Rating      FLOAT 			NOT NULL,
    ORB   		FLOAT           NOT NULL,
	DRB      	FLOAT 			NOT NULL,
	PTS      	INT 			NOT NULL,
	AST		    INT 			NOT NULL,
	BLK      	INT				NOT NULL,
	STL      	INT 			NOT NULL

);


CREATE TABLE nba_bio (
    Player      VARCHAR(40)     NOT NULL,
    Tm  		VARCHAR(6)      NOT NULL,
    Pos  		VARCHAR(6)		NOT NULL,
    Age   		INT     		NOT NULL

);


CREATE TABLE nba_salary (
    Player      VARCHAR(40)     NOT NULL,
    Tm  		VARCHAR(6)      NOT NULL,
    Salary  	FLOAT			NOT NULL
   

);

