import { CardContainer } from '../../containers';

const GridComponent = ({products}) => {
 
  return (
    <div className='container d-flex justify-content-center mt-50 mb-50'>
      <div className='row' style={{minWidth: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
          {products?.map((data, i) => (
            <div className='col-lg-3 ' key={i}>
              <CardContainer data={data}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridComponent;
