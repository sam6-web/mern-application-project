import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProductFromApi} from '../actions/productActions'

export class CardProduct extends Component {
    constructor(props) {
        super(props)    
        this.state = {}
    }
    //get product from API
    componentDidMount() {
    this.props.getProduct();
  } 
    
    render() {
        return (
            <div className="row">
                {this.props.product.map(
                    (el,i)=>{
                        return(
                            <div className={'col-lg-6'}>
                                <div className="md">
                                    <div className="card" style={{"width": `18rem`}}>
                                        <img src={el.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title"> {el.name} </h5>
                                            <p className="card-text"> {el.price} </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    product:state.product
})
const mapDispatchToProps = (dispatch) => ({
    getProduct: () => dispatch(getProductFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CardProduct)
