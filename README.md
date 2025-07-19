# Mostly Forsyth Dynasty League Website - Complete VSCode & GitHub Guide

## 🎯 Quick Start (30 minutes to live website)

### Prerequisites
- VSCode installed
- GitHub account
- Git installed (comes with VSCode)

---

## 📁 VSCode Project Setup

### Step 1: Create New Project in VSCode

1. **Open VSCode**
2. **File > New Folder** or `Ctrl+Shift+P` → "File: New Folder"
3. **Name it:** `mostly-forsyth-website`
4. **Open the folder:** File > Open Folder → select your new folder

### Step 2: Create Complete File Structure

In VSCode Explorer panel (left sidebar), create this exact structure:

```
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
```

**How to create folders in VSCode:**
1. Right-click in Explorer panel
2. Select "New Folder"
3. Type folder name (e.g., `data/history/2026-season-1`)

### Step 3: Copy Website Code

**For each HTML file:**
1. Click on the file in VSCode Explorer
2. Copy the provided code into the file
3. Save with `Ctrl+S`

**File contents:**
- `index.html` → Main page code (from artifacts)
- `teams.html` → Teams page code  
- `about.html` → About page code
- `history.html` → History page code
- `week-view.html` → Week viewer code

**For JSON files:**
1. Create each JSON file in the appropriate folder
2. Copy the respective JSON content from examples
3. Save each file

### Step 4: Initialize Archive System

**Create these initial files:**

**data/history/seasons.json:**
```json
{
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
```

**data/history/2026-season-1/weeks.json:**
```json
{
  "seasonId": "2026-season-1",
  "seasonName": "2026 Season 1",
  "weeks": []
}
```

### Step 3: Copy Website Code

**For each HTML file:**
1. Click on the file in VSCode Explorer
2. Copy the provided code into the file
3. Save with `Ctrl+S`

**File contents:**
- `index.html` → Main page code (from artifacts)
- `teams.html` → Teams page code  
- `about.html` → About page code
- `history.html` → NEW: History page code
- `week-view.html` → NEW: Week viewer code

**For JSON files:**
1. Create each JSON file in the appropriate folder
2. Copy the respective JSON content from examples
3. Save each file

### Step 4: Initialize Archive System

**Create these initial files:**

**data/history/seasons.json:**
```json
{
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
```

**data/history/2026-season-1/weeks.json:**
```json
{
  "seasonId": "2026-season-1",
  "seasonName": "2026 Season 1",
  "weeks": []
}
```

### Step 5: Test Locally in VSCode

**Install Live Server Extension:**
1. `Ctrl+Shift+X` (Extensions panel)
2. Search "Live Server" by Ritwick Dey
3. Click Install

**Run your website:**
1. Right-click on `index.html` in Explorer
2. Select "Open with Live Server"
3. Your website opens in browser at `http://127.0.0.1:5500`

---

## 🚀 GitHub Repository Setup

### Step 1: Initialize Git in VSCode

1. **Open Terminal in VSCode:** `Ctrl+`` (backtick)
2. **Run these commands one by one:**

```bash
git init
git add .
git commit -m "Initial website setup with archive system"
```

### Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click green "New" button** (top left)
3. **Repository name:** `mostly-forsyth-website`
4. **Make sure it's Public**
5. **DON'T check any boxes** (no README, .gitignore, etc.)
6. **Click "Create repository"**

### Step 3: Connect VSCode to GitHub

**Copy the commands from GitHub's "push an existing repository" section:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/mostly-forsyth-website.git
git branch -M main
git push -u origin main
```

**Run these in VSCode Terminal** (replace YOUR_USERNAME with your actual GitHub username)

### Step 4: Enable GitHub Pages

1. **In your GitHub repository, click "Settings" tab**
2. **Scroll down to "Pages" in left sidebar**
3. **Source:** Deploy from a branch
4. **Branch:** main
5. **Folder:** / (root)
6. **Click "Save"**

**Your website will be live at:**
`https://YOUR_USERNAME.github.io/mostly-forsyth-website`

---

## 📚 WEEKLY ARCHIVE WORKFLOW (Most Important Section!)

