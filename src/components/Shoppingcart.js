import Navbar from './Navbar';

const Shoppingcart = ({shoppingCart}) => {
  return (
    <div className="App">
      <Navbar />
      <h1>Cart</h1>
      <div style={{display:"block"}}>
        {shoppingCart.map(item => {
          return (
            <div
              key={item.id}
              style={{
                // CSS Cringe
                //flexBasis: '200px',
                height: '70px',
                width: '300px',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                border: 'solid black 1.5px',
                borderRadius: '5px',
                margin: '2px',
                background: 'white',
                boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
              }}>
              <div>{item.name}</div>
              <div>${item.price}</div>
              <div>{item.size}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoppingcart;
