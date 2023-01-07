# Question:
# Given two strings, find the number of common characters between them.

# Solution:
def solution(s1, s2):
   commons = [min(s1.count(i), s2.count(i)) for i in set (s1)]
   return sum(commons)
