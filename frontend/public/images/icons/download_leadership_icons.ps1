# PowerShell script to download leadership SVG icons for the portal
# Run this script from the 'frontend/public/images/icons' directory

$icons = @{
    "leadership_cloudsync.svg" = "https://api.iconify.design/mdi/cloud-sync-outline.svg"
    "leadership_team.svg" = "https://api.iconify.design/mdi/account-group-outline.svg"
    "leadership_architecture.svg" = "https://api.iconify.design/mdi/domain.svg"
    "leadership_compliance.svg" = "https://api.iconify.design/mdi/shield-check-outline.svg"
}

foreach ($name in $icons.Keys) {
    $url = $icons[$name]
    Write-Host "Downloading $name ..."
    Invoke-WebRequest -Uri $url -OutFile $name
}
Write-Host "All leadership icons downloaded!"
