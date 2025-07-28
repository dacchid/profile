# PowerShell script to download all required icons for the executive portfolio
# Run this script from the 'frontend/images/icons' directory

$icons = @{
    # Cloud & Data Platforms
    "microsoftazure.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg"
    "azuredatabricks.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg"
    "azuresynapse.png" = "https://raw.githubusercontent.com/Azure/azure-icons/main/icons/Synapse_Analytics.png"
    "azuredatafactory.png" = "https://raw.githubusercontent.com/Azure/azure-icons/main/icons/Data_Factory.png"
    "powerbi.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg"
    "apachekafka.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apachekafka.svg"

    # Engineering & Integration
    "docker.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg"
    "microservices.svg" = "https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/hub/outline.svg"
    "cicd.svg" = "https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/settings/outline.svg"
    "postman.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg"
    "kubernetes.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg"
    "azuredevops.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg"
    "agile.svg" = "https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/loop/outline.svg"

    # Leadership & Strategy
    "globalteambuilding.png" = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    "crossfunctionalalignment.png" = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    "vendormanagement.png" = "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
    "digitaltransformation.png" = "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
    "technologyroadmapping.png" = "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
    "executivestakeholdermanagement.png" = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

    # Governance & Compliance
    "soc2compliance.png" = "https://cdn-icons-png.flaticon.com/512/942/942748.png"
    "datasecurityprivacy.png" = "https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
    "kpiokralignment.png" = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
    "riskmanagement.png" = "https://cdn-icons-png.flaticon.com/512/753/753345.png"
    "regulatorycompliance.png" = "https://cdn-icons-png.flaticon.com/512/942/942748.png"
    "enterprisearchitecture.png" = "https://cdn-icons-png.flaticon.com/512/906/906334.png"

    # Certifications
    "harvard.svg" = "https://upload.wikimedia.org/wikipedia/commons/2/29/Harvard_shield_wreath.svg"
    "rutgers.svg" = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Rutgers_University_seal.svg"
    "azuresolutionsarchitect.svg" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    "azureadminassociate.svg" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    "asq.svg" = "https://upload.wikimedia.org/wikipedia/commons/4/4a/ASQ_logo.svg"

    # Leadership
    "leadership_digitaltransformation.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/digitalocean.svg"
    "leadership_globalteam.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/groups.svg"
    "leadership_vision.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/lightbulb.svg"
    "leadership_regulatory.svg" = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shield.svg"
}

foreach ($name in $icons.Keys) {
    $url = $icons[$name]
    Write-Host "Downloading $name ..."
    Invoke-WebRequest -Uri $url -OutFile $name
}
Write-Host "All icons downloaded!"
