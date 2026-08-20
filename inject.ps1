$newSections = Get-Content -Raw "new_sections.html"
$htmlFiles = Get-ChildItem -Filter "*.html" | Where-Object { $_.Name -ne "new_sections.html" }

foreach ($file in $htmlFiles) {
    $content = Get-Content -Raw $file.FullName
    
    # We look for "<!-- Footer" and inject the sections right before it
    if ($content -match "<!-- Footer") {
        # Note: $newSections might have special regex chars, so we use string replacement instead of regex -replace
        $content = $content.Replace("<!-- Footer", "$newSections`n`n    <!-- Footer")
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated $($file.Name)"
    } else {
        Write-Host "Could not find Footer comment in $($file.Name)"
    }
}
