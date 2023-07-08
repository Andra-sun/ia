document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("growth-chart").getContext("2d");

    // Função para formatar os números com "mi" e "bi"
    function formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + "bi";
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "mi";
        }
        return num;
    }

    var data = {
        labels: [
            "outubro",
            "novembro",
            "dezembro",
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
        ],
        datasets: [
            {
                label: "numero de acessos no chat openai",
                data: [
                    0, 152700000, 266000000, 616000000, 1000000000, 1600000000,
                    1800000000,
                ],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
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
                ticks: {
                    callback: function (value, index, values) {
                        return formatNumber(value);
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        var value = context.parsed.y;
                        return formatNumber(value);
                    },
                },
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
