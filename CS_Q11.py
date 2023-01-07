# QUESTION:
# Ticket numbers usually consist of an even number of digits.
# A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
# Given a ticket number n, determine if it's lucky or not.

# SOLUTION:

def solution(n):
  y = [int(x) for x in str(n)]
  z = int(len(y/2)
  return sum (y[:z] == sum(y[z:])
