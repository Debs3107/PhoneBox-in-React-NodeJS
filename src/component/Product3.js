export function Product3() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>PhoneBox</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />
            <style dangerouslySetInnerHTML={{ __html: "\n\n    " }} />
            <h1 style={{ padding: "50px 20px" }}>Mobiles ranging under 10000</h1>
            <div className="container text-center" style={{ paddingTop: 100 }}>
                <div className="row ">
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src={require("../assets/1.jpg")} className="card-img-top" alt="poco" />
                            <div className="card-body">
                                <h5 className="card-title">Redmi Note 11</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Processor</b>
                                    <br />
                                    Snapdragon 680 Octa-core processor
                                </li>
                                <li className="list-group-item">
                                    <b> Display</b>
                                    <br />
                                    90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43
                                    inch); 20:9 aspect ratio
                                </li>
                                <li className="list-group-item">
                                    <b>Camera</b>
                                    <br />
                                    50 MP Quad Rear camera with 8MP Ultra-wide
                                </li>
                                <li className="list-group-item">
                                    <b>RAM &amp; Memory</b>
                                    <br />
                                    4GB | 64GB storage expandable upto 512GB with dedicated SD card
                                    slot
                                </li>
                                <li className="list-group-item">
                                    <b>Connectivity</b>
                                    <br />
                                    Dual SIM (nano+nano) dual standby(4G+4G)
                                </li>
                                <li className="list-group-item">
                                    <b>Battery</b>
                                    <br />
                                    5000 mAh large battery with 33W Pro fast charger
                                </li>
                                <li className="list-group-item">
                                    <b>Price</b>
                                    <br />
                                    ₹12,999
                                </li>
                            </ul>
                            <div className="card-body">
                                <a
                                    href="https://www.amazon.in/dp/B09QS8V5N8/?tag=smartprix-21&ascsubtag=TPMdhGF001v7wan"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-warning">
                                        Amazon
                                    </button>
                                </a>
                                <a
                                    href="https://www.flipkart.com/redmi-note-11-space-black-64-gb/p/itme81102bba3838?pid=MOBGGCHKDKGKKBZ5&affid=adminsmart1&affExtParam1=TPMduFY001vvCE7"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-primary">
                                        Flipkart
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img
                                src={require("../assets/2.jpg")}
                                className="card-img-top"
                                alt="Samsung Galaxy M13"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Samsung Galaxy M13</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Processor</b>
                                    <br />
                                    Exynos 850 (8nm) Octa-core (4x2.0 GHz Cortex-A55 &amp; 4x2.0 GHz
                                    Cortex-A55)
                                </li>
                                <li className="list-group-item">
                                    <b> Display</b>
                                    <br />
                                    1080 x 2408 pixels, 20:9 ratio (~400 ppi density) 6.6 inches,
                                    104.9 cm2 (~82.5% screen-to-body ratio)
                                </li>
                                <li className="list-group-item">
                                    <b>Camera</b>
                                    <br />
                                    50 MP, f/1.8, (wide), PDAF 5 MP, f/2.2, 123˚ (ultrawide) 2 MP,
                                    f/2.4, (depth)
                                </li>
                                <li className="list-group-item">
                                    <b>RAM &amp; Memory</b>
                                    <br />4 GB RAM | 64 GB ROM | Expandable Upto 256 GB
                                </li>
                                <li className="list-group-item">
                                    <b>Connectivity</b>
                                    <br />
                                    Dual SIM (nano+nano) dual standby(5G+5G)
                                </li>
                                <li className="list-group-item">
                                    <b>Battery</b>
                                    <br />
                                    6000 mAh
                                </li>
                                <li className="list-group-item">
                                    <b>Price</b>
                                    <br />
                                    ₹13,999.00
                                </li>
                            </ul>
                            <div className="card-body">
                                <a
                                    href="https://www.amazon.in/dp/B0B4F2YTYN?tag=gsmcom05-21&linkCode=osi&th=1&psc=1"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-warning">
                                        Amazon
                                    </button>
                                </a>
                                <a
                                    href="https://www.flipkart.com/samsung-galaxy-m13-5g-midnight-blue-64-gb/p/itma1c27c0ae3b7d"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-primary">
                                        Flipkart
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: "20rem" }}>
                            <img
                                src={require("../assets/5.jpg")}
                                className="card-img-top"
                                alt="redmi10prime"
                            />
                            <div className="card-body">
                                <h5 className="card-title">realme Narzo 50</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Processor</b>
                                    <br />
                                    Mediatek Helio G96 Octa-core processor
                                </li>
                                <li className="list-group-item">
                                    <b> Display</b>
                                    <br />
                                    FULL HD+(2400 x 1080) IPS LCD display; 15.58 centimeters (6.53
                                    inch); 20:9 aspect ratio
                                </li>
                                <li className="list-group-item">
                                    <b>Camera</b>
                                    <br />
                                    50MP + 2MP + 2MP Rear Camera | 8MP Front Camera
                                </li>
                                <li className="list-group-item">
                                    <b>RAM &amp; Memory</b>
                                    <br />
                                    4GB | 64GB storage expandable upto 512GB with dedicated SD card
                                    slot
                                </li>
                                <li className="list-group-item">
                                    <b>Connectivity</b>
                                    <br />
                                    Dual SIM (nano+nano) dual standby(4G+4G)
                                </li>
                                <li className="list-group-item">
                                    <b>Battery</b>
                                    <br />
                                    5000 mAh
                                </li>
                                <li className="list-group-item">
                                    <b>Price</b>
                                    <br />
                                    ₹12,999.00
                                </li>
                            </ul>
                            <div className="card-body">
                                <a
                                    href="https://www.amazon.in/realme-Storage-Processor-Triple-Display/dp/B09RMQYHLH"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-warning">
                                        Amazon
                                    </button>
                                </a>
                                <a
                                    href="https://www.flipkart.com/realme-narzo-50-speed-blue-64-gb/p/itm9d47ef5d10145?pid=MOBGC2E72ZFW9HBY&lid=LSTMOBGC2E72ZFW9HBYXHSNSR&marketplace=FLIPKART&q=mobiles+under+15000&store=tyy%2F4io&srno=s_1_14&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&fm=organic&iid=f7e64e30-cb30-4d1d-8a0d-12cd1370197b.MOBGC2E72ZFW9HBY.SEARCH&ppt=pp&ppn=pp&ssid=020ojzso9s0000001670512889260&qH=eb56fbd40eac45e9"
                                    target="_blank"
                                    className="card-link"
                                >
                                    <button type="button" className="btn btn-primary">
                                        Flipkart
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row " style={{ paddingTop: 100 }}>
                        <div className="col">
                            <div className="card" style={{ width: "20rem" }}>
                                <img
                                    src={require("../assets/6.jpg")}
                                    className="card-img-top"
                                    alt="poco m5"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">POCO M5 </h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Processor</b>
                                        <br />
                                        Mediatek Helio G99 Octa-core processor
                                    </li>
                                    <li className="list-group-item">
                                        <b> Display</b>
                                        <br />
                                        FULL HD+(1600x1080) IPS LCD display; 15.58 centimeters (6.53
                                        inch); 20:9 aspect ratio
                                    </li>
                                    <li className="list-group-item">
                                        <b>Camera</b>
                                        <br />
                                        50MP + 2MP Depth Sensor + 2MP Macro Sensor Rear Camera | 8MP
                                        Front Camera
                                    </li>
                                    <li className="list-group-item">
                                        <b>RAM &amp; Memory</b>
                                        <br />
                                        4GB | 64GB storage expandable upto 512GB with dedicated SD card
                                        slot
                                    </li>
                                    <li className="list-group-item">
                                        <b>Connectivity</b>
                                        <br />
                                        Dual SIM (nano+nano) dual standby(4G+4G)
                                    </li>
                                    <li className="list-group-item">
                                        <b>Battery</b>
                                        <br />
                                        5000 mAh
                                    </li>
                                    <li className="list-group-item">
                                        <b>Price</b>
                                        <br />
                                        ₹10,499.00
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <a
                                        href="https://www.amazon.in/POCO-M5-Power-Black-RAM/dp/B0BJK5C7ZW/ref=sr_1_39?crid=WN1KEPW5V4P3&keywords=mobile+under+15000&qid=1670514971&s=electronics&sprefix=mobile+under+150%2Celectronics%2C1299&sr=1-39"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-warning">
                                            Amazon
                                        </button>
                                    </a>
                                    <a
                                        href="https://www.flipkart.com/poco-m5-power-black-128-gb/p/itme91ee96e64105"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-primary">
                                            Flipkart
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "20rem" }}>
                                <img
                                    src={require("../assets/6.jpg")}
                                    className="card-img-top"
                                    alt="narzo50i"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Samsung Galaxy F23</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Processor</b>
                                        <br />
                                        Snapdragon 750G Octa-core processor
                                    </li>
                                    <li className="list-group-item">
                                        <b> Display</b>
                                        <br />
                                        HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch);
                                        20:9 aspect ratio
                                    </li>
                                    <li className="list-group-item">
                                        <b>Camera</b>
                                        <br />
                                        50MP + 2MP Depth Sensor + 2MP Macro Sensor Rear Camera | 8MP
                                        Front Camera
                                    </li>
                                    <li className="list-group-item">
                                        <b>RAM &amp; Memory</b>
                                        <br />6 GB RAM | 128 GB ROM | Expandable Upto 256 GB
                                    </li>
                                    <li className="list-group-item">
                                        <b>Connectivity</b>
                                        <br />
                                        Dual SIM (nano+nano) dual standby(5G+5G)
                                    </li>
                                    <li className="list-group-item">
                                        <b>Battery</b>
                                        <br />
                                        6000 mAh
                                    </li>
                                    <li className="list-group-item">
                                        <b>Price</b>
                                        <br />
                                        ₹14,999.00
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <a
                                        href="https://www.amazon.in/SAMSUNG-Galaxy-F23-5G-Storage/dp/B09VZDT3PQ/?tag=webtrendingams-21&ascsubtag=||1670516157|37106|553|detail-box-vary2-5342956|"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-warning">
                                            Amazon
                                        </button>
                                    </a>
                                    <a
                                        href="https://www.flipkart.com/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itm89d3030e3857e"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-primary">
                                            Flipkart
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "20rem" }}>
                                <img src={require("../assets/6.jpg")} className="card-img-top" alt="k10" />
                                <div className="card-body">
                                    <h5 className="card-title">OPPO K10</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Processor</b>
                                        <br />
                                        Qualcomm Snapdragon 680 Octa-core processor
                                    </li>
                                    <li className="list-group-item">
                                        <b> Display</b>
                                        <br />
                                        FULL HD+(1920x1080) IPS LCD display; 15.58 centimeters (6.53
                                        inch); 20:9 aspect ratio
                                    </li>
                                    <li className="list-group-item">
                                        <b>Camera</b>
                                        <br />
                                        50MP + 2MP + 2MP Rear Camera | 8MP Front Camera
                                    </li>
                                    <li className="list-group-item">
                                        <b>RAM &amp; Memory</b>
                                        <br />
                                        4GB | 64GB storage expandable upto 512GB with dedicated SD card
                                        slot
                                    </li>
                                    <li className="list-group-item">
                                        <b>Connectivity</b>
                                        <br />
                                        Dual SIM (nano+nano) dual standby(4G+4G)
                                    </li>
                                    <li className="list-group-item">
                                        <b>Battery</b>
                                        <br />
                                        5000 mAh
                                    </li>
                                    <li className="list-group-item">
                                        <b>Price</b>
                                        <br />
                                        ₹13,490
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <a
                                        href="https://www.amazon.in/OPPO-Black-Carbon-128GB-Storage/dp/B09ZHRNP28"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-warning">
                                            Amazon
                                        </button>
                                    </a>
                                    <a
                                        href="https://www.flipkart.com/oppo-k10-blue-flame-128-gb/p/itm6205e7e72fe0c?pid=MOBGCFUHQAG5GDQS&lid=LSTMOBGCFUHQAG5GDQSSCVTKH&marketplace=FLIPKART&q=mobiles+under+15000&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&fm=search-autosuggest&iid=2e554f7f-755a-45d5-a5c5-22c0413deeea.MOBGCFUHQAG5GDQS.SEARCH&ppt=sp&ppn=sp&ssid=s494pu279c0000001670516237215&qH=eb56fbd40eac45e9"
                                        target="_blank"
                                        className="card-link"
                                    >
                                        <button type="button" className="btn btn-primary">
                                            Flipkart
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row " style={{ paddingTop: 100 }}>
                            <div className="col">
                                <div className="card" style={{ width: "20rem" }}>
                                    <img
                                        src={require("../assets/5.jpg")}
                                        className="card-img-top"
                                        alt="realme 9i"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Ralme 9i</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Processor</b>
                                            <br />
                                            Snapdragon 680 Octa-core processor
                                        </li>
                                        <li className="list-group-item">
                                            <b> Display</b>
                                            <br />
                                            HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch);
                                            20:9 aspect ratio
                                        </li>
                                        <li className="list-group-item">
                                            <b>Camera</b>
                                            <br />
                                            13MP Rear Camera | 5MP Front Camera
                                        </li>
                                        <li className="list-group-item">
                                            <b>RAM &amp; Memory</b>
                                            <br />
                                            4GB | 64GB storage expandable upto 512GB with dedicated SD
                                            card slot
                                        </li>
                                        <li className="list-group-item">
                                            <b>Connectivity</b>
                                            <br />
                                            Dual SIM (nano+nano) dual standby(4G+4G)
                                        </li>
                                        <li className="list-group-item">
                                            <b>Battery</b>
                                            <br />
                                            5000 mAh
                                        </li>
                                        <li className="list-group-item">
                                            <b>Price</b>
                                            <br />
                                            ₹12,499.00
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <a
                                            href="https://www.amazon.in/realme-9i-Prism-Black-RAM/dp/B09R7C639P"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-warning">
                                                Amazon
                                            </button>
                                        </a>
                                        <a
                                            href="https://www.flipkart.com/realme-9i-5g-rocking-black-64-gb/p/itm32c638d54e6b5"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                Flipkart
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{ width: "20rem" }}>
                                    <img
                                        src={require("../assets/2.jpg")}
                                        height="320px"
                                        className="card-img-top"
                                        alt="narzo50i"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">vivo T1 44W </h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Processor</b>
                                            <br />
                                            Qualcomm Snapdragon 680 Octa-core processor
                                        </li>
                                        <li className="list-group-item">
                                            <b> Display</b>
                                            <br />
                                            FULL HD+(2400x1080) IPS LCD display; 15.58 centimeters (6.53
                                            inch); 20:9 aspect ratio
                                        </li>
                                        <li className="list-group-item">
                                            <b>Camera</b>
                                            <br />
                                            50MP + 2MP + 2MP Rear Camera | 16MP Front Camera
                                        </li>
                                        <li className="list-group-item">
                                            <b>RAM &amp; Memory</b>
                                            <br />
                                            4GB RAM | 64 GB ROM | Expandable Upto 256 GB
                                        </li>
                                        <li className="list-group-item">
                                            <b>Connectivity</b>
                                            <br />
                                            Dual SIM (nano+nano) dual standby(4G+4G)
                                        </li>
                                        <li className="list-group-item">
                                            <b>Battery</b>
                                            <br />
                                            5000 mAh
                                        </li>
                                        <li className="list-group-item">
                                            <b>Price</b>
                                            <br />
                                            ₹14,499.00
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <a
                                            href="https://www.amazon.in/realme-narzo-Mint-Green-Storage/dp/B09FKDH6FS?ref_=Oct_d_otopr_d_1805560031&pd_rd_w=PWEyR&content-id=amzn1.sym.f5d0d3e7-fe8a-4766-96ee-1c39e69d20b3&pf_rd_p=f5d0d3e7-fe8a-4766-96ee-1c39e69d20b3&pf_rd_r=RB8J1X56EK4NZN0340QY&pd_rd_wg=yq1Ep&pd_rd_r=3b7a0a38-68fb-4536-93e3-6c9abafeefd6&pd_rd_i=B09FKDH6FS&th=1"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-warning">
                                                Amazon
                                            </button>
                                        </a>
                                        <a
                                            href="https://www.amazon.in/iQOO-44W-Lumina-6GB-128GB/dp/B0B1D1DDDC/ref=sr_1_1?keywords=vivo+t1+44w+mobile&qid=1670518088&sr=8-1"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                Flipkart
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{ width: "20rem" }}>
                                    <img
                                        src={require("../assets/1.jpg")}
                                        className="card-img-top"
                                        alt="m3 pro"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">POCO M3 Pro</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Processor</b>
                                            <br />
                                            MediaTek Dimensity 700 Octa-core processor
                                        </li>
                                        <li className="list-group-item">
                                            <b> Display</b>
                                            <br />
                                            HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch);
                                            20:9 aspect ratio
                                        </li>
                                        <li className="list-group-item">
                                            <b>Camera</b>
                                            <br />
                                            48MP Rear Camera | 8MP Front Camera
                                        </li>
                                        <li className="list-group-item">
                                            <b>RAM &amp; Memory</b>
                                            <br />
                                            4GB | 64GB storage expandable upto 512GB with dedicated SD
                                            card slot
                                        </li>
                                        <li className="list-group-item">
                                            <b>Connectivity</b>
                                            <br />
                                            Dual SIM (nano+nano) dual standby(4G+4G)
                                        </li>
                                        <li className="list-group-item">
                                            <b>Battery</b>
                                            <br />
                                            5000 mAh
                                        </li>
                                        <li className="list-group-item">
                                            <b>Price</b>
                                            <br />
                                            ₹10,499.00
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <a
                                            href="https://www.amazon.in/dp/B09S6Q1V92/?tag=webtrendingams-21&ascsubtag=||1670518381|35959|553|detail-box-vary2-4552002|"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-warning">
                                                Amazon
                                            </button>
                                        </a>
                                        <a
                                            href="https://www.flipkart.com/poco-m3-pro-5g-power-black-64-gb/p/itmabfea23908d0d"
                                            target="_blank"
                                            className="card-link"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                Flipkart
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}