document.getElementById("loadTopics").addEventListener("click", async () => {
    const topicsContainer = document.getElementById("topicsList");
    const errorMessage = document.getElementById("errorMessage");

    // Clear previous content
    topicsContainer.innerHTML = "";
    errorMessage.innerText = "";

    try {
        // Get the article ID from the user input
        const articleIdInput = document.getElementById("articleIdInput").value.trim();
        if (!articleIdInput) throw new Error("Please enter a valid Article ID.");

        // Fetch data from the local topics.json file
        const response = await fetch("../data/topics.json");
        if (!response.ok) throw new Error("Failed to load topics data.");
        const topics = await response.json();

        // Find the matching topic by ID
        const topic = topics.find((t) => t.id === articleIdInput);
        if (!topic) throw new Error(`No topic found for ID ${articleIdInput}.`);

        // Display the topic information
        const topicElement = document.createElement("div");
        topicElement.style.marginTop = "20px";
        topicElement.style.textAlign = "center";
        topicElement.innerHTML = `
            <h3>${topic.title}</h3>
            <a href="${topic.url}" target="_blank" style="font-size: 18px; color: #0033cc; text-decoration: underline;">
                Article Link
            </a>
        `;
        topicsContainer.appendChild(topicElement);

        // Fetch additional information from DuckDuckGo
        const duckDuckGoResponse = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(topic.title)}&format=json`);
        if (!duckDuckGoResponse.ok) throw new Error("Failed to fetch additional information.");
        const duckDuckGoData = await duckDuckGoResponse.json();

        // Extract the Abstract or display a fallback message
        const additionalInfo = duckDuckGoData.Abstract || "No additional information available for this topic.";

        // Display the additional information
        const infoElement = document.createElement("p");
        infoElement.style.marginTop = "20px";
        infoElement.style.fontStyle = "italic";
        infoElement.style.color = "#555";
        infoElement.innerText = `Core Details: ${additionalInfo}`;
        topicsContainer.appendChild(infoElement);
    } catch (error) {
        // Display an error message
        errorMessage.innerText = `Error: ${error.message}`;
    }
});
