document.addEventListener("DOMContentLoaded", async () => {
    const buttonsContainer = document.getElementById("buttons-container");
    const statusMessages = new Map();

    try {
        const response = await fetch("./scripts.json");
        const scripts = await response.json();

        scripts.forEach((scriptPath) => {
            const wrapper = document.createElement("div");
            wrapper.className = "button-wrapper";

            const button = document.createElement("button");
            button.textContent = scriptPath.replace("../src/", "");

            const status = document.createElement("span");
            status.className = "execution-status";

            button.addEventListener("click", () => {
                // Очистка предыдущих скриптов
                Array.from(
                    document.querySelectorAll("[data-dynamic-script]")
                ).forEach((script) => script.remove());

                // Создаём новый script-тег с уникальным идентификатором
                const uniqueId = Date.now();
                const scriptEl = document.createElement("script");
                scriptEl.src = scriptPath + `?v=${uniqueId}`; // Добавляем параметр версии
                scriptEl.setAttribute("data-dynamic-script", "true");

                // Обработчики для отслеживания статуса загрузки
                scriptEl.onload = () => {
                    status.textContent = "✓ Выполнен";
                    status.style.color = "green";
                };

                scriptEl.onerror = () => {
                    status.textContent = "⚠ Ошибка загрузки";
                    status.style.color = "red";
                };

                document.body.appendChild(scriptEl);
            });

            wrapper.appendChild(button);
            wrapper.appendChild(status);
            buttonsContainer.appendChild(wrapper);
            statusMessages.set(scriptPath, status);
        });
    } catch (error) {
        console.error("Error loading scripts:", error);
        buttonsContainer.innerHTML =
            "<p>⚠ Ошибка загрузки списка скриптов</p>";
    }
});
