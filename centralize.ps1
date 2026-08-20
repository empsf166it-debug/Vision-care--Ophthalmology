$htmlFiles = Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -notin @("new_sections.html", "index.html") }

foreach ($file in $htmlFiles) {
    $content = Get-Content -Raw $file.FullName
    
    # 1. Remove Sidebar
    $content = $content -replace '(?s)<div class="sidebar-overlay"></div>.*?</aside>', ''
    
    # 2. Remove Header
    $content = $content -replace '(?s)<header class="header">.*?</header>', '    <!-- Centralized Components -->`n    <script src="js/components.js"></script>'
    
    # 3. Remove Footer
    $content = $content -replace '(?s)<footer class="footer">.*?</footer>', ''
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Centralized $($file.Name)"
}
