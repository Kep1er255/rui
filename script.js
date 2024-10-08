// 必要に応じてJavaScriptを追加してください
document.addEventListener("DOMContentLoaded", () => {
    // サーバー完成までの進行状況をアニメーションで表示
    const completionPercentage = document.getElementById("completion-percentage").innerText.replace('%', '');
    const progressFill = document.querySelector("#hero .progress-fill");
    progressFill.style.width = `${completionPercentage}%`;

    // 学習進行状況のバーも同様にアニメーションで表示
    const learningProgress = document.querySelectorAll("#learning-progress .progress-fill");
    learningProgress.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = width;
    });
});
