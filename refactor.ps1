$htmlFiles = Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -ne "new_sections.html" }

foreach ($file in $htmlFiles) {
    $content = Get-Content -Raw $file.FullName
    
    # 1. Remove Sidebar
    $content = $content -replace '(?s)<div class="sidebar-overlay"></div>.*?</aside>', ''
    
    # 2. Remove Header
    $content = $content -replace '(?s)<header class="header">.*?</header>', ''
    
    # 3. Remove Footer
    $content = $content -replace '(?s)<footer class="footer">.*?</footer>', ''
    
    # 4. Inject components script tag
    if ($content -notmatch 'js/components.js') {
        $content = $content -replace '<script src="js/main.js"></script>', '<script src="js/components.js"></script>`n    <script src="js/main.js"></script>'
    }

    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Processed $($file.Name)"
}
