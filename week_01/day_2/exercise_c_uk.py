united_kingdom = [
  {
    "name": "Scotland",
    "population": 5295000,
    "capital": "Edinburgh"
  },
  {
    "name": "Wales",
    "population": 3063000,
    "capital": "Swansea"
  },
  {
    "name": "England",
    "population": 53010000,
    "capital": "London"
  }
]

# 1. Change the capital of Wales from `"Swansea"` to `"Cardiff"`.
united_kingdom[1] = {
  "name": "Wales",
  "population": 3063000,
  "capital": "Cardiff"
  }
print(united_kingdom)
# Couldnt figure out how to only change the capital element within the entry without updating the other ones

# 2. Create a dictionary for Northern Ireland and add it to the `united_kingdom` list (The capital is Belfast, and the population is 1,811,000).
new_country = {
    "name": "Ireland",
    "population": 1811000,
    "capital": "Belfast"}
united_kingdom.append(new_country)
print(united_kingdom)

# 3. Use a loop to print the names of all the countries in the UK.
for country in united_kingdom:
  print(country["name"])

# 4. Use a loop to find the total population of the UK.
total=0
for country in united_kingdom:
  total += country["population"]
print(total)