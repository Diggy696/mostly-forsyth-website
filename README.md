📁 VSCode Project Setup
Step 1: Create New Project in VSCode

Open VSCode
File > New Folder or Ctrl+Shift+P → "File: New Folder"
Name it: mostly-forsyth-website
Open the folder: File > Open Folder → select your new folder

Step 2: Create Complete File Structure
In VSCode Explorer panel (left sidebar), create this exact structure:
mostly-forsyth-website/
├── index.html                    # Main rankings page
├── teams.html                    # Teams showcase page
├── about.html                    # Commissioner page
├── history.html                  # History/archive page
├── week-view.html               # Individual week viewer
├── data/
│   ├── power-rankings.json      # Current week rankings
│   ├── teams.json               # Team information
│   ├── commissioner.json        # Commissioner info
│   └── history/                 # Archive system
│       ├── seasons.json         # Master seasons list
│       └── 2026-season-1/       # Current season folder
│           ├── weeks.json       # Week index for season
│           ├── week-1.json      # Archived week 1 rankings
│           ├── week-2.json      # Archived week 2 rankings
│           └── ...              # More weeks as needed
└── images/
    ├── logos/                   # Team NCAA logos
    └── players/                 # Player headshots
How to create folders in VSCode:

Right-click in Explorer panel
Select "New Folder"
Type folder name (e.g., data/history/2026-season-1)

Step 3: Copy Website Code
For each HTML file:

Click on the file in VSCode Explorer
Copy the provided code into the file
Save with Ctrl+S

File contents:

index.html → Main page code (from artifacts)
teams.html → Teams page code
about.html → About page code
history.html → History page code
week-view.html → Week viewer code

For JSON files:

Create each JSON file in the appropriate folder
Copy the respective JSON content from examples
Save each file

Step 4: Initialize Archive System
Create these initial files:
data/history/seasons.json:
json{
  "seasons": [
    {
      "id": "2026-season-1",
      "name": "2026 Season 1",
      "startDate": "2025-07-01",
      "endDate": "2025-12-15",
      "isActive": true
    }
  ]
}
data/history/2026-season-1/weeks.json:
json{
  "seasonId": "2026-season-1",
  "seasonName": "2026 Season 1",
  "weeks": []
}
Step 3: Copy Website Code
For each HTML file:

Click on the file in VSCode Explorer
Copy the provided code into the file
Save with Ctrl+S

File contents:

index.html → Main page code (from artifacts)
teams.html → Teams page code
about.html → About page code
history.html → NEW: History page code
week-view.html → NEW: Week viewer code

For JSON files:

Create each JSON file in the appropriate folder
Copy the respective JSON content from examples
Save each file

Step 4: Initialize Archive System
Create these initial files:
data/history/seasons.json:
json{
  "seasons": [
    {
      "id": "2026-season-1",
      "name": "2026 Season 1",
      "startDate": "2025-07-01",
      "endDate": "2025-12-15",
      "isActive": true
    }
  ]
}
data/history/2026-season-1/weeks.json:
json{
  "seasonId": "2026-season-1",
  "seasonName": "2026 Season 1",
  "weeks": []
}
Step 5: Test Locally in VSCode
Install Live Server Extension:

Ctrl+Shift+X (Extensions panel)
Search "Live Server" by Ritwick Dey
Click Install

Run your website:

Right-click on index.html in Explorer
Select "Open with Live Server"
Your website opens in browser at http://127.0.0.1:5500


🚀 GitHub Repository Setup
Step 1: Initialize Git in VSCode

