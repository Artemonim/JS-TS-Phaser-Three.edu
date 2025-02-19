param(
    [switch]$IncludeFolders
)

# Получаем путь к директории, где находится скрипт
$scriptDir = $PSScriptRoot

# Получаем список файлов в директории
$files = Get-ChildItem -Path $scriptDir -File

# Формируем текстовую часть для файлов
$fileListText = "Files:" + [Environment]::NewLine
$fileListText += ($files | ForEach-Object { $_.Name }) -join [Environment]::NewLine

$outputText = $fileListText

# Если указан флаг IncludeFolders, добавляем список папок
if ($IncludeFolders) {
    $folders = Get-ChildItem -Path $scriptDir -Directory
    $folderListText = [Environment]::NewLine + [Environment]::NewLine + "Folders:" + [Environment]::NewLine
    $folderListText += ($folders | ForEach-Object { $_.Name }) -join [Environment]::NewLine
    $outputText += $folderListText
}

# Определяем путь для выходного файла
$outputFile = Join-Path $scriptDir "file_list.txt"

# Сохраняем результат в файл
$outputText | Out-File -FilePath $outputFile -Encoding UTF8

Write-Output "Список файлов и папок (если флаг указан) сохранен в файле: $outputFile"
