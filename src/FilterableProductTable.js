import React from 'react'
// import SearchBar from './SearchBar'
// import ProductTable from './ProductTable'

/*
 * 需要定义的state或值：
 *原产品列表
 *用户输入的搜索文本
 *复选框的值
 * 需要根据以上值计算的值：
 *产品的筛选列表
 */
const data=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class FilterableProductTable extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                filterText: '',
                inStockOnly: true,
                list:data
            };
            this.handleSearch=this.handleSearch.bind(this);
            this.handleCheckBox=this.handleCheckBox.bind(this);
        }
        handleSearch(keywods){
            this.setState({
                filterText:keywods
            });
        }
        handleCheckBox(checkBoxStatus){
            this.setState({
                inStockOnly:checkBoxStatus
            });
        }
    render(){
        const filterText=this.state.filterText;
        const inStockOnly=this.state.inStockOnly;
        const list=this.state.list;
        return(
            <div>
                1111
                {/*<SearchBar*/}
                    {/*filterText={filterText}*/}
                    {/*inStockOnly={inStockOnly}*/}
                    {/*onSearch={this.handleSearch}*/}
                    {/*list={list}*/}
                    {/*onCheckBox={this.handleCheckBox}/>*/}
                {/*<ProductTable*/}
                    {/*filterText={filterText}*/}
                    {/*inStockOnly={inStockOnly}*/}
                    {/*list={list}*/}
                    {/*/>*/}
            </div>
        )
    }
}

export default FilterableProductTable