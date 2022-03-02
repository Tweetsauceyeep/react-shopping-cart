import Navbar from './Navbar';

const Shop = ({products, handleFunctionsOnClick}) => {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap',columnGap:"10px" }}>
        {products.map(item => {
          return (
            <div
              key={item.id}
              style={{
                // CSS Cringe
                flexBasis: '30%',
                //height: '350px',
                //width: '200px',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                border: 'solid #E6E6E6 1.5px',
                borderRadius: '5px',
                margin: '2px',
                background: 'white',
                boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
              }}>
              <h3>{item.name}</h3>
              <img
                style={{
                  height: '200px',
                  width: '200px',
                  border: 'solid grey 1px',
                  borderRadius: '5px',
                }}
                alt={item.name}
                src={require(`../Images/${item.image}`)}
              />
              <div>Price: {item.price}</div>
              <div>Size: {item.size}</div>
              <button id={item.id} onClick={(e)=>handleFunctionsOnClick(e)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
