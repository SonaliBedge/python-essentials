

// Add remaining sections to sectionPages...
sectionPages.oop = [
    `<div class="topic"><h2>🎭 OOP - Part 1: Classes & Objects</h2>
    <p>Content for OOP fundamentals...</p></div>`,
    `<div class="topic"><h2>🎭 OOP - Part 2: Inheritance</h2>
    <p>Content for inheritance...</p></div>`,
    `<div class="topic"><h2>🎭 OOP - Part 3: Polymorphism & Abstraction</h2>
    <p>Content for advanced OOP...</p></div>`
];

sectionPages.advanced = [
    `<div class="topic"><h2>🚀 Advanced - Part 1: Decorators & Generators</h2>
    <p>Content for decorators...</p></div>`,
    `<div class="topic"><h2>🚀 Advanced - Part 2: Context Managers</h2>
    <p>Content for context managers...</p></div>`,
    `<div class="topic"><h2>🚀 Advanced - Part 3: Async/Await</h2>
    <p>Content for async programming...</p></div>`
];

sectionPages.algorithms = [
    `<div class="topic"><h2>⚡ Algorithms - Part 1: Searching & Sorting</h2>
    <p>Content for algorithms...</p></div>`,
    `<div class="topic"><h2>⚡ Algorithms - Part 2: Dynamic Programming</h2>
    <p>Content for DP...</p></div>`
];

sectionPages.challenges = [
    `<div class="topic"><h2>💪 Coding Challenges</h2>
    <p>Interactive coding challenges...</p></div>`
];

