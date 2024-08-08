function Menu(props) {
  return (
    <div className='menu'>
      <h2 className='title'>Our menu for the day</h2>

      <div className='menu__field'>
        <div className='container'>
          <div className='menu__item'>
            <img src='./src/img/tabs/vegy.jpg' alt='vegy' />
            <h3 className='menu__item-subtitle'>Fitness Menu</h3>
            <div className='menu__item-descr'>
              Fitness Menu is a new approach to cooking: more fresh vegetables
              and fruits. A product for active and healthy people. This is a
              completely new product with an optimal price and high quality!
            </div>
            <div className='menu__item-divider'></div>
            <div className='menu__item-price'>
              <div className='menu__item-cost'>Price:</div>
              <div className='menu__item-total'>
                <span>229</span> UAH/day
              </div>
            </div>
          </div>
          <div className='menu__item'>
            <img src='./src/img/tabs/elite.jpg' alt='elite' />
            <h3 className='menu__item-subtitle'>Premium Menu</h3>
            <div className='menu__item-descr'>
              In the Premium menu, we use not only beautiful packaging design,
              but also high-quality execution of dishes. Red fish, seafood,
              fruits - a restaurant menu without going to a restaurant!
            </div>
            <div className='menu__item-divider'></div>
            <div className='menu__item-price'>
              <div className='menu__item-cost'>Price:</div>
              <div className='menu__item-total'>
                <span>550</span> UAH/day
              </div>
            </div>
          </div>
        </div>
        {/* <div className="menu__item">
          <img src="./src/img/tabs/post.jpg" alt="post">
          <h3 className="menu__item-subtitle">Menu "Lenten"</h3>
          <div className="menu__item-descr">Menu "Lenten" is a careful selection of ingredients: complete absence of
          animal products, milk from almonds, oats, coconut or buckwheat, the correct
          amount of proteins through tofu and imported vegetarian steaks. </div> <div className="menu__item-divider"></div> <div className="menu__item-price"> <div className="menu__item-cost">Price:</div> <div className="menu__item-total"><span>430</span> UAH/day</div> </div> </div> */}{" "}
      </div>
    </div>
  );
}

export default Menu;
