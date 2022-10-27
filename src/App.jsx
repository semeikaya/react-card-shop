import { useState } from "react";
import img from "./sneaker.jpeg";

function App() {
  const [textBtn, setTextBtn] = useState("Добавить в корзину");
  const [stateBtn, setStateBtn] = useState(true);
  const [buyState, setBuyState] = useState("addBtn");
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [detail, setDetail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setStateBtn(false);
    setTextBtn("Уже в корзине");
    setBuyState("afterBuy");
    setDeleteProduct(true);
  }

  function handleDelete(e) {
    e.preventDefault();
    setStateBtn(true);
    setTextBtn("Добавить в корзину");
    setBuyState("addBtn");
    setDeleteProduct(false);
  }
  function handleDetail() {
    setDetail(true);
  }
  function handleDetailExit() {
    setDetail(false);
  }

  return (
    <div className="main">
      <img src={img} alt="" />
      <div className="body-block">
        <div className="detail-block">
          <div className="name-price-block">
            <div className="name-sneaker">Nike Free</div>
            <div className="price">$120</div>
          </div>
          <div className="detail-btn-block">
            <button onClick={handleDetail} className="btn">
              Детали
            </button>
            {detail && (
              <div className="infoblock">
                <div className="endBlock">
                  <button onClick={handleDetailExit} className="endInfo">
                    ✖
                  </button>
                </div>
                <div className="textInfo">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          aliquid cumque voluptate?
        </div>
        <form onSubmit={handleSubmit}>
          <button className={buyState} type="submit" disabled={!stateBtn}>
            {textBtn}
          </button>
        </form>
        <form onSubmit={handleDelete}>
          {deleteProduct && (
            <button className="deleteBtn" type="submit">
              Удалить из корзины
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
