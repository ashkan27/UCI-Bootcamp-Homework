# Homework 3
# PyPoll

# First I need to imported os and csv libraries

import os
import csv

# Next I need to create a path to read the csv file.
# Also I need to create a path to create a text file. Later I'll print the results in this text file

csvpath = os.path.join('Resources', 'election_data.csv')
outputpath = os.path.join("output.txt")

# Some initialization
n = 0
i = 0

# Now I need to open and the read the csv file.
with open(csvpath, newline='') as csvfile:
    
    csvreader = csv.reader(csvfile, delimiter=',')

    # Here I stored the header.
    csv_header = next(csvreader)
    
    # this for loop finds out the total number of votes. (number of rows in the excel file without the header)
    for row in csvreader:
        n = n + 1
    # n is the total number of votes


with open(csvpath, newline='') as csvfile:

    csvreader2 = csv.reader(csvfile, delimiter=',')
    csv_header2 = next(csvreader2)

    # Initialization for candidate list

    candidate = ["M"] * n

    # This for loop stores the name of the candidates in a list
    for row2 in csvreader2:
        
        candidate[i] = row2[2]
        i = i + 1

    # The get only unique names
    unicand = set(candidate)
    
    # Initialization
    w = 0 

    # Now I need to determine the number of candidates.
    s = len(unicand)
    # s is the number of candidates.

    # Some other Initialization
    total = [0] * s
    percent = [0] * s
    name = [0] * s

    # Print The Title and total number of votes

    print("Election Results")
    print("-------------------")
    print(f"Total Votes: {n}")
    print("-------------------")

    # This for loop is used to find the total number of votes for each candidate as well as the percentage of votes for each candidate.
    # Also I printed the results.
    for j in unicand:
        name[w] = j
        total[w] = candidate.count(j)
        percent[w] = total[w]*100/n
        percent[w] = round(percent[w],3)
        print(f"{j}: {percent[w]}% ({total[w]})")
        w = w + 1 

    print("-------------------")
    
    # To find out who won!
    winnertotal = max(total)
    winnerindex = total.index(winnertotal)
    
    winner = name[winnerindex]

    # Print out the name of the winner
    print(f"Winner: {winner}")

    print("-------------------")

    # Now I need to print the results in a text file.
    # Because some of the results were printed in a for loop. I created a vert similar for loop again to print the resutls.

    # First I need to open a text file.

with open(outputpath, 'w', newline='') as txtfile:
    print("Election Results", file=txtfile)
    print("-------------------", file=txtfile)
    print(f"Total Votes: {n}", file=txtfile)
    print("-------------------", file=txtfile)

# Some other Initialization
    w = 0
    total = [0] * s
    percent = [0] * s
    name = [0] * s

# Because some of the results were printed in a for loop. I created a vert similar for loop again to print the resutls.
    for q in unicand:
        name[w] = q
        total[w] = candidate.count(q)
        percent[w] = total[w]*100/n
        percent[w] = round(percent[w],3)
        print(f"{q}: {percent[w]}% ({total[w]})", file=txtfile)
        w = w + 1 

    # Printing the name of the winner!
    print("-------------------", file=txtfile)
    print(f"Winner: {winner}", file=txtfile)
    print("-------------------", file=txtfile)



    





    



   

   
    