### The Archive Process: Before Each Rankings Update

**CRITICAL:** Always archive your current rankings BEFORE updating to the new week!

### Step-by-Step Weekly Workflow

**1. Archive Current Week (Monday before updating):**

Before touching `power-rankings.json`, follow this process:

**A. Copy Current Rankings to Archive:**
1. **Open** `data/power-rankings.json` in VSCode
2. **Copy the entire contents** (`Ctrl+A`, then `Ctrl+C`)
3. **Create new file:** `data/history/2026-season-1/week-X.json` (where X = current week number)
4. **Paste the content** and add these fields:
   ```json
   {
     "lastUpdated": "2025-07-13T12:00:00Z",
     "currentSeason": "2026 Season 1",
     "weekNumber": 1,              // Add this
     "isArchived": true,           // Add this
     "rankings": [
       // ... existing rankings data
     ]
   }
   ```

**B. Update Week Index:**
1. **Open** `data/history/2026-season-1/weeks.json`
2. **Add the new week** to the weeks array:
   ```json
   {
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
   ```

**2. Update Current Rankings (After archiving):**
1. **Now edit** `data/power-rankings.json` with new week's content
2. **Update** commentary, records, and reorder teams
3. **Change** the `lastUpdated` date

**3. Commit Everything:**
```bash
git add .
git commit -m "Archive Week X and update to Week Y rankings"
git push
```

### Quick Archive Checklist

For each new week:
- [ ] Copy current `power-rankings.json` to `week-X.json` in history folder
- [ ] Add `weekNumber` and `isArchived: true` to archived file
- [ ] Update `weeks.json` with new week entry and preview data
- [ ] Update `power-rankings.json` with new week's rankings
- [ ] Commit and push all changes
- [ ] Verify History page shows new archived week

---

## 📝 Regular Content Updates

### Updating Power Rankings (After Archiving)

**Method 1: Direct VSCode Editing (Recommended)**

**Update Power Rankings:**
1. **Open VSCode** with your project
2. **FIRST: Archive current week** (see workflow above)
3. **Open** `data/power-rankings.json`
4. **Edit the content:**
   - Change `lastUpdated` to current date (e.g., "July 20, 2025")
   - Update team commentary
   - Update records and stats
   - **IMPORTANT for Charts:** Update `pointsPerGame` field for each team
   - **NEW Stats Fields Required:**
     - `offensiveYPG`: Offensive yards per game (e.g., "385.2")
     - `totalTouchdowns`: Total touchdowns scored (e.g., "18")
     - `yardsAllowedPerGame`: Defensive yards allowed per game (e.g., "275.4")
   - Reorder teams by moving entire team objects
5. **Save:** `Ctrl+S`
6. **Commit changes:**
   ```bash
   git add .
   git commit -m "Week 10 rankings update"
   git push
   ```
7. **Website updates automatically in 2-5 minutes!**

### 📊 Interactive Charts - Auto-Update Information

**The charts automatically update when you update `power-rankings.json`!**

The interactive charts pull data directly from your current power-rankings.json file, so they refresh automatically when you update your weekly rankings. No additional steps needed!

**What the charts show:**
- **Points Per Game Chart:** Uses the `pointsPerGame` field from each team's stats
- **Win/Loss Streak Chart:** Analyzes the `record` field and commentary to estimate streaks
- **Team Trend Chart:** Currently shows sample data (can be enhanced with historical tracking)
- **Mini Sparklines:** Show recent ranking trends on each team card

**To ensure charts display correctly:**
1. Always include the `pointsPerGame` field in each team's stats
2. Keep the `record` field in "W-L" format (e.g., "8-1")
3. Include the new stats fields:
   - `offensiveYPG`: Offensive yards per game
   - `totalTouchdowns`: Total touchdowns scored
   - `yardsAllowedPerGame`: Defensive yards allowed per game
4. The charts will automatically update when the page loads with new data

**Future Enhancement (Optional):**
To make the Team Trend Chart show real historical data, you could add a `rankingHistory` array to each team in power-rankings.json:
```json
"rankingHistory": [8, 6, 4, 5, 3]  // Previous week rankings
```

