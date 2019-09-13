# Homework 3
# PyBank

# First I need to imported os and csv libraries

import os
import csv

# Next I need to create a path to read the csv file.
# Also I need to create a path to create a text file. Later I'll print the results in this text file

csvpath = os.path.join('Resources', 'budget_data.csv')
outputpath = os.path.join("output.txt")


# Some initialization

n = 0
i = 0
total = 0
temp = 0
temp1 = 0


# Now I need to open and the read the csv file.

with open(csvpath, newline='') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')

# Here I stored the header.

    csv_header = next(csvreader)
# this for loop finds out the number of months. (number of rows in the excel file without the header)
    for row in csvreader:
        n = n + 1
# n is the number of months

# Some other initialization for changes in profit/loses in each month and name of the months

changes = [0] * n
months =["M"] * n


with open(csvpath, newline='') as csvfile2:
    csvreader2 = csv.reader(csvfile2, delimiter=',')

    csv_header2 = next(csvreader2)


# I created this for loop to calculate total profit/loses, and changes in each months.

    for row2 in csvreader2:
        months[i] = row2[0]
        total = total + int(row2[1])
        temp1 = int(row2[1])
        changes[i] = temp1 - temp
        temp = int(row2[1])
        i = i + 1

# The very first value in this list needs to be removed. becuase of the way I coded it. The first value is the profit of first month - ZERO. 
# We dont' want it, so I removed it.
    del changes[0]
    # Here I determined the average changes in profit/loses, the value of the best profit in a month, and the value of the worst loses in a month.
    ave = ((sum(changes))/(n-1))
    maxx = max(changes)
    minn = min(changes)
    # To Find indexes in order to print later.
    indmax = changes.index(maxx)
    indmin = changes.index(minn)
    # Just rounding
    ave = round(ave,2)
    # Indexing
    pmax = months[indmax+1]
    pmin = months[indmin+1]

    ##### Print Time

    print("Financial Analysis")
    print("----------------")

    print(f"Total Months: {i}")
    print(f"Total: ${total}")

    print(f"Average Change: ${ave}")
    
    print(f"Greatest Increase in Profits: {pmax} (${maxx})")
    print(f"Greatest Decrease in Profits: {pmin} (${minn})")

    #### Now I need to print the results in a text file.

with open(outputpath, 'w', newline='') as txtfile:
    print("Financial Analysis", file=txtfile)
    print("----------------", file=txtfile)

    print(f"Total Months: {i}", file=txtfile)
    print(f"Total: ${total}", file=txtfile)

    print(f"Average Change: ${ave}", file=txtfile)
    
    print(f"Greatest Increase in Profits: {pmax} (${maxx})", file=txtfile)
    print(f"Greatest Decrease in Profits: {pmin} (${minn})", file=txtfile)