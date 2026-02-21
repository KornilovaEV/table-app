import { Line } from 'react-chartjs-2'; // Импортируем компонент линии
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export const ChartComponent = ({value}) => {

    const data = {
        labels: ['Сегодня', 'Вчера', '3 дня назад', '4 дня назад', '5 дней назад', '6 дней назад', 'Неделю назад'],
        datasets: [
            { 
                data: value, // Здесь сами значения
                fill: false, // Без заливки под кривой
                borderColor: 'rgb(75, 192, 153)', // Цвет линии
                tension: 0.1, // Плавность кривой
            },
        ],
    };

    const options = {
        responsive: true, // Масштабируется под контейнер
        plugins: {
            legend: {
            display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    display: false,
                }
            }
        }
    };   

  return (
      <Line data={data} options={options} />
  )
}