### Simple Date Format

**Use simple, readable dates in `lastUpdated`:**
```json
{
  "lastUpdated": "July 20, 2025",
  "currentSeason": "2026 Season 1",
  "rankings": [
    // ... your rankings
  ]
}
```

**Examples of good date formats:**
- "July 20, 2025"
- "December 1, 2025" 
- "January 15, 2026"
- "March 3, 2026"

**Website displays exactly what you type** - no complex formatting needed!

---

## 🔄 Season Management

### End of Season Archive Process

**When a season ends:**

**1. Mark Season as Inactive:**
Edit `data/history/seasons.json`:
```json
{
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
```

**2. Create New Season Folder:**
1. **Create folder:** `data/history/2026-season-2/`
2. **Create file:** `data/history/2026-season-2/weeks.json`
```json
{
  "seasonId": "2026-season-2",
  "seasonName": "2026 Season 2",
  "weeks": []
}
```

**3. Reset Current Rankings:**
Update `data/power-rankings.json` with fresh Season 2, Week 1 content.

### Archive Organization

**Folder Structure by Season:**
```
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
```

---

## 🖼️ Adding Images (VSCode Method)

### Step 1: Prepare Images
- **Team logos:** 200x200px, PNG preferred
- **Player photos:** 300x300px, JPG
- **File naming:** lowercase, dashes only: `alabama-logo.png`

### Step 2: Add to VSCode Project
1. **Drag and drop** image files into appropriate folders:
   - `images/logos/` for team logos
   - `images/players/` for player photos
2. **Images appear in Explorer panel**
3. **Update JSON files** with correct paths:
   ```json
   "ncaaLogo": "images/logos/alabama-logo.png"
   ```

### Step 3: Commit Images
```bash
git add .
git commit -m "Added team logos and player photos"
git push
```

---

## 🔧 VSCode Extensions for Easier Development

**Required Extensions:**
1. **Live Server** - Local testing

**Recommended Extensions:**
2. **Prettier** - Code formatting
3. **JSON Tools** - JSON validation
4. **Git Lens** - Enhanced Git features
5. **File Utils** - Easy file operations

**Install Extensions:**
1. `Ctrl+Shift+X`
2. Search extension name
3. Click Install

---

## 🐛 Troubleshooting

### Website Not Loading
1. **Check VSCode Terminal** for errors
2. **Validate JSON:** Right-click JSON file → "Format Document"
3. **Check file paths:** Case-sensitive, forward slashes
4. **Clear browser cache:** `Ctrl+F5`

### Git Issues
**If push fails:**
```bash
git pull origin main
git push origin main
```

### JSON Syntax Errors
**VSCode shows errors with:**
- Red underlines
- Problems panel (`Ctrl+Shift+M`)
- Use online JSON validator: jsonlint.com

### Archive System Issues

**Problem: History page shows "No History Available"**
- Check: `data/history/seasons.json` exists and has valid JSON
- Check: Season folder exists: `data/history/2026-season-1/`
- Check: `weeks.json` exists in season folder

**Problem: Week view shows 404 error**
- Check: Individual week file exists: `week-1.json`
- Check: File is properly formatted JSON
- Check: URL parameters are correct

**Problem: Weeks not showing in History**
- Check: `weeks.json` has been updated with new week entry
- Check: Preview data is included in weeks.json
- Validate: JSON syntax in all files

### Website Not Loading
1. **Check VSCode Terminal** for errors
2. **Validate JSON:** Right-click JSON file → "Format Document"
3. **Check file paths:** Case-sensitive, forward slashes
4. **Clear browser cache:** `Ctrl+F5`

### Git Issues
**If push fails:**
```bash
git pull origin main
git push origin main
```

### JSON Syntax Errors
**VSCode shows errors with:**
- Red underlines
- Problems panel (`Ctrl+Shift+M`)
- Use online JSON validator: jsonlint.com

---

## 📋 Weekly Update Checklist (Complete Workflow)

**Every week in VSCode (IMPORTANT ORDER):**