Open Terminal in VSCode: `Ctrl+`` (backtick)
Run these commands one by one:

bashgit init
git add .
git commit -m "Initial website setup with archive system"
Step 2: Create GitHub Repository

Go to GitHub.com and sign in
Click green "New" button (top left)
Repository name: mostly-forsyth-website
Make sure it's Public
DON'T check any boxes (no README, .gitignore, etc.)
Click "Create repository"

Step 3: Connect VSCode to GitHub
Copy the commands from GitHub's "push an existing repository" section:
bashgit remote add origin https://github.com/YOUR_USERNAME/mostly-forsyth-website.git
git branch -M main
git push -u origin main
Run these in VSCode Terminal (replace YOUR_USERNAME with your actual GitHub username)
Step 4: Enable GitHub Pages

In your GitHub repository, click "Settings" tab
Scroll down to "Pages" in left sidebar
Source: Deploy from a branch
Branch: main
Folder: / (root)
Click "Save"

Your website will be live at:
https://YOUR_USERNAME.github.io/mostly-forsyth-website

📚 WEEKLY ARCHIVE WORKFLOW (Most Important Section!)
The Archive Process: Before Each Rankings Update
CRITICAL: Always archive your current rankings BEFORE updating to the new week!
Step-by-Step Weekly Workflow
1. Archive Current Week (Monday before updating):
Before touching power-rankings.json, follow this process:
A. Copy Current Rankings to Archive:

Open data/power-rankings.json in VSCode
Copy the entire contents (Ctrl+A, then Ctrl+C)
Create new file: data/history/2026-season-1/week-X.json (where X = current week number)
Paste the content and add these fields:
json{
  "lastUpdated": "2025-07-13T12:00:00Z",
  "currentSeason": "2026 Season 1",
  "weekNumber": 1,              // Add this
  "isArchived": true,           // Add this
  "rankings": [
    // ... existing rankings data
  ]
}


B. Update Week Index:

Open data/history/2026-season-1/weeks.json
Add the new week to the weeks array:
json{
  "seasonId": "2026-season-1",
  "seasonName": "2026 Season 1", 
  "weeks": [
    {
      "weekNumber": 1,
      "date": "2025-07-13T12:00:00Z",
      "title": "Week 1 Rankings",
      "isCurrent": false,
      "preview": [
        {
          "rank": 1,
          "teamName": "Alabama Crimson Tide",
          "playerName": "Player One",
          "record": "8-1"
        },
        // ... add top 3-6 teams for preview
      ]
    }
  ]
}


2. Update Current Rankings (After archiving):

Now edit data/power-rankings.json with new week's content
Update commentary, records, and reorder teams
Change the lastUpdated date

3. Commit Everything:
bashgit add .
git commit -m "Archive Week X and update to Week Y rankings"
git push
Quick Archive Checklist
For each new week:

 Copy current power-rankings.json to week-X.json in history folder
 Add weekNumber and isArchived: true to archived file
 Update weeks.json with new week entry and preview data
 Update power-rankings.json with new week's rankings
 Commit and push all changes
 Verify History page shows new archived week


📝 Regular Content Updates
Updating Power Rankings (After Archiving)
Method 1: Direct VSCode Editing (Recommended)
Update Power Rankings:

Open VSCode with your project
FIRST: Archive current week (see workflow above)
Open data/power-rankings.json
Edit the content:

Change lastUpdated to current date (e.g., "July 20, 2025")
Update team commentary
Update records and stats
Reorder teams by moving entire team objects


Save: Ctrl+S
Commit changes:
bashgit add .
git commit -m "Week 10 rankings update"
git push

Website updates automatically in 2-5 minutes!

Simple Date Format
Use simple, readable dates in lastUpdated:
json{
  "lastUpdated": "July 20, 2025",
  "currentSeason": "2026 Season 1",
  "rankings": [
    // ... your rankings
  ]
}
Examples of good date formats:

"July 20, 2025"
"December 1, 2025"
"January 15, 2026"
"March 3, 2026"

Website displays exactly what you type - no complex formatting needed!

🔄 Season Management
End of Season Archive Process
When a season ends:
1. Mark Season as Inactive:
Edit data/history/seasons.json:
json{
  "seasons": [
    {
      "id": "2026-season-1",
      "name": "2026 Season 1",
      "startDate": "2025-07-01",
      "endDate": "2025-12-15",
      "isActive": false              // Change to false
    },
    {
      "id": "2026-season-2",         // Add new season
      "name": "2026 Season 2",
      "startDate": "2025-12-16",
      "endDate": "2026-06-30",
      "isActive": true
    }
  ]
}
2. Create New Season Folder:

Create folder: data/history/2026-season-2/
Create file: data/history/2026-season-2/weeks.json

json{
  "seasonId": "2026-season-2",
  "seasonName": "2026 Season 2",
  "weeks": []
}
3. Reset Current Rankings:
Update data/power-rankings.json with fresh Season 2, Week 1 content.
Archive Organization
Folder Structure by Season:
data/history/
├── seasons.json                    # Master season list
├── 2026-season-1/                 # Completed season
│   ├── weeks.json                 # All weeks in season
│   ├── week-1.json               # Individual week files
│   ├── week-2.json
│   └── ...week-15.json
├── 2026-season-2/                 # Current season
│   ├── weeks.json                 # Growing list of weeks
│   ├── week-1.json               # Archived weeks
│   └── week-2.json
└── 2027-season-1/                 # Future seasons...

🖼️ Adding Images (VSCode Method)
Step 1: Prepare Images

Team logos: 200x200px, PNG preferred
Player photos: 300x300px, JPG
File naming: lowercase, dashes only: alabama-logo.png

Step 2: Add to VSCode Project

Drag and drop image files into appropriate folders:

images/logos/ for team logos
images/players/ for player photos


Images appear in Explorer panel
Update JSON files with correct paths:
json"ncaaLogo": "images/logos/alabama-logo.png"


Step 3: Commit Images
bashgit add .
git commit -m "Added team logos and player photos"
git push

🔧 VSCode Extensions for Easier Development
Required Extensions:

Live Server - Local testing

Recommended Extensions:
2. Prettier - Code formatting
3. JSON Tools - JSON validation
4. Git Lens - Enhanced Git features
5. File Utils - Easy file operations
Install Extensions:

Ctrl+Shift+X
Search extension name
Click Install


🐛 Troubleshooting
Website Not Loading

Check VSCode Terminal for errors
Validate JSON: Right-click JSON file → "Format Document"
Check file paths: Case-sensitive, forward slashes
Clear browser cache: Ctrl+F5

Git Issues
If push fails:
bashgit pull origin main
git push origin main
JSON Syntax Errors
VSCode shows errors with:

Red underlines
Problems panel (Ctrl+Shift+M)
Use online JSON validator: jsonlint.com

Archive System Issues
Problem: History page shows "No History Available"

Check: data/history/seasons.json exists and has valid JSON
Check: Season folder exists: data/history/2026-season-1/
Check: weeks.json exists in season folder

Problem: Week view shows 404 error

Check: Individual week file exists: week-1.json
Check: File is properly formatted JSON
Check: URL parameters are correct

Problem: Weeks not showing in History

Check: weeks.json has been updated with new week entry
Check: Preview data is included in weeks.json
Validate: JSON syntax in all files

Website Not Loading

Check VSCode Terminal for errors
Validate JSON: Right-click JSON file → "Format Document"
Check file paths: Case-sensitive, forward slashes
Clear browser cache: Ctrl+F5

Git Issues
If push fails:
bashgit pull origin main
git push origin main
JSON Syntax Errors
VSCode shows errors with:

Red underlines
Problems panel (Ctrl+Shift+M)
Use online JSON validator: jsonlint.com


📋 Weekly Update Checklist (Complete Workflow)
Every week in VSCode (IMPORTANT ORDER):
STEP 1: Archive (Before updating rankings)

 Open data/power-rankings.json
 Copy entire content
 Create data/history/2026-season-1/week-X.json
 Paste content and add weekNumber, isArchived: true
 Update data/history/2026-season-1/weeks.json with new week entry
 Include preview data (top 3-6 teams)

STEP 2: Update Current Rankings

 Open data/power-rankings.json
 Update lastUpdated to current date (e.g., "July 20, 2025")
 Update each team's commentary
 Update records and last games
 Reorder teams if rankings changed
 Save file (Ctrl+S)

STEP 3: Commit and Deploy

 Source Control panel in VSCode
 Type commit message: "Archive Week X, update Week Y"
 Commit and sync changes
 Check website in 5 minutes
 Verify History page shows archived week


🎨 Customization Guide
Update Your Information
Change Commissioner Info:

Edit data/commissioner.json
Replace placeholder text with your actual info

Update Team Information:

Edit data/teams.json
Replace "Player One", "Player Two" with real names
Update descriptions and achievements

Season and Week Management
Update Season Information:
Edit the season name/dates in:

data/history/seasons.json
data/power-rankings.json (currentSeason field)
Individual archived week files


📈 Advanced Features
Bulk Archive Operations
Archive Multiple Weeks (VSCode Terminal):
For migrating existing data, you can use this pattern:
bash# Create multiple week files at once
cp data/power-rankings.json data/history/2026-season-1/week-1.json
cp data/power-rankings.json data/history/2026-season-1/week-2.json
# Edit each file to add weekNumber and update data
Search and Replace in VSCode
For updating multiple files:

Ctrl+Shift+F (Search across files)
Replace old season names, dates, etc.
Use "Replace All" carefully

Backup Strategies
Archive Your Archives:

Download entire repository as ZIP monthly
Keep local copies of completed seasons
Git tags for season milestones:
bashgit tag season-1-complete
git push origin season-1-complete



💰 Cost & Hosting
Current Setup (FREE):

GitHub Pages hosting: $0
Domain: Optional ($10-15/year)
Total monthly: $0

Optional Upgrades:

Custom domain: mostlyforsyth.com ($10-15/year)
Better image hosting: CloudFlare R2 ($1-3/month)


🆘 Getting Help
VSCode Issues:

Ctrl+Shift+P → "Developer: Reload Window"
Check Output panel for errors
Restart VSCode

Archive System Issues:

Validate all JSON files with VSCode's built-in validator
Check file paths and naming conventions
Ensure weeks.json is updated when adding archived weeks

GitHub Issues:

Check repository Settings > Pages
Verify branch is set to "main"
Wait 10 minutes for changes to appear

Quick Support:

GitHub repository Issues tab
VSCode Documentation: code.visualstudio.com/docs
JSON guide: developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON


🏆 Pro Tips for Long-Term Success

Always archive before updating - This prevents lost data
Keep consistent naming - week-1.json, week-2.json, etc.
Update weeks.json immediately - Don't forget the index file
Validate JSON regularly - Use VSCode's formatting feature
Commit frequently - Small commits are easier to track
Test History page - Check archives display correctly
Plan season transitions - Prepare folders in advance
