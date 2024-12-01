# Wk1-Code-Challenge
All-in-One JavaScript Programs
This repository contains three standalone JavaScript programs designed to solve practical problems:

Net Salary Calculator
Grade Calculator
Speed Test Program
Each program is self-contained and can be run individually using Node.js. This guide explains how to use them, their logic, and example outputs.

1. Grade Calculator
Introduction
The Grade Calculator determines a student's grade based on their marks. The program ensures the marks are between 0 and 100, and outputs a grade as follows:

A: Marks greater than 79.
B: Marks between 60 and 79.
C: Marks between 50 and 59.
D: Marks between 40 and 49.
E: Marks below 40.
How It Works
Takes student marks as input.
Ensures marks are within the range 0–100.
Outputs the appropriate grade.

2. Speed Test Program
Introduction
The Speed Test Program checks whether a car's speed exceeds the limit (70 km/h). If the speed is:

70 or below: Outputs “Ok”.
Above 70: Assigns one demerit point for every 5 km/h above the limit.
12 or more points: Outputs “License suspended”.
How It Works
Takes speed as input.
Checks if the speed is under or over the limit.
Computes demerit points (1 point per 5 km/h above 70).
Outputs the status.

3. Net Salary Calculator
Introduction
This program calculates an individual’s Net Salary based on:

Basic Salary and Benefits (inputs).
Deductions: PAYE (tax), NHIF, and NSSF contributions.
How It Works
Takes basic salary and benefits as inputs.
Calculates:
Gross salary = Basic salary + Benefits.
PAYE, NHIF, and NSSF deductions.
Computes the net salary:
Net Salary = Gross Salary − (PAYE + NHIF + NSSF)
Net Salary=Gross Salary−(PAYE+NHIF+NSSF)
