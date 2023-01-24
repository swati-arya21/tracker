import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actualData = await res.json();
            console.log(actualData.UP["delta"]);
            setData(actualData.UP["delta"]);
        }catch(err) {
            console.log(err);
        }

    }

    useEffect(() => {
       getCovidData();
    }, []);


  return (
    <>
    <div className ="back">
        <section>
        <h1> 🔴LIVE</h1>
        <h2>COVID-19 CORONAVIRUS STATE TRACKER (UP)</h2>

        <ul>
            <li id ="first" className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>OUR</span> COUNTRY</p>
                        <p className="card__total card__small">INDIA </p>
                      

                    </div>
                </div>
            </li>
            <li id="fir" className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>TOTAL</span> RECOVERD</p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li id="sec" className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li id="second" className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>TOTAL</span> TESTED</p>
                        <p className="card__total card__small">{data.tested}</p>
                    </div>
                </div>
            </li>

            <li className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>TOTAL</span> VACCINATED 1</p>
                        <p className="card__total card__small">{data.vaccinated1}</p>
                    </div>
                </div>
            </li>

            <li id="thr" className ="card">
                <div className="card__main">
                    <div className='card__inner'>
                        <p className="card__name"><span>TOTAL</span> VACCINATED 2</p>
                        <p className="card__total card__small">{data.vaccinated2}</p>
                    </div>
                </div>
            </li>

        </ul>
      </section>
    </div>
    </>
  )
}

export default Covid
