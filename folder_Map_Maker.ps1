# Определяем путь к файлу с именами папок для исключения
$excludeFile = Join-Path -Path $PSScriptRoot -ChildPath "folder_Map_Exclude.txt"
$excludeFolders = @()
if (Test-Path $excludeFile) {
    $excludeFolders = Get-Content $excludeFile | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
}

# Функция для построения дерева папок
function Get-FolderTree {
    param (
        [string]$Path
    )
    
    $folderName = Split-Path -Path $Path -Leaf
    
    # Если папка указана в списке исключений, возвращаем объект с пометкой исключения
    if ($excludeFolders -contains $folderName) {
        return [PSCustomObject]@{
            Name             = $folderName
            ContentExcluded  = $true
            Subfolders       = @()  # Содержимое не сканируется
        }
    }
    
    # Рекурсивно собираем поддиректории
    $children = Get-ChildItem -Path $Path -Directory | ForEach-Object { Get-FolderTree -Path $_.FullName }
    
    return [PSCustomObject]@{
        Name             = $folderName
        ContentExcluded  = $false
        Subfolders       = $children
    }
}

# Строим карту папок, начиная с текущей директории
$folderTree = Get-FolderTree -Path (Get-Location)

# Определяем путь для выходного файла
$outputFile = Join-Path -Path $PSScriptRoot -ChildPath "folder_map.json"

# Преобразуем дерево в JSON и сохраняем в файл
$folderTree | ConvertTo-Json -Depth 10 | Out-File -FilePath $outputFile -Encoding UTF8

Write-Output "Карта папок сохранена в файле: $outputFile"
