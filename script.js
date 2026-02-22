 // All sections content
        const sections = {
            basics: `
                <div class="topic">
                    <h2>📚 Python Fundamentals</h2>
                    
                    <h3>1. Variables and Data Types</h3>
                    <p>Python is dynamically typed - you don't need to declare variable types explicitly.</p>
                    
                    <div class="code-block"># Integer
age = 25

# Float
price = 19.99

# String
name = "Sonali"

# Boolean
is_active = True

# None (null equivalent)
result = None

# Type checking
print(type(age))  # <class 'int'></div>

                    <div class="tip-box">
                        <strong>💡 Interview Tip:</strong> Python uses dynamic typing, but you can use type hints (PEP 484) for better code documentation:
                        <code>def greet(name: str) -> str:</code>
                    </div>

                    <h3>2. String Operations (Very Common in Interviews)</h3>
                    <div class="code-block"># String slicing
text = "Python"
print(text[0:3])    # "Pyt"
print(text[::-1])   # "nohtyP" (reverse)

# String methods
s = "  hello world  "
print(s.strip())           # "hello world"
print(s.upper())           # "  HELLO WORLD  "
print(s.replace("world", "Python"))

# String formatting (3 ways)
name, age = "Sonali", 25
print("Name: %s, Age: %d" % (name, age))          # Old style
print("Name: {}, Age: {}".format(name, age))      # .format()
print(f"Name: {name}, Age: {age}")                # f-strings ⭐ Preferred</div>

                    <h3>3. Lists - Ordered, Mutable Collections</h3>
                    <div class="code-block"># Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# List operations
numbers.append(6)              # Add to end
numbers.insert(0, 0)           # Insert at index
numbers.pop()                  # Remove and return last item
numbers.remove(3)              # Remove first occurrence

# List slicing
nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])         # [1, 2, 3]
print(nums[::2])         # [0, 2, 4]
print(nums[::-1])        # Reverse list

# List comprehension (VERY important!)
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]</div>

                    <div class="tip-box">
                        <strong>⚡ Performance Tip:</strong> List operations - append() is O(1), insert(0, x) is O(n), remove() is O(n)
                    </div>
                </div>

                <div class="quiz-container">
                    <div class="quiz-question">Quiz 1: What will be the output?</div>
                    <div class="code-block">text = "Python"
print(text[-1] + text[0])</div>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q1')">A) Pn</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q1')">B) yP</div>
                        <div class="quiz-option" onclick="checkAnswer(this, true, 'q1')">C) nP</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q1')">D) Error</div>
                    </div>
                    <div id="q1-explanation" class="explanation">
                        <strong>Explanation:</strong> text[-1] gives 'n' (last character), text[0] gives 'P' (first character). Concatenating them gives 'nP'.
                    </div>
                </div>

                <div class="topic">
                    <h3>4. Dictionaries - Key-Value Pairs</h3>
                    <div class="code-block"># Creating dictionaries
person = {
    "name": "Sonali",
    "age": 25,
    "skills": ["Python", "Django", "React"]
}

# Accessing values
print(person["name"])           # "Sonali"
print(person.get("name"))       # "Sonali"
print(person.get("city", "Unknown"))  # Default value

# Dictionary methods
person["city"] = "San Francisco"  # Add/update
del person["age"]                 # Delete key

# Iteration
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(6)}</div>

                    <h3>📌 Key Takeaways</h3>
                    <ul>
                        <li>Python is dynamically typed but supports type hints</li>
                        <li>Strings are immutable - operations create new strings</li>
                        <li>List comprehensions are concise and Pythonic</li>
                        <li>Dictionaries use hash tables for O(1) average lookup</li>
                        <li>Know the difference between mutable (list, dict, set) and immutable (str, tuple) types</li>
                    </ul>
                </div>
            `,
            
            datastructures: `
                <div class="topic">
                    <h2>🗂️ Advanced Data Structures</h2>
                    
                    <h3>1. Sets - Unordered, Unique Elements</h3>
                    <div class="code-block"># Creating sets
numbers = {1, 2, 3, 4, 5}
duplicates = {1, 2, 2, 3, 3}  # Result: {1, 2, 3}

# Set operations (IMPORTANT for interviews)
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)      # Union: {1, 2, 3, 4, 5, 6}
print(a & b)      # Intersection: {3, 4}
print(a - b)      # Difference: {1, 2}
print(a ^ b)      # Symmetric difference: {1, 2, 5, 6}

# Remove duplicates from list
numbers = [1, 2, 2, 3, 3, 4]
unique = list(set(numbers))</div>

                    <h3>2. Tuples - Immutable Sequences</h3>
                    <div class="code-block"># Creating tuples
point = (10, 20)
single = (5,)  # Note the comma

# Tuple unpacking
x, y = point
a, b, c = (1, 2, 3)

# Swapping variables (Pythonic way!)
a, b = 5, 10
a, b = b, a  # Swap!

# Named tuples
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # More readable</div>

                    <h3>3. Collections Module (Interview Gold!)</h3>
                    <div class="code-block">from collections import Counter, defaultdict, deque

# Counter - Count hashable objects
words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
counter = Counter(words)
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# defaultdict - Dictionary with default values
word_dict = defaultdict(list)
word_dict['a'].append('apple')  # No KeyError!

# deque - Double-ended queue (O(1) operations)
d = deque([1, 2, 3])
d.appendleft(0)     # [0, 1, 2, 3]
d.append(4)         # [0, 1, 2, 3, 4]
d.popleft()         # O(1)
d.pop()             # O(1)</div>

                    <div class="tip-box">
                        <strong>🎯 Interview Insight:</strong> Know when to use each data structure:
                        <ul>
                            <li><strong>List:</strong> Ordered, mutable, allows duplicates</li>
                            <li><strong>Tuple:</strong> Ordered, immutable, allows duplicates</li>
                            <li><strong>Set:</strong> Unordered, mutable, unique elements only</li>
                            <li><strong>Dict:</strong> Key-value pairs, keys must be unique and hashable</li>
                        </ul>
                    </div>
                </div>

                <div class="quiz-container">
                    <div class="quiz-question">Quiz 2: Time Complexity - Which operation is O(1) for a Python list?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q2')">A) list.insert(0, x)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, true, 'q2')">B) list.append(x)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q2')">C) list.remove(x)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q2')">D) x in list</div>
                    </div>
                    <div id="q2-explanation" class="explanation">
                        <strong>Explanation:</strong> append() is O(1) amortized. insert(0,x) is O(n) because it shifts all elements. remove(x) is O(n) because it searches and shifts. 'in' operator is O(n) for lists.
                    </div>
                </div>

                <div class="topic">
                    <h3>4. Performance Comparison</h3>
                    <table>
                        <tr>
                            <th>Operation</th>
                            <th>List</th>
                            <th>Dict</th>
                            <th>Set</th>
                        </tr>
                        <tr>
                            <td>Access by index/key</td>
                            <td>O(1)</td>
                            <td>O(1)</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Search (in)</td>
                            <td>O(n)</td>
                            <td>O(1)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Insert/Add</td>
                            <td>O(n)</td>
                            <td>O(1)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Delete</td>
                            <td>O(n)</td>
                            <td>O(1)</td>
                            <td>O(1)</td>
                        </tr>
                    </table>
                </div>
            `,
            
            oop: `
                <div class="topic">
                    <h2>🎭 Object-Oriented Programming</h2>
                    
                    <h3>1. Classes and Objects</h3>
                    <div class="code-block">class Dog:
    # Class variable (shared by all instances)
    species = "Canis familiaris"
    
    # Constructor
    def __init__(self, name, age):
        # Instance variables
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    # String representation
    def __str__(self):
        return f"{self.name} is {self.age} years old"

# Creating objects
buddy = Dog("Buddy", 3)
print(buddy.bark())  # "Buddy says Woof!"
print(buddy)         # "Buddy is 3 years old"</div>

                    <h3>2. The Four Pillars of OOP</h3>
                    
                    <h4>A. Encapsulation</h4>
                    <div class="code-block">class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private variable
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    @property
    def balance(self):
        return self.__balance

account = BankAccount(1000)
print(account.balance)  # Access via property</div>

                    <h4>B. Inheritance</h4>
                    <div class="code-block">class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())  # "Buddy says Woof!"
print(cat.speak())  # "Whiskers says Meow!"</div>

                    <h4>C. Polymorphism</h4>
                    <div class="code-block">def animal_sound(animal):
    print(animal.speak())  # Works with any Animal subclass

animals = [Dog("Buddy"), Cat("Whiskers")]
for animal in animals:
    animal_sound(animal)  # Polymorphic behavior</div>

                    <h4>D. Abstraction</h4>
                    <div class="code-block">from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)</div>
                </div>

                <div class="quiz-container">
                    <div class="quiz-question">Quiz 3: What's the output?</div>
                    <div class="code-block">class Parent:
    x = 10

class Child(Parent):
    pass

Child.x = 20
obj = Child()
print(Parent.x, Child.x, obj.x)</div>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q3')">A) 20 20 20</div>
                        <div class="quiz-option" onclick="checkAnswer(this, true, 'q3')">B) 10 20 20</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q3')">C) 10 10 20</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q3')">D) 10 20 10</div>
                    </div>
                    <div id="q3-explanation" class="explanation">
                        <strong>Explanation:</strong> Parent.x remains 10. Child.x is set to 20 (class variable). obj.x looks up the class variable, which is 20 for Child class.
                    </div>
                </div>

                <div class="topic">
                    <h3>3. Special Methods (Magic Methods)</h3>
                    <div class="code-block">class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Point({self.x}, {self.y})"
    
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2  # Uses __add__
print(p3)      # Uses __str__
print(p1 == p2) # Uses __eq__</div>

                    <div class="tip-box">
                        <strong>📝 Common Magic Methods:</strong>
                        <ul>
                            <li><code>__init__</code>: Constructor</li>
                            <li><code>__str__</code>: String representation (for users)</li>
                            <li><code>__repr__</code>: String representation (for developers)</li>
                            <li><code>__len__</code>: Length of object</li>
                            <li><code>__add__</code>, <code>__sub__</code>: Arithmetic operators</li>
                            <li><code>__eq__</code>, <code>__lt__</code>: Comparison operators</li>
                        </ul>
                    </div>
                </div>
            `,
            
            advanced: `
                <div class="topic">
                    <h2>🚀 Advanced Python Concepts</h2>
                    
                    <h3>1. List Comprehensions & Generator Expressions</h3>
                    <div class="code-block"># List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested list comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]

# Generator expression (lazy evaluation) - saves memory!
gen = (x**2 for x in range(1000000))  # Doesn't create list
print(next(gen))  # Get next value</div>

                    <h3>2. Lambda Functions</h3>
                    <div class="code-block"># Lambda syntax: lambda arguments: expression
square = lambda x: x**2
add = lambda x, y: x + y

# Common use with map, filter, sorted
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Sorting with custom key
students = [('Alice', 25), ('Bob', 20), ('Charlie', 23)]
sorted_by_age = sorted(students, key=lambda x: x[1])</div>

                    <h3>3. Decorators (Important for Interviews!)</h3>
                    <div class="code-block"># Simple decorator
def timing_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

# Multiple decorators
def uppercase_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@timing_decorator
@uppercase_decorator
def greet(name):
    return f"hello {name}"</div>

                    <h3>4. Context Managers (with statement)</h3>
                    <div class="code-block"># File handling - automatically closes file
with open('file.txt', 'r') as f:
    content = f.read()
# File is automatically closed here

# Custom context manager
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, *args):
        import time
        self.end = time.time()
        print(f"Elapsed: {self.end - self.start:.4f}s")

with Timer():
    # Your code here
    pass</div>

                    <h3>5. Exception Handling</h3>
                    <div class="code-block"># Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")

# Multiple exceptions
try:
    value = int("abc")
except (ValueError, TypeError) as e:
    print("Conversion error")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No exception occurred")
finally:
    print("Always executes")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age</div>
                </div>

                <div class="quiz-container">
                    <div class="quiz-question">Quiz 4: What's the difference between a list comprehension and generator expression?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q4')">A) No difference, just syntax</div>
                        <div class="quiz-option" onclick="checkAnswer(this, true, 'q4')">B) Generator is lazy and memory-efficient</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q4')">C) List comprehension is faster</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q4')">D) Generator can only be used once</div>
                    </div>
                    <div id="q4-explanation" class="explanation">
                        <strong>Explanation:</strong> Generators use lazy evaluation - they generate values on-the-fly and don't store the entire sequence in memory. This makes them memory-efficient for large datasets.
                    </div>
                </div>

                <div class="topic">
                    <h3>6. *args and **kwargs</h3>
                    <div class="code-block"># *args - variable number of positional arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # 10

# **kwargs - variable number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Sonali", role="Developer", experience=4)

# Combined usage
def flexible_function(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

flexible_function("Must have", 1, 2, 3, key="value")</div>
                </div>
            `,
            
            algorithms: `
                <div class="topic">
                    <h2>⚡ Common Algorithm Patterns</h2>
                    
                    <h3>1. Two Pointers Technique</h3>
                    <div class="code-block"># Check if string is palindrome
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# Two sum in sorted array
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return None</div>

                    <h3>2. Sliding Window Pattern</h3>
                    <div class="code-block"># Maximum sum of k consecutive elements
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return None
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Longest substring without repeating characters
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length</div>

                    <h3>3. Hash Table Pattern</h3>
                    <div class="code-block"># Two sum (unsorted array)
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return None

# Find first non-repeating character
def first_non_repeating(s):
    from collections import Counter
    counts = Counter(s)
    for i, char in enumerate(s):
        if counts[char] == 1:
            return i
    return -1</div>

                    <h3>4. Binary Search</h3>
                    <div class="code-block"># Classic binary search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Find insertion position
def search_insert(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return left</div>

                    <h3>5. Recursion & Backtracking</h3>
                    <div class="code-block"># Generate all permutations
def permute(nums):
    result = []
    
    def backtrack(path, remaining):
        if not remaining:
            result.append(path[:])
            return
        
        for i in range(len(remaining)):
            backtrack(path + [remaining[i]], 
                     remaining[:i] + remaining[i+1:])
    
    backtrack([], nums)
    return result

# Generate all subsets
def subsets(nums):
    result = []
    
    def backtrack(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    
    backtrack(0, [])
    return result</div>
                </div>

                <div class="quiz-container">
                    <div class="quiz-question">Quiz 5: What's the time complexity of binary search?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q5')">A) O(n)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, true, 'q5')">B) O(log n)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q5')">C) O(n log n)</div>
                        <div class="quiz-option" onclick="checkAnswer(this, false, 'q5')">D) O(1)</div>
                    </div>
                    <div id="q5-explanation" class="explanation">
                        <strong>Explanation:</strong> Binary search halves the search space in each step, giving O(log n) time complexity. This only works on sorted arrays.
                    </div>
                </div>

                <div class="topic">
                    <h3>6. Sorting Algorithms (Know These!)</h3>
                    <div class="code-block"># Built-in sorting (Timsort - O(n log n))
arr = [3, 1, 4, 1, 5]
arr.sort()  # In-place
sorted_arr = sorted(arr)  # Returns new list

# Quick Sort implementation
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)</div>

                    <div class="tip-box">
                        <strong>⏱️ Time Complexity Cheat Sheet:</strong>
                        <ul>
                            <li><strong>Bubble/Insertion Sort:</strong> O(n²) - Simple but slow</li>
                            <li><strong>Merge Sort:</strong> O(n log n) - Stable, predictable</li>
                            <li><strong>Quick Sort:</strong> O(n log n) average, O(n²) worst</li>
                            <li><strong>Timsort (Python's default):</strong> O(n log n) - Hybrid</li>
                        </ul>
                    </div>
                </div>
            `,
            
            challenges: `
                <div class="topic">
                    <h2>💪 Coding Challenges</h2>
                    <p>Practice these challenges to sharpen your skills for real interviews!</p>
                </div>

                <div class="challenge-box">
                    <div class="challenge-title">🎯 Challenge 1: Reverse Words in a String</div>
                    <p>Given a string, reverse the order of words.</p>
                    <p><strong>Example:</strong> "Hello World Python" → "Python World Hello"</p>
                    
                    <textarea id="challenge1-code" placeholder="Write your solution here...">def reverse_words(s):
    # Your code here
    pass

# Test
print(reverse_words("Hello World Python"))</textarea>
                    <br><br>
                    <button class="btn btn-primary" onclick="testChallenge1()">Run Code</button>
                    <div id="challenge1-result"></div>
                    
                    <details style="margin-top: 15px;">
                        <summary>💡 View Solution</summary>
                        <div class="code-block" style="margin-top: 10px;"># Solution: Using split and join
def reverse_words(s):
    return " ".join(s.split()[::-1])</div>
                    </details>
                </div>

                <div class="challenge-box">
                    <div class="challenge-title">🎯 Challenge 2: Valid Parentheses</div>
                    <p>Given a string containing '(', ')', '{', '}', '[', ']', determine if it's valid.</p>
                    <p><strong>Example:</strong> "({[]})" → True, "([)]" → False</p>
                    
                    <textarea id="challenge2-code" placeholder="Write your solution here...">def is_valid_parentheses(s):
    # Your code here
    pass

# Test
print(is_valid_parentheses("({[]})"))
print(is_valid_parentheses("([)]"))</textarea>
                    <br><br>
                    <button class="btn btn-primary" onclick="testChallenge2()">Run Code</button>
                    <div id="challenge2-result"></div>
                    
                    <details style="margin-top: 15px;">
                        <summary>💡 View Solution</summary>
                        <div class="code-block" style="margin-top: 10px;">def is_valid_parentheses(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    
    return not stack</div>
                    </details>
                </div>

                <div class="challenge-box">
                    <div class="challenge-title">🎯 Challenge 3: Find Missing Number</div>
                    <p>Given a list of n-1 integers in range 1 to n, find the missing number.</p>
                    <p><strong>Example:</strong> [1, 2, 4, 5, 6] → 3</p>
                    
                    <textarea id="challenge3-code" placeholder="Write your solution here...">def find_missing(nums):
    # Your code here
    pass

# Test
print(find_missing([1, 2, 4, 5, 6]))</textarea>
                    <br><br>
                    <button class="btn btn-primary" onclick="testChallenge3()">Run Code</button>
                    <div id="challenge3-result"></div>
                    
                    <details style="margin-top: 15px;">
                        <summary>💡 View Solution</summary>
                        <div class="code-block" style="margin-top: 10px;"># Mathematical approach - O(n) time, O(1) space
def find_missing(nums):
    n = len(nums) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum</div>
                    </details>
                </div>

                <div class="topic">
                    <h3>🔥 More Practice Resources</h3>
                    <ul>
                        <li><strong>LeetCode:</strong> Practice Easy → Medium problems</li>
                        <li><strong>HackerRank:</strong> Python certification prep</li>
                        <li><strong>CodeWars:</strong> Fun kata challenges</li>
                        <li><strong>Project Euler:</strong> Mathematical problems</li>
                    </ul>
                </div>
            `,
            
            progress: `
                <div class="topic">
                    <h2>📊 Your Learning Progress</h2>
                    
                    <div class="stats-container">
                        <div class="stat-card">
                            <div class="stat-number" id="quizzes-completed">0</div>
                            <div class="stat-label">Quizzes Completed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="challenges-solved">0</div>
                            <div class="stat-label">Challenges Solved</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="score-percentage">0%</div>
                            <div class="stat-label">Overall Score</div>
                        </div>
                    </div>

                    <h3 style="margin-top: 30px;">Progress by Topic</h3>
                    
                    <div style="margin: 20px 0;">
                        <strong>Python Basics</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-basics" style="width: 0%"></div>
                        </div>
                    </div>

                    <div style="margin: 20px 0;">
                        <strong>Data Structures</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-datastructures" style="width: 0%"></div>
                        </div>
                    </div>

                    <div style="margin: 20px 0;">
                        <strong>OOP Concepts</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-oop" style="width: 0%"></div>
                        </div>
                    </div>

                    <div style="margin: 20px 0;">
                        <strong>Advanced Topics</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-advanced" style="width: 0%"></div>
                        </div>
                    </div>

                    <div style="margin: 20px 0;">
                        <strong>Coding Challenges</strong>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-challenges" style="width: 0%"></div>
                        </div>
                    </div>

                    <h3 style="margin-top: 30px;">🎯 Next Steps for Interview Success</h3>
                    <div class="tip-box">
                        <ol>
                            <li><strong>Master the fundamentals:</strong> Data structures, algorithms, time/space complexity</li>
                            <li><strong>Practice daily:</strong> Solve at least 1-2 coding problems every day</li>
                            <li><strong>Understand patterns:</strong> Recognize common problem patterns</li>
                            <li><strong>Write clean code:</strong> Focus on readability and proper naming</li>
                            <li><strong>Explain your thinking:</strong> Practice talking through solutions</li>
                            <li><strong>Learn to optimize:</strong> Start with working solution, then optimize</li>
                            <li><strong>Mock interviews:</strong> Practice with peers or use platforms like Pramp</li>
                        </ol>
                    </div>

                    <div class="challenge-box" style="margin-top: 30px;">
                        <div class="challenge-title">📚 Study Plan Recommendation</div>
                        <p><strong>Week 1-2:</strong> Python fundamentals, data structures, OOP</p>
                        <p><strong>Week 3-4:</strong> Common algorithms, time complexity analysis</p>
                        <p><strong>Week 5-6:</strong> Practice easy problems on LeetCode (20-30)</p>
                        <p><strong>Week 7-8:</strong> Medium problems, mock interviews</p>
                        <p><strong>Ongoing:</strong> Review mistakes, learn new patterns, stay consistent</p>
                    </div>
                </div>
            `
        };

        // Progress tracking
        let progress = {
            quizzes: {},
            challenges: {},
            sections: {
                basics: 0,
                datastructures: 0,
                oop: 0,
                advanced: 0,
                challenges: 0
            }
        };

        // Load progress from localStorage
        function loadProgress() {
            const saved = localStorage.getItem('pythonTutorialProgress');
            if (saved) {
                progress = JSON.parse(saved);
            }
            updateProgressDisplay();
        }

        // Save progress to localStorage
        function saveProgress() {
            localStorage.setItem('pythonTutorialProgress', JSON.stringify(progress));
            updateProgressDisplay();
        }

        // Update progress display
        function updateProgressDisplay() {
            const quizzesCompleted = Object.keys(progress.quizzes).length;
            const challengesSolved = Object.keys(progress.challenges).length;
            const totalQuizzes = 5;
            const totalChallenges = 3;
            const scorePercentage = Math.round(((quizzesCompleted + challengesSolved) / (totalQuizzes + totalChallenges)) * 100);

            const quizElem = document.getElementById('quizzes-completed');
            const challengeElem = document.getElementById('challenges-solved');
            const scoreElem = document.getElementById('score-percentage');
            
            if (quizElem) quizElem.textContent = quizzesCompleted;
            if (challengeElem) challengeElem.textContent = challengesSolved;
            if (scoreElem) scoreElem.textContent = scorePercentage + '%';

            // Update section progress bars
            Object.keys(progress.sections).forEach(section => {
                const elem = document.getElementById(`progress-${section}`);
                if (elem) {
                    elem.style.width = progress.sections[section] + '%';
                }
            });
        }

        // Section navigation
        function showSection(sectionId) {
            // Load content
            document.getElementById('mainContent').innerHTML = sections[sectionId];
            
            // Update active tab
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            
            window.scrollTo(0, 0);
        }

        // Quiz answer checking
        function checkAnswer(element, isCorrect, quizId) {
            const parent = element.parentElement;
            if (parent.classList.contains('answered')) return;
            
            parent.classList.add('answered');

            if (isCorrect) {
                element.classList.add('correct');
                progress.quizzes[quizId] = true;
                
                // Update section progress
                if (quizId === 'q1') {
                    progress.sections.basics = Math.min(100, progress.sections.basics + 50);
                } else if (quizId === 'q2') {
                    progress.sections.datastructures = Math.min(100, progress.sections.datastructures + 50);
                } else if (quizId === 'q3') {
                    progress.sections.oop = Math.min(100, progress.sections.oop + 50);
                } else if (quizId === 'q4') {
                    progress.sections.advanced = Math.min(100, progress.sections.advanced + 50);
                } else if (quizId === 'q5') {
                    progress.sections.algorithms = Math.min(100, progress.sections.algorithms + 50);
                }
            } else {
                element.classList.add('incorrect');
            }

            const explanation = document.getElementById(quizId + '-explanation');
            if (explanation) {
                explanation.style.display = 'block';
            }

            saveProgress();
        }

        // Challenge 1: Reverse Words
        function testChallenge1() {
            const code = document.getElementById('challenge1-code').value;
            const resultDiv = document.getElementById('challenge1-result');
            
            try {
                eval(code);
                const result = reverse_words("Hello World Python");
                
                if (result === "Python World Hello") {
                    resultDiv.innerHTML = '<div class="result success">✓ Great work! Words reversed correctly!</div>';
                    progress.challenges.challenge1 = true;
                    progress.sections.challenges = Math.min(100, progress.sections.challenges + 33);
                    saveProgress();
                } else {
                    resultDiv.innerHTML = `<div class="result error">Not quite. Got: "${result}", Expected: "Python World Hello"</div>`;
                }
            } catch (e) {
                resultDiv.innerHTML = `<div class="result error">Error: ${e.message}</div>`;
            }
        }

        // Challenge 2: Valid Parentheses
        function testChallenge2() {
            const code = document.getElementById('challenge2-code').value;
            const resultDiv = document.getElementById('challenge2-result');
            
            try {
                eval(code);
                const test1 = is_valid_parentheses("({[]})");
                const test2 = is_valid_parentheses("([)]");
                
                if (test1 === true && test2 === false) {
                    resultDiv.innerHTML = '<div class="result success">✓ Perfect! Your solution handles both test cases!</div>';
                    progress.challenges.challenge2 = true;
                    progress.sections.challenges = Math.min(100, progress.sections.challenges + 34);
                    saveProgress();
                } else {
                    resultDiv.innerHTML = '<div class="result error">Not quite. Check both test cases.</div>';
                }
            } catch (e) {
                resultDiv.innerHTML = `<div class="result error">Error: ${e.message}</div>`;
            }
        }

        // Challenge 3: Find Missing Number
        function testChallenge3() {
            const code = document.getElementById('challenge3-code').value;
            const resultDiv = document.getElementById('challenge3-result');
            
            try {
                eval(code);
                const result = find_missing([1, 2, 4, 5, 6]);
                
                if (result === 3) {
                    resultDiv.innerHTML = '<div class="result success">✓ Excellent! Your solution works!</div>';
                    progress.challenges.challenge3 = true;
                    progress.sections.challenges = Math.min(100, progress.sections.challenges + 33);
                    saveProgress();
                } else {
                    resultDiv.innerHTML = `<div class="result error">Not quite. Got: ${result}, Expected: 3</div>`;
                }
            } catch (e) {
                resultDiv.innerHTML = `<div class="result error">Error: ${e.message}</div>`;
            }
        }

        // Initialize on page load
         window.onload = function() {
            // Load first section
            document.getElementById('mainContent').innerHTML = sections.basics;
            loadProgress();
        };