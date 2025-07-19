// Interactive Charts for Mostly Forsyth Dynasty League

// Chart configurations with matching site aesthetics
const chartColors = {
    primary: '#0f172a',
    secondary: '#1e293b',
    accent: '#f59e0b',
    emerald: '#059669',
    grid: '#e2e8f0',
    text: '#64748b',
    background: '#ffffff'
};

// Default chart options
const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                font: {
                    family: 'Inter, sans-serif',
                    size: 12,
                    weight: 500
                },
                color: chartColors.primary
            }
        },
        tooltip: {
            backgroundColor: chartColors.secondary,
            titleFont: {
                family: 'Inter, sans-serif',
                size: 14,
                weight: 600
            },
            bodyFont: {
                family: 'Inter, sans-serif',
                size: 12
            },
            cornerRadius: 8,
            padding: 12
        }
    },
    scales: {
        x: {
            grid: {
                color: chartColors.grid,
                drawBorder: false
            },
            ticks: {
                font: {
                    family: 'Inter, sans-serif',
                    size: 11
                },
                color: chartColors.text
            }
        },
        y: {
            grid: {
                color: chartColors.grid,
                drawBorder: false
            },
            ticks: {
                font: {
                    family: 'Inter, sans-serif',
                    size: 11
                },
                color: chartColors.text
            }
        }
    }
};

// Team colors mapping
const teamColors = {
    'Maryland': '#E03A3E',        // Maryland Red
    'Maryland Terrapins': '#E03A3E',
    'Nebraska': '#E41C38',        // Nebraska Scarlet
    'Wisconsin': '#C5050C',       // Wisconsin Red
    'Wisconsin Badgers': '#C5050C',
    'USC': '#FFCC00',             // USC Gold (as requested)
    'USC Trojans': '#FFCC00',
    'Stanford': '#8C1515',        // Stanford Cardinal (dark red/auburn)
    'Stanford Cardinal': '#8C1515',
    'Minnesota': '#7A0019',       // Minnesota Maroon (amber red)
    'Minnesota Gophers': '#7A0019',
    'Minnesota Golden Gophers': '#7A0019'
};

// Team accent colors (for gradients)
const teamAccentColors = {
    'Maryland': '#FFD520',        // Maryland Gold
    'Maryland Terrapins': '#FFD520',
    'Nebraska': '#F5F1E8',        // Nebraska Cream
    'Wisconsin': '#F7F7F7',       // Wisconsin White
    'Wisconsin Badgers': '#F7F7F7',
    'USC': '#990000',             // USC Cardinal (secondary)
    'USC Trojans': '#990000',
    'Stanford': '#FFFFFF',        // Stanford White
    'Stanford Cardinal': '#FFFFFF',
    'Minnesota': '#FFCC33',       // Minnesota Gold
    'Minnesota Gophers': '#FFCC33',
    'Minnesota Golden Gophers': '#FFCC33'
};

// Team Performance Trend Chart
function createTeamTrendChart(canvasId, teamData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Get team-specific colors or use defaults
    const primaryColor = teamColors[teamData.teamName] || chartColors.accent;
    
    // Convert hex to rgba for transparent fill
    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: teamData.weeks,
            datasets: [{
                label: 'Ranking Position',
                data: teamData.rankings,
                borderColor: primaryColor,
                backgroundColor: hexToRgba(primaryColor, 0.2),
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointBackgroundColor: primaryColor,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            ...defaultOptions,
            maintainAspectRatio: true,
            aspectRatio: 2,
            scales: {
                ...defaultOptions.scales,
                y: {
                    ...defaultOptions.scales.y,
                    reverse: true, // Lower ranking number is better
                    min: 0,
                    max: 12,
                    ticks: {
                        ...defaultOptions.scales.y.ticks,
                        stepSize: 1,
                        callback: function(value) {
                            return '#' + value;
                        }
                    }
                }
            },
            plugins: {
                ...defaultOptions.plugins,
                title: {
                    display: true,
                    text: 'Ranking Trend',
                    font: {
                        family: 'Inter, sans-serif',
                        size: 16,
                        weight: 600
                    },
                    color: chartColors.primary,
                    padding: 20
                }
            }
        }
    });
}

