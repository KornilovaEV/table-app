import { Fragment, useState } from 'react';
import './App.css';
import { data } from './constant';
import { ChartComponent } from './component/ChartComponent';

function App() {
  const [viewChart, setViewChart] = useState(false);
  const [viewChartIndex, setViewChartIndex] = useState(false);

  const COLUM = ['Показатель', 'Текущий день', 'Вчера', 'Этот день недели']

  const colorCell = (value) => {
    const [first, second] = value;
    const week = value[value.length - 1]

    const secondClass = first < second ? 'negative' : first > second ? 'positive' : '';
    const weekClass = first < week ? 'negative' : first > week ? 'positive' : '';

    const percent = first < second ? Math.round(first / second * 100) - 100 : 
    first > second ? Math.round(100 * first/second) - 100 : 0;

    return(
      <>
        <td>{first.toLocaleString('ru-RU')}</td>
        <td className={`${secondClass} secondClass`}>
          <p>{second.toLocaleString('ru-RU')}</p>
          <p>{percent}%</p>
        </td>
        <td className={weekClass}>{week.toLocaleString('ru-RU')}</td>
      </>
    )
  };

  const viewChartHandle = (ind) => {
    setViewChart((prev) => !prev);
    setViewChartIndex(ind)
  }

  return (
    <>
      <table className='container'>
        <thead>
          <tr>
            {COLUM.map((val) => (
              <th key={val} scope="col">{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({name, value}, index) => (
            <Fragment key={name}>
              <tr onClick={() => viewChartHandle(index)}>
                <th scope="row">{name}</th>
                {colorCell(value)}
              </tr>
              {viewChart && index === viewChartIndex && 
                <tr className="chart-row">
                  <td colSpan={4} >
                    <div className='chart'>
                      <ChartComponent value={value} />
                    </div>
                  </td>
                </tr>
              }                
            </Fragment>
          ))}          
        </tbody>
      </table>
    </>
  );
}

export default App;