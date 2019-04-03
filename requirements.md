## Requirements

### Minimum Viable Product

1. 3 Pictures side-by-side
2. Display results only after 25 selections have been made
  * Track clicks on screen
  * Clicks must relate to specific picture
  * Calculate % click vs. #of particular item displayed
3. Update image displayed post click
4. Styling assumed

### Technology and Tools

* Must use function constructors
* Turn event listener off after 25 clicks have been made 

#### Product Constructor 
- image path
- image name (display)
- total votes - number
- HTMLid - string
- total views
- "3 votes for Banana Slicer"
- Get percent clicked

### Steps
1. Index.html layout
2. Voting
- click image, determine which one
- detect 25 clicks
- turn off clicks/event listener
- display data in DOM
3. Data Modeling
- constructor function
- make all products
- global array to hold all products
4. Render Products randomly