// Points Per Game Comparison Chart
function createPPGComparisonChart(canvasId, teamsData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Sort teams by PPG
    const sortedTeams = [...teamsData].sort((a, b) => b.ppg - a.ppg);
    
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedTeams.map(team => team.name),
            datasets: [{
                label: 'Points Per Game',
                data: sortedTeams.map(team => team.ppg),
                backgroundColor: function(context) {
                    const ppg = context.parsed.y;
                    if (ppg >= 30) return '#059669';  // Green for 30+ PPG
                    if (ppg >= 20) return '#f59e0b';  // Yellow for 20-30 PPG
                    return '#ef4444';  // Red for below 20 PPG
                },
                borderRadius: 6,
                maxBarThickness: 60
            }]
        },
        options: {
            ...defaultOptions,
            scales: {
                ...defaultOptions.scales,
                y: {
                    ...defaultOptions.scales.y,
                    beginAtZero: true,
                    max: 60
                }
            },
            plugins: {
                ...defaultOptions.plugins,
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        generateLabels: function(chart) {
                            return [
                                {
                                    text: '30+ Elite',
                                    fillStyle: '#059669',
                                    strokeStyle: '#059669',
                                    lineWidth: 0,
                                    hidden: false,
                                    index: 0
                                },
                                {
                                    text: '20-30 Solid',
                                    fillStyle: '#f59e0b',
                                    strokeStyle: '#f59e0b',
                                    lineWidth: 0,
                                    hidden: false,
                                    index: 1
                                },
                                {
                                    text: 'Below 20 Struggling',
                                    fillStyle: '#ef4444',
                                    strokeStyle: '#ef4444',
                                    lineWidth: 0,
                                    hidden: false,
                                    index: 2
                                }
                            ];
                        },
                        font: {
                            family: 'Inter, sans-serif',
                            size: 12,
                            weight: 500
                        },
                        color: chartColors.primary,
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'rect'
                    }
                },
                title: {
                    display: true,
                    text: 'Points Per Game Leaders',
                    font: {
                        family: 'Inter, sans-serif',
                        size: 16,
                        weight: 600
                    },
                    color: chartColors.primary,
                    padding: 20
                }
            }
        }
    });
}

// Win/Loss Streak Visualization
function createStreakChart(canvasId, teamsData) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: teamsData.map(team => team.name),
            datasets: [{
                label: 'Current Streak',
                data: teamsData.map(team => team.streak),
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    return value > 0 ? chartColors.emerald : '#ef4444';
                },
                borderRadius: 6,
                maxBarThickness: 40
            }]
        },
        options: {
            ...defaultOptions,
            indexAxis: 'y',
            scales: {
                x: {
                    ...defaultOptions.scales.x,
                    grid: {
                        ...defaultOptions.scales.x.grid,
                        drawOnChartArea: true
                    },
                    ticks: {
                        ...defaultOptions.scales.x.ticks,
                        callback: function(value) {
                            if (value > 0) return 'W' + value;
                            if (value < 0) return 'L' + Math.abs(value);
                            return '0';
                        }
                    }
                },
                y: {
                    ...defaultOptions.scales.y,
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...defaultOptions.plugins,
                title: {
                    display: true,
                    text: 'Current Win/Loss Streaks',
                    font: {
                        family: 'Inter, sans-serif',
                        size: 16,
                        weight: 600
                    },
                    color: chartColors.primary,
                    padding: 20
                },
                tooltip: {
                    ...defaultOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.x;
                            if (value > 0) return 'Won ' + value + ' straight';
                            if (value < 0) return 'Lost ' + Math.abs(value) + ' straight';
                            return 'No current streak';
                        }
                    }
                }
            }
        }
    });
}

// Head-to-Head Comparison Radar Chart
function createH2HComparisonChart(canvasId, team1Data, team2Data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['PPG', 'Win %', 'Strength of Schedule', 'Offense Rank', 'Defense Rank'],
            datasets: [{
                label: team1Data.name,
                data: [
                    team1Data.ppg,
                    team1Data.winPercentage * 100,
                    team1Data.sos,
                    team1Data.offenseRank,
                    team1Data.defenseRank
                ],
                borderColor: chartColors.accent,
                backgroundColor: chartColors.accent + '20',
                pointBackgroundColor: chartColors.accent,
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }, {
                label: team2Data.name,
                data: [
                    team2Data.ppg,
                    team2Data.winPercentage * 100,
                    team2Data.sos,
                    team2Data.offenseRank,
                    team2Data.defenseRank
                ],
                borderColor: chartColors.emerald,
                backgroundColor: chartColors.emerald + '20',
                pointBackgroundColor: chartColors.emerald,
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            ...defaultOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    grid: {
                        color: chartColors.grid
                    },
                    angleLines: {
                        color: chartColors.grid
                    },
                    pointLabels: {
                        font: {
                            family: 'Inter, sans-serif',
                            size: 12,
                            weight: 500
                        },
                        color: chartColors.primary
                    }
                }
            },
            plugins: {
                ...defaultOptions.plugins,
                title: {
                    display: true,
                    text: 'Head-to-Head Comparison',
                    font: {
                        family: 'Inter, sans-serif',
                        size: 16,
                        weight: 600
                    },
                    color: chartColors.primary,
                    padding: 20
                }
            }
        }
    });
}

// Mini sparkline chart for team cards
function createSparkline(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, i) => i + 1),
            datasets: [{
                data: data,
                borderColor: chartColors.accent,
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { 
                    display: false,
                    reverse: true // Lower ranking is better
                }
            },
            elements: {
                line: {
                    borderJoinStyle: 'round'
                }
            }
        }
    });
}

// Export functions for use in other scripts
window.ChartFunctions = {
    createTeamTrendChart,
    createPPGComparisonChart,
    createStreakChart,
    createH2HComparisonChart,
    createSparkline
};