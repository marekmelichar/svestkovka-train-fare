import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: [],
      from: '',
      to: '',
      error: ''
    }
  }

  async componentDidMount() {
    let from = document.querySelector('.trip-from').textContent
    let to = document.querySelector('.trip-to').textContent

    await axios.get('/train_fare.json')
      .then(response => {
        let results = response.data.filter(item => item.FIELD2 === from && item.FIELD3 === to || item.FIELD2 === to && item.FIELD3 === from)
        this.setState({
          results,
          from,
          to
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {results, from, to} = this.state

    return (
      <div className="train-fair-widget">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="border-bottom-none"></th>
                <th scope="col" className="border-bottom-none"></th>
                <th scope="col" colSpan="2" className="text-center">Dospělý 15+</th>
                <th scope="col" colSpan="2" className="text-center">Dítě 6-15</th>
                <th scope="col" colSpan="2" className="text-center">Student 15-26</th>
                <th scope="col" colSpan="2" className="text-center">Žák 6-15</th>
                <th scope="col" colSpan="2" className="text-center">ZTP+ZTP/P</th>
                <th scope="col" colSpan="2" className="text-center">Pes</th>
                <th scope="col" colSpan="2" className="text-center">Kolo</th>
              </tr>
              <tr>
                <th scope="col" className="border-top-none">Odkud:</th>
                <th scope="col" className="border-top-none">Kam:</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
                <th scope="col">1 jízda</th>
                <th scope="col">denní</th>
              </tr>
            </thead>
            <tbody>
              {results.map(row => {
                return <tr key={row.FIELD2}>
                  <td>{from}</td>
                  <td>{to}</td>
                  <td>{row.FIELD4} Kč</td>
                  <td>{row.FIELD5} Kč</td>
                  <td>{row.FIELD6} Kč</td>
                  <td>{row.FIELD7} Kč</td>
                  <td>{row.FIELD8} Kč</td>
                  <td>{row.FIELD9} Kč</td>
                  <td>{row.FIELD10} Kč</td>
                  <td>{row.FIELD11} Kč</td>
                  <td>{row.FIELD12} Kč</td>
                  <td>{row.FIELD13} Kč</td>
                  <td>{row.FIELD14} Kč</td>
                  <td>{row.FIELD15} Kč</td>
                  <td>{row.FIELD16} Kč</td>
                  <td>{row.FIELD17} Kč</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
