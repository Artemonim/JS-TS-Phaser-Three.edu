import os
import json

def find_js_files(folder):
    js_files = []
    for root, _, files in os.walk(folder):
        for file in files:
            if file.endswith(".js"):
                full_path = os.path.join(root, file)
                # Генерируем путь относительно корня проекта
                relative_path = os.path.relpath(full_path, start=os.path.dirname(folder))
                js_files.append(f"/{relative_path.replace('\\', '/')}")
    return js_files

if __name__ == "__main__":
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    src_folder = os.path.join(project_root, "src")
    
    files = find_js_files(src_folder)
    with open(os.path.join(project_root, "demo", "scripts.json"), "w") as f:
        json.dump(files, f, indent=2)
    print(f"Generated list with {len(files)} scripts")