**STEP 1: Archive (Before updating rankings)**
- [ ] Open `data/power-rankings.json`
- [ ] Copy entire content
- [ ] Create `data/history/2026-season-1/week-X.json`
- [ ] Paste content and add `weekNumber`, `isArchived: true`
- [ ] Update `data/history/2026-season-1/weeks.json` with new week entry
- [ ] Include preview data (top 3-6 teams)

**STEP 2: Update Current Rankings**
- [ ] Open `data/power-rankings.json`
- [ ] Update `lastUpdated` to current date (e.g., "July 20, 2025")
- [ ] Update each team's commentary
- [ ] Update records
- [ ] **Update `pointsPerGame` for each team (required for charts)**
- [ ] **Update stats fields:**
  - [ ] `offensiveYPG` - Offensive yards per game
  - [ ] `totalTouchdowns` - Total touchdowns scored
  - [ ] `yardsAllowedPerGame` - Defensive yards allowed per game
- [ ] Reorder teams if rankings changed
- [ ] Save file (`Ctrl+S`)

**STEP 3: Commit and Deploy**
- [ ] Source Control panel in VSCode
- [ ] Type commit message: "Archive Week X, update Week Y"
- [ ] Commit and sync changes
- [ ] Check website in 5 minutes
- [ ] Verify History page shows archived week

---

## 🎨 Customization Guide

### Update Your Information

**Change Commissioner Info:**
1. **Edit** `data/commissioner.json`
2. **Replace placeholder text** with your actual info

**Update Team Information:**
1. **Edit** `data/teams.json`
2. **Replace** "Player One", "Player Two" with real names
3. **Update descriptions** and achievements

### Season and Week Management

**Update Season Information:**
Edit the season name/dates in:
- `data/history/seasons.json`
- `data/power-rankings.json` (`currentSeason` field)
- Individual archived week files

---

## 📈 Advanced Features

### Bulk Archive Operations

**Archive Multiple Weeks (VSCode Terminal):**
For migrating existing data, you can use this pattern:

```bash
# Create multiple week files at once
cp data/power-rankings.json data/history/2026-season-1/week-1.json
cp data/power-rankings.json data/history/2026-season-1/week-2.json
# Edit each file to add weekNumber and update data
```

### Search and Replace in VSCode

**For updating multiple files:**
1. `Ctrl+Shift+F` (Search across files)
2. Replace old season names, dates, etc.
3. Use "Replace All" carefully

### Backup Strategies

**Archive Your Archives:**
1. **Download entire repository** as ZIP monthly
2. **Keep local copies** of completed seasons
3. **Git tags** for season milestones:
   ```bash
   git tag season-1-complete
   git push origin season-1-complete
   ```

---

## 💰 Cost & Hosting

**Current Setup (FREE):**
- GitHub Pages hosting: $0
- Domain: Optional ($10-15/year)
- Total monthly: $0

**Optional Upgrades:**
- Custom domain: `mostlyforsyth.com` ($10-15/year)
- Better image hosting: CloudFlare R2 ($1-3/month)

---

## 🆘 Getting Help

**VSCode Issues:**
- `Ctrl+Shift+P` → "Developer: Reload Window"
- Check Output panel for errors
- Restart VSCode

**Archive System Issues:**
- Validate all JSON files with VSCode's built-in validator
- Check file paths and naming conventions
- Ensure weeks.json is updated when adding archived weeks

**GitHub Issues:**
- Check repository Settings > Pages
- Verify branch is set to "main"
- Wait 10 minutes for changes to appear

**Quick Support:**
- GitHub repository Issues tab
- VSCode Documentation: code.visualstudio.com/docs
- JSON guide: developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

---

## 🏆 Pro Tips for Long-Term Success

1. **Always archive before updating** - This prevents lost data
2. **Keep consistent naming** - week-1.json, week-2.json, etc.
3. **Update weeks.json immediately** - Don't forget the index file
4. **Validate JSON regularly** - Use VSCode's formatting feature
5. **Commit frequently** - Small commits are easier to track
6. **Test History page** - Check archives display correctly
7. **Plan season transitions** - Prepare folders in advance

This complete archive system transforms your dynasty league website into a comprehensive historical record that players will love browsing through! 🎉