sectionPages.interviewqa = [
    `<div class="topic">
        <h2>🎯 Python Interview Questions & Answers - Part 1</h2>
        <h3>Core Python Fundamentals</h3>
        
        <div class="qa-item">
            <div class="qa-category">Basics</div>
            <span class="difficulty easy">Easy</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q1: What is Python? What are its key features?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Python is a high-level, interpreted, object-oriented programming language known for:
                <ul>
                    <li><strong>Easy to Learn:</strong> Simple syntax similar to English</li>
                    <li><strong>Interpreted:</strong> Executed line by line without compilation</li>
                    <li><strong>Dynamically Typed:</strong> No need to declare variable types</li>
                    <li><strong>Object-Oriented:</strong> Supports OOP concepts like classes and inheritance</li>
                    <li><strong>Extensive Libraries:</strong> Rich standard library and third-party packages</li>
                    <li><strong>Cross-Platform:</strong> Runs on Windows, Mac, Linux, etc.</li>
                </ul>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Memory Management</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q2: How does memory management work in Python?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Python handles memory automatically through:
                <ul>
                    <li><strong>Private Heap Space:</strong> All objects stored in a private heap</li>
                    <li><strong>Reference Counting:</strong> Tracks number of references to each object</li>
                    <li><strong>Garbage Collection:</strong> Automatically deallocates unreferenced objects</li>
                    <li><strong>Memory Pools:</strong> Uses pools for small objects for efficiency</li>
                </ul>
                <div class="code-block">import sys
a = []
sys.getrefcount(a)  # 2 (variable + getrefcount argument)

b = a  # Create another reference
sys.getrefcount(a)  # 3

del b  # Remove reference
sys.getrefcount(a)  # 2 again</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Variables</div>
            <span class="difficulty easy">Easy</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q3: What is the difference between '==' and 'is' in Python?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong>
                <ul>
                    <li><strong>==</strong> checks if values are equal</li>
                    <li><strong>is</strong> checks if objects are the same (same memory location)</li>
                </ul>
                <div class="code-block">a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)  # True (same values)
print(a is b)  # False (different objects)
print(a is c)  # True (same object)

# For small integers and strings, Python caches them
x = 5
y = 5
print(x is y)  # True (same object due to integer caching)

x = 1000
y = 1000
print(x is y)  # False (too large to cache)</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Data Types</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q4: What are mutable and immutable data types? Give examples.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong><br>
                <strong>Immutable:</strong> Cannot be changed after creation
                <ul>
                    <li>int, float, bool, str, tuple, frozenset</li>
                </ul>
                <strong>Mutable:</strong> Can be modified after creation
                <ul>
                    <li>list, dict, set, bytearray</li>
                </ul>
                <div class="code-block"># Immutable example
s = "hello"
# s[0] = 'H'  # TypeError!
s = "Hello"  # Creates new string

# Mutable example
lst = [1, 2, 3]
lst[0] = 10  # Modifies in place
print(lst)  # [10, 2, 3]

# Implications for function arguments
def modify(x):
    x.append(4)

nums = [1, 2, 3]
modify(nums)
print(nums)  # [1, 2, 3, 4] - list was modified!</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Strings</div>
            <span class="difficulty easy">Easy</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q5: How do you reverse a string in Python?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Multiple ways to reverse a string:
                <div class="code-block"># Method 1: Slicing (most Pythonic)
s = "Python"
reversed_s = s[::-1]  # "nohtyP"

# Method 2: reversed() function
reversed_s = ''.join(reversed(s))

# Method 3: Loop
reversed_s = ''
for char in s:
    reversed_s = char + reversed_s

# Method 4: List reverse
char_list = list(s)
char_list.reverse()
reversed_s = ''.join(char_list)</div>
            </div>
        </div>
    </div>`,

    `<div class="topic">
        <h2>🎯 Python Interview Questions & Answers - Part 2</h2>
        <h3>Lists, Dictionaries & Data Structures</h3>
        
        <div class="qa-item">
            <div class="qa-category">Lists</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q6: What is the difference between append() and extend() in lists?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong>
                <ul>
                    <li><strong>append():</strong> Adds its argument as a single element</li>
                    <li><strong>extend():</strong> Iterates over argument and adds each element</li>
                </ul>
                <div class="code-block">lst = [1, 2, 3]

# append() - adds entire list as single element
lst.append([4, 5])
print(lst)  # [1, 2, 3, [4, 5]]

# extend() - adds each element
lst = [1, 2, 3]
lst.extend([4, 5])
print(lst)  # [1, 2, 3, 4, 5]

# Same as:
lst = [1, 2, 3]
lst += [4, 5]
print(lst)  # [1, 2, 3, 4, 5]</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Lists</div>
            <span class="difficulty hard">Hard</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q7: Explain shallow copy vs deep copy with examples.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong><br>
                <strong>Shallow Copy:</strong> Creates new object but references to nested objects are copied<br>
                <strong>Deep Copy:</strong> Creates completely independent copy including nested objects
                <div class="code-block">import copy

# Original list with nested list
original = [[1, 2], [3, 4]]

# Shallow copy
shallow = original.copy()  # or list(original) or original[:]
shallow[0][0] = 'X'
print(original)  # [['X', 2], [3, 4]] - MODIFIED!
print(shallow)   # [['X', 2], [3, 4]]

# Deep copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 'X'
print(original)  # [[1, 2], [3, 4]] - UNCHANGED
print(deep)      # [['X', 2], [3, 4]]

# For dictionaries
original_dict = {'a': [1, 2, 3]}
shallow_dict = original_dict.copy()
deep_dict = copy.deepcopy(original_dict)

shallow_dict['a'].append(4)
print(original_dict)  # {'a': [1, 2, 3, 4]} - MODIFIED!</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Dictionaries</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q8: How do you merge two dictionaries in Python?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Multiple ways to merge dictionaries:
                <div class="code-block">dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

# Method 1: update() - modifies dict1
dict1.update(dict2)
print(dict1)  # {'a': 1, 'b': 3, 'c': 4}

# Method 2: ** unpacking (Python 3.5+)
dict1 = {'a': 1, 'b': 2}
merged = {**dict1, **dict2}
print(merged)  # {'a': 1, 'b': 3, 'c': 4}

# Method 3: | operator (Python 3.9+)
merged = dict1 | dict2
print(merged)  # {'a': 1, 'b': 3, 'c': 4}

# Method 4: ChainMap (doesn't create new dict)
from collections import ChainMap
combined = ChainMap(dict2, dict1)
print(combined['b'])  # 3 (from dict2, first in chain)</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Comprehensions</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q9: Explain list comprehension. How is it different from map() and filter()?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> List comprehension provides concise syntax for creating lists.
                <div class="code-block"># List comprehension
squares = [x**2 for x in range(10)]

# Equivalent using map()
squares = list(map(lambda x: x**2, range(10)))

# With condition
evens = [x for x in range(10) if x % 2 == 0]

# Equivalent using filter()
evens = list(filter(lambda x: x % 2 == 0, range(10)))

# Combined map and filter
even_squares = [x**2 for x in range(10) if x % 2 == 0]
# vs
even_squares = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, range(10))))

# Advantages of list comprehension:
# 1. More readable
# 2. Faster (no function call overhead)
# 3. More Pythonic</div>
            </div>
        </div>
    </div>`,

    `<div class="topic">
        <h2>🎯 Python Interview Questions & Answers - Part 3</h2>
        <h3>Functions & OOP</h3>
        
        <div class="qa-item">
            <div class="qa-category">Functions</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q10: Explain *args and **kwargs with examples.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong><br>
                <strong>*args:</strong> Accepts variable number of positional arguments as tuple<br>
                <strong>**kwargs:</strong> Accepts variable number of keyword arguments as dict
                <div class="code-block"># *args example
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs example
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Sonali", age=25, city="SF")

# Combined
def full_function(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

full_function("Must have", 1, 2, 3, key1="val1", key2="val2")
# Required: Must have
# Args: (1, 2, 3)
# Kwargs: {'key1': 'val1', 'key2': 'val2'}</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">OOP</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q11: What is the difference between class variables and instance variables?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong><br>
                <strong>Class Variables:</strong> Shared across all instances<br>
                <strong>Instance Variables:</strong> Unique to each instance
                <div class="code-block">class Dog:
    species = "Canis familiaris"  # Class variable
    
    def __init__(self, name):
        self.name = name  # Instance variable

dog1 = Dog("Buddy")
dog2 = Dog("Max")

print(dog1.name)     # "Buddy" (instance variable)
print(dog2.name)     # "Max" (instance variable)
print(dog1.species)  # "Canis familiaris" (class variable)
print(dog2.species)  # "Canis familiaris" (same class variable)

# Modifying class variable affects all instances
Dog.species = "Dog"
print(dog1.species)  # "Dog"
print(dog2.species)  # "Dog"

# But if you assign to instance, it creates instance variable
dog1.species = "Puppy"
print(dog1.species)  # "Puppy" (instance variable)
print(dog2.species)  # "Dog" (still class variable)</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">OOP</div>
            <span class="difficulty hard">Hard</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q12: Explain the difference between @staticmethod, @classmethod, and instance methods.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong>
                <div class="code-block">class MyClass:
    class_var = "I'm a class variable"
    
    def __init__(self, value):
        self.instance_var = value
    
    # Instance method - has access to instance (self)
    def instance_method(self):
        return f"Instance: {self.instance_var}"
    
    # Class method - has access to class (cls), not instance
    @classmethod
    def class_method(cls):
        return f"Class: {cls.class_var}"
    
    # Static method - no access to instance or class
    @staticmethod
    def static_method(x, y):
        return x + y

obj = MyClass("test")

# Calling instance method (needs an instance)
print(obj.instance_method())  # "Instance: test"

# Calling class method (can use class or instance)
print(MyClass.class_method())  # "Class: I'm a class variable"
print(obj.class_method())      # Same

# Calling static method
print(MyClass.static_method(5, 3))  # 8
print(obj.static_method(5, 3))      # 8

# Common use cases:
# @classmethod - factory methods, alternative constructors
# @staticmethod - utility functions related to the class</div>
            </div>
        </div>
    </div>`,

    `<div class="topic">
        <h2>🎯 Python Interview Questions & Answers - Part 4</h2>
        <h3>Advanced Topics & Coding Problems</h3>
        
        <div class="qa-item">
            <div class="qa-category">Decorators</div>
            <span class="difficulty hard">Hard</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q13: What are decorators? Write a simple decorator.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Decorators modify or enhance functions without changing their code.
                <div class="code-block"># Simple decorator
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function call")
        result = func(*args, **kwargs)
        print("After function call")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Sonali")
# Output:
# Before function call
# Hello, Sonali!
# After function call

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet():
    print("Hello!")

greet()
# Hello!
# Hello!
# Hello!</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Generators</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q14: What is the difference between a generator and a list? When to use which?
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong><br>
                <strong>List:</strong> Stores all values in memory<br>
                <strong>Generator:</strong> Generates values on-the-fly (lazy evaluation)
                <div class="code-block"># List - all values computed and stored
squares_list = [x**2 for x in range(1000000)]  # Uses ~4MB memory

# Generator - values computed when needed
squares_gen = (x**2 for x in range(1000000))   # Uses ~80 bytes

# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a  # yield instead of return
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=' ')
# 0 1 1 2 3 5 8 13 21 34

# When to use:
# List: Need random access, multiple iterations, small dataset
# Generator: Large dataset, single iteration, memory-efficient needed</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Coding</div>
            <span class="difficulty medium">Medium</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q15: Write a function to check if a string is a palindrome.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong> Multiple approaches:
                <div class="code-block"># Method 1: Slicing (most Pythonic)
def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]

# Method 2: Two pointers
def is_palindrome_v2(s):
    s = s.lower().replace(" ", "")
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# Method 3: Using reversed()
def is_palindrome_v3(s):
    s = s.lower().replace(" ", "")
    return s == ''.join(reversed(s))

# Test
print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("race a car"))  # False

# For alphanumeric only
def is_palindrome_alnum(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

print(is_palindrome_alnum("A man, a plan, a canal: Panama"))  # True</div>
            </div>
        </div>

        <div class="qa-item">
            <div class="qa-category">Coding</div>
            <span class="difficulty hard">Hard</span>
            <div class="qa-question" onclick="toggleAnswer(this)">
                Q16: Write a function to find the first non-repeating character in a string.
                <span class="toggle-icon">▼</span>
            </div>
            <div class="qa-answer" style="display:none;">
                <strong>Answer:</strong>
                <div class="code-block">from collections import Counter

# Method 1: Using Counter (most efficient)
def first_non_repeating(s):
    counts = Counter(s)
    for i, char in enumerate(s):
        if counts[char] == 1:
            return i  # or return char
    return -1

# Method 2: Using dictionary
def first_non_repeating_v2(s):
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    return -1

# Method 3: Brute force (less efficient)
def first_non_repeating_v3(s):
    for i, char in enumerate(s):
        if s.count(char) == 1:
            return i
    return -1

# Test
print(first_non_repeating("leetcode"))  # 0 ('l')
print(first_non_repeating("loveleetcode"))  # 2 ('v')
print(first_non_repeating("aabb"))  # -1

# Time Complexity: O(n) for methods 1 and 2, O(n²) for method 3</div>
            </div>
        </div>
    </div>`
];

