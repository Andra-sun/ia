document.addEventListener("DOMContentLoaded", function () {
    // Importe o contexto do canvas
    var ctx = document.getElementById("growth-chart").getContext("2d");

    // Defina os dados do gráfico
    var data = {
        labels: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
        ],
        datasets: [
            {
                label: "informação A",
                data: [30, 20, 30, 40, 5, 60, 10, 100],
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo do gráfico
                borderColor: "rgba(75, 192, 192, 1)", // Cor da linha do gráfico
                borderWidth: 2, // Largura da linha do gráfico
            },
            {
                label: "informação B",
                data: [4, 25, 0, 40, 5, 6, 10, 20],
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo do gráfico
                borderColor: "rgba(5, 192, 92, 1)", // Cor da linha do gráfico
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
