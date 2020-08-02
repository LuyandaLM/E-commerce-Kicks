import React from "react";

const SneakerCards = () => {
  return (
    <div className="container">
      <div className="row">
        {/* CARD 1 */}
        <div className="col">
          <div className="card bg-dark">
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://render.nikeid.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1LowEssSP20_v2?obj=/s/shadow/shad&show=&color=000000&obj=/s/g15&color=325452&show=&obj=/s/g14&color=2c4f4d&show=&obj=/s/g13&color=f5efff&show=&obj=/s/g12&color=eeeffa&show=&obj=/s/g17&color=eff0f8&show=&obj=/s/g16&color=225557&show=&obj=/s/g1/leather&color=fdf8f5&show=&obj=/s/g2/leather&color=fdf8f5&show=&obj=/s/g3/leather&color=fdf8f5&show=&obj=/s/g4/leather&color=164f4c&show=&obj=/s/g5/leather&color=164f4c&show=&obj=/s/g6/ripple&color=0F524B&show=&obj=/s/g7/leather&color=164f4c&show=&obj=/s/g8/leather&color=fdf8f5&show=&obj=/s/g18/solid&color=fdf8f5&show=&obj=/s/g20&color=F5F4FF&show=&obj=/s/g23/OG&color=fefbf9&show=&obj=/s/g19&color=fdf5f1&show=&obj=/s/g21/solid&color=fdf8f5&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=1728"
                  alt="Sneakers"
                />
                <h2>Nike Air Force 1 Low</h2>
                <h6>
                  Price: <b>R1599</b>
                </h6>
                <h6>
                  Sizes available: <b>7</b>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col">
          <button
            className="card bg-dark"
            data-toggle="modal"
            data-target="#myModal4"
          >
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9fe97a98-2dda-492b-909a-10c1f208453f/air-jordan-1-mid-shoe-RRTg1P1y.jpg"
                  alt="Sneakers"
                />
                <h2>Nike Air Jordan 1 Mid</h2>
                <h6>
                  Price: <b>R2399</b>
                </h6>
                <h6>
                  Sizes available: <b>6,8,9</b>
                </h6>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="row">
        {/* CARD 3 */}
        <div className="col">
          <div className="card bg-dark">
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/hinecergvkuka9hew6jt/custom-nike-react-element-55-by-you.jpg"
                  alt="Sneakers"
                />
                <h2>Nike React Element 55</h2>
                <h6>
                  Price: <b>R2099</b>
                </h6>
                <h6>
                  Sizes available: <b>6,7,8,9</b>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="col">
          <button
            className="card bg-dark"
            data-toggle="modal"
            data-target="#myModal4"
          >
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/1702958/original.jpg"
                  alt="Sneakers"
                />
                <h2>Adidas Ozweego adiprene</h2>
                <h6>
                  Price: <b>R949</b>
                </h6>
                <h6>
                  Sizes available: <b>7,9</b>
                </h6>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="row">
        {/* CARD 5 */}
        <div className="col">
          <div className="card bg-dark">
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://images.puma.net/images/372429/01/fnd/ZAF/w/1000/h/1000/bg/255,255,255"
                  alt="Sneakers"
                />
                <h2>Puma RS-X MOVE TRAINERS</h2>
                <h6>
                  Price: <b>R2999</b>
                </h6>
                <h6>
                  Sizes available: <b>8</b>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="col">
          <button
            className="card bg-dark"
            data-toggle="modal"
            data-target="#myModal4"
          >
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://cdn-images.farfetch-contents.com/15/05/76/88/15057688_25617122_1000.jpg"
                  alt="Sneakers"
                />
                <h2>Nike Air Jordan 4 Retro Black Cat 2020</h2>
                <h6>
                  Price: <b>R3199</b>
                </h6>
                <h6>
                  Sizes available: <b>6,9</b>
                </h6>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SneakerCards;
