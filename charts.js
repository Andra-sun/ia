document.addEventListener("DOMContentLoaded", function () {
    // Importe o contexto do canvas
    var ctx = document.getElementById("growth-chart").getContext("2d");

    // Defina os dados do gráfico
    var data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
            {
                label: "Crescimento da IA",
                data: [10, 20, 30, 40, 50, 60],
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo do gráfico
                borderColor: "rgba(75, 192, 192, 1)", // Cor da linha do gráfico
                borderWidth: 2, // Largura da linha do gráfico
            },
        ],
    };

    // Defina as opções do gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    // Crie o gráfico de linha
    new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
    });
});
