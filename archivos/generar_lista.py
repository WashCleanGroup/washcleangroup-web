import os

carpeta = os.path.join(os.path.dirname(__file__), "files")

archivos = os.listdir(carpeta)
print(archivos)

archivos = [f for f in archivos if os.path.isfile(os.path.join(carpeta, f))]
print(archivos)

html = "<ul>\n"

for archivo in archivos:
    html += f'  <li><a href="files/{archivo}" target="_blank">{archivo}</a></li>\n'

html += "</ul>"

with open("archivos//lista_archivos.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ Lista generada en lista_archivos.html")