sectionPages.progress = [`<div class="topic">
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
    <h3 style="margin-top: 30px;">🎯 Keep Learning!</h3>
    <p>Continue exploring all sections to master Python for interviews.</p>
</div>`];

// Navigation Functions
function showSection(sectionId) {
    currentSection = sectionId;
    currentPage = 1;
    loadPage();
    updateActiveTab();
    window.scrollTo(0, 0);
}

function loadPage() {
    const pages = sectionPages[currentSection];
    if (!pages || pages.length === 0) return;
    
    document.getElementById('mainContent').innerHTML = pages[currentPage - 1];
    updatePageNavigation();
}

function updatePageNavigation() {
    const pages = sectionPages[currentSection];
    const totalPages = pages ? pages.length : 1;
    
    // Update page indicators
    const pageText = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('page-indicator').textContent = pageText;
    document.getElementById('page-indicator-bottom').textContent = pageText;
    
    // Update button states
    const prevBtns = [document.getElementById('prev-btn'), document.getElementById('prev-btn-bottom')];
    const nextBtns = [document.getElementById('next-btn'), document.getElementById('next-btn-bottom')];
    
    prevBtns.forEach(btn => btn.disabled = currentPage === 1);
    nextBtns.forEach(btn => btn.disabled = currentPage === totalPages);
}

function navigatePage(direction) {
    const pages = sectionPages[currentSection];
    if (!pages) return;
    
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < pages.length) {
        currentPage++;
    }
    
    loadPage();
    window.scrollTo(0, 0);
}

function updateActiveTab() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Toggle answer visibility for interview questions
function toggleAnswer(element) {
    const qaItem = element.closest('.qa-item');
    const answer = qaItem.querySelector('.qa-answer');
    
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        qaItem.classList.add('open');
    } else {
        answer.style.display = 'none';
        qaItem.classList.remove('open');
    }
}

// Quiz and challenge functions remain the same...
function checkAnswer(element, isCorrect, quizId) {
    const parent = element.parentElement;
    if (parent.classList.contains('answered')) return;
    parent.classList.add('answered');
    if (isCorrect) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
    const explanation = document.getElementById(quizId + '-explanation');
    if (explanation) explanation.style.display = 'block';
}

// Initialize on page load
window.onload = function() {
    loadPage();
};
