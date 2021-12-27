import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getTheCityWeather } from './../../services/weatherService';

const Weather = () => {
    const [todayWeather, setTodayWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [citySelected, setCitySelected] = useState(false);
    const today = new Date().toLocaleDateString('fa-IR');

    useEffect(() => {
        // go to top of the page
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])

    const getWeather = async (city) => {
        try {
            // get the city today weather informtion from web service
            const {status, data} = await getTheCityWeather(city);
            if (status === 200) {
                var weatherInformationText, parser, xmlDoc;
                weatherInformationText = data;
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(weatherInformationText,"text/xml");
                
                var weatherInformationObject = {
                    cityName : xmlDoc.getElementsByTagName("city-name")[0].childNodes[0].nodeValue,
                    weatherStatus : xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue,
                    weatherSymbolPic : xmlDoc.getElementsByTagName("symbol")[0].childNodes[0].nodeValue,
                    temp : xmlDoc.getElementsByTagName("temp")[0].childNodes[0].nodeValue,
                    maxTemp : xmlDoc.getElementsByTagName("max-temp")[0].childNodes[0].nodeValue,
                    minTemp : xmlDoc.getElementsByTagName("min-temp")[0].childNodes[0].nodeValue
                }
                setTodayWeather(weatherInformationObject);
                setLoading(false);
            } 
        } catch (error) {
            setCitySelected(false);
            setLoading(false);
            alert("اطلاعات مورد نظر دریافت نشد.")
            document.getElementById("city-select").value = 0;
        }
    }
    return ( 
        <Fragment>
            <Helmet>
                <title>آب و هوا</title>
            </Helmet>
            <div className="border rounded w-100 p-5 text-white weather-container">
                <h1 className="text-center">آب و هوای امروز</h1>
                <div className="text-center">
                    {today}
                </div>
                <div className="px-3 py-1 mt-3 text-justify row justify-content-center">
                        <div className="col-12 col-md-7 col-xl-4 mx-auto">
                            <select className="custom-select font-weight-bold text-center" id="city-select" style={{fontSize: "25px"}} 
                                    defaultValue={0} 
                                    onChange={e => {
                                        setLoading(true);
                                        setCitySelected(true);
                                        getWeather(e.target.value);
                                        }
                                    }
                            >
                                <option value={0} disabled hidden>انتخاب شهر</option>
                                <option>اردبیل</option>
                                <option>اصفهان</option>
                                <option>اهواز</option>
                                <option>اراک</option>
                                <option>ایلام</option>
                                <option>بوشهر</option> 
                                <option>بیرجند</option>
                                <option>بندرعباس</option>
                                <option>بجنورد</option>
                                <option>تهران</option>
                                <option>همدان</option>
                                <option>خرم‌آباد</option>
                                <option>رشت</option>
                                <option>زاهدان</option>
                                <option>زنجان</option>
                                <option>سنندج</option>
                                <option>ساری</option>
                                <option>سمنان</option>
                                <option>شهرکرد</option>
                                <option>شیراز</option>
                                <option>قزوین</option>
                                <option>قم</option>
                                <option>کرمان</option>
                                <option>کرمانشاه</option>
                                <option>کرج</option>
                                <option>گرگان</option>
                                <option>مشهد</option>
                                <option>یاسوج</option>
                                <option>یزد</option>
                            </select>
                        </div>
                        {citySelected ? 
                                (loading ?
                                    <div className="col-12 text-center py-3" style={{height: "262px"}}>
                                        <div className="mt-1 mb-2">
                                            <img src="./images/spinners/snow.gif" alt="snow"/> 
                                            <img src="./images/spinners/compass.gif" alt="compass"/> 
                                            <img src="./images/spinners/sun.gif" alt="sun"/> 
                                        </div>
                                        <span className="h3" style={{color: "rgb(191, 208, 255)"}}>در حال دریافت اطلاعات ...</span>
                                    </div>
                                :
                                    <div className="col-12 d-flex flex-column">
                                        <div className="text-center">
                                            <img src={`http://cdn.parsijoo.ir/static/home/source/cdn/images/services/weather/${todayWeather.weatherSymbolPic}.png`} alt="weather" />
                                        </div>
                                        <div className="d-none d-md-block">
                                            <table className=" w-100 table text-white weather-table">
                                                <thead>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">شهر</th>
                                                        <th scope="col">شرایط جوی</th>
                                                        <th scope="col">دمای کنونی </th>
                                                        <th scope="col">
                                                            حداکثر دما
                                                            {" "}
                                                            <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </th>
                                                        <th scope="col">
                                                            حداقل دما
                                                            {" "}
                                                            <i className="fa fa-long-arrow-down min-temp-icon" aria-hidden="true"></i>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-right text-md-center">
                                                        <td>{todayWeather.cityName}</td>
                                                        <td>{todayWeather.weatherStatus}</td>
                                                        <td dir="ltr">
                                                            {todayWeather.temp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                        <td dir="ltr">
                                                            {todayWeather.minTemp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                        <td dir="ltr">
                                                            {todayWeather.maxTemp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-block d-md-none">
                                            <table className="table text-white weather-table">
                                                <tbody>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">شهر</th>
                                                        <td className="text-center">{todayWeather.cityName}</td>
                                                    </tr>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">شرایط جوی</th>
                                                        <td className="text-center">{todayWeather.weatherStatus}</td>
                                                    </tr>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">دمای کنونی </th>
                                                        <td className="text-center" dir="ltr">
                                                            {todayWeather.temp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">
                                                                حداکثر دما
                                                                {" "}
                                                                <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </th>
                                                        <td className="text-center" dir="ltr">
                                                            {todayWeather.minTemp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-right text-md-center">
                                                        <th scope="col">
                                                                حداقل دما
                                                                {" "}
                                                                <i className="fa fa-long-arrow-down min-temp-icon" aria-hidden="true"></i>
                                                        </th>
                                                        <td className="text-center" dir="ltr">
                                                            {todayWeather.maxTemp}
                                                            <span className="centigrade">°C</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            :
                                null
                        }
                </div>
            </div>
        </Fragment>
     );
}
 
export default Weather